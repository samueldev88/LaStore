from date import date
from functools import wraps

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db.models import Sum
from django.middleware.csrf import get_token
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse
from django.views.decorators.http import require_POST
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Favorito, ItemPedido, Pedido, Produto
from .serializers import (
    FavoritoSerializer,
    LoginSerializer,
    PedidoSerializer,
    ProdutoSerializer,
    RegistroSerializer,
    UsuarioSerializer,
)


def index(request):
    """
    Renderiza o site. get_token() garante que o cookie 'csrftoken' já
    exista na primeira visita, pro script.js conseguir mandá-lo de volta
    nos POSTs (login, cadastro, favoritar, finalizar compra).
    """
    get_token(request)

    def formatar_preco(valor):
        return f'R$ {valor:,.2f}'.replace(',', 'X').replace('.', ',').replace('X', '.')

    produtos = list(Produto.objects.all())
    for p in produtos:
        # Formatação simples de moeda BR (R$ 1.234,56) só pra exibição.
        p.preco_fmt = formatar_preco(p.preco)
        # Produtos em oferta também precisam do preço com desconto
        # formatado aqui, senão a grade "Produtos em Destaque" mostra só
        # o preço riscado (preco_fmt) e o preço vermelho (preco_oferta_fmt)
        # fica vazio no template, já que esse campo nunca era calculado
        # nesse loop antes.
        if p.em_oferta:
            p.preco_oferta_fmt = formatar_preco(p.preco_com_desconto)

    ofertas = list(Produto.objects.filter(em_oferta=True))
    for o in ofertas:
        o.preco_fmt = formatar_preco(o.preco)
        o.preco_oferta_fmt = formatar_preco(o.preco_com_desconto)

    return render(request, 'index.html', {'produtos': produtos, 'ofertas': ofertas})


# ===== PRODUTOS =====

class ProdutoListView(generics.ListAPIView):
    serializer_class = ProdutoSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        queryset = Produto.objects.all()
        categoria = self.request.query_params.get('categoria')
        if categoria:
            queryset = queryset.filter(categoria=categoria)
        oferta = self.request.query_params.get('oferta')
        if oferta:
            queryset = queryset.filter(em_oferta=True)
        return queryset


# ===== AUTENTICAÇÃO =====

class RegistroView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = RegistroSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        dados = serializer.validated_data

        partes_nome = dados['nome'].strip().split(' ')
        primeiro_nome = partes_nome[0]
        sobrenome = ' '.join(partes_nome[1:])

        User.objects.create_user(
            username=dados['email'],
            email=dados['email'],
            password=dados['senha'],
            first_name=primeiro_nome,
            last_name=sobrenome,
        )
        return Response({'mensagem': 'Conta criada com sucesso.'}, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['email']
        senha = serializer.validated_data['senha']

        user = authenticate(request, username=email, password=senha)
        if user is None:
            return Response({'erro': 'E-mail ou senha inválidos.'}, status=status.HTTP_401_UNAUTHORIZED)

        login(request, user)
        return Response(UsuarioSerializer(user).data)


class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)


class MeView(APIView):
    """Usado no carregamento da página pra saber se já existe uma sessão ativa."""
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'autenticado': False})
        dados = UsuarioSerializer(request.user).data
        return Response({'autenticado': True, **dados})


# ===== FAVORITOS =====

class FavoritoListCreateView(generics.ListCreateAPIView):
    serializer_class = FavoritoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Favorito.objects.filter(usuario=self.request.user)

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)


class FavoritoDeleteView(generics.DestroyAPIView):
    serializer_class = FavoritoSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_url_kwarg = 'produto_id'

    def get_queryset(self):
        return Favorito.objects.filter(usuario=self.request.user)

    def get_object(self):
        produto_id = self.kwargs['produto_id']
        return self.get_queryset().get(produto_id=produto_id)


# ===== PEDIDOS (histórico de compras) =====

class PedidoListCreateView(generics.ListCreateAPIView):
    serializer_class = PedidoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Pedido.objects.filter(usuario=self.request.user)

    def perform_create(self, serializer):
        serializer.save(usuario=self.request.user)


# ===== PAINEL DA EQUIPE =====
# Views renderizadas em HTML (não API) — telas internas, só pra quem
# está logado E marcado como "membro da equipe" (is_staff) no /admin.
#
# Importante: aqui não usamos o @login_required padrão do Django, porque
# o login do site é feito via modal/AJAX na própria home (não existe uma
# página de login separada em /accounts/login/, que é pra onde o
# @login_required redirecionaria por padrão). Em vez disso, o decorator
# abaixo simplesmente manda quem não tem permissão de volta pra home.

def somente_equipe(view_func):
    @wraps(view_func)
    def view_protegida(request, *args, **kwargs):
        if not (request.user.is_authenticated and request.user.is_staff):
            return redirect('/')
        return view_func(request, *args, **kwargs)
    return view_protegida


@somente_equipe
def painel_dashboard(request):
    hoje = date.today()

    total_vendido = Pedido.objects.aggregate(soma=Sum('total'))['soma'] or 0
    pedidos_no_mes = Pedido.objects.filter(
        criado_em__year=hoje.year, criado_em__month=hoje.month
    ).count()

    mais_vendidos = (
        ItemPedido.objects
        .values('nome_produto')
        .annotate(quantidade_total=Sum('quantidade'))
        .order_by('-quantidade_total')[:5]
    )

    contexto = {
        'ativo': 'dashboard',
        'total_vendido': total_vendido,
        'pedidos_no_mes': pedidos_no_mes,
        'total_pedidos': Pedido.objects.count(),
        'total_produtos': Produto.objects.count(),
        'produtos_em_oferta': Produto.objects.filter(em_oferta=True).count(),
        'mais_vendidos': list(mais_vendidos),
        'pedidos_recentes': Pedido.objects.select_related('usuario').all()[:8],
    }
    return render(request, 'painel/dashboard.html', contexto)


@somente_equipe
def painel_pedidos(request):
    status_filtro = request.GET.get('status', '')
    pedidos = Pedido.objects.select_related('usuario').prefetch_related('itens').all()
    if status_filtro:
        pedidos = pedidos.filter(status=status_filtro)

    contexto = {
        'ativo': 'pedidos',
        'pedidos': pedidos,
        'status_escolhas': Pedido.STATUS_CHOICES,
        'status_filtro': status_filtro,
    }
    return render(request, 'painel/pedidos.html', contexto)


@somente_equipe
@require_POST
def painel_atualizar_status(request, pedido_id):
    pedido = get_object_or_404(Pedido, id=pedido_id)
    novo_status = request.POST.get('status')

    if novo_status in dict(Pedido.STATUS_CHOICES):
        pedido.status = novo_status
        pedido.save(update_fields=['status'])

    return redirect(request.META.get('HTTP_REFERER') or reverse('painel_pedidos'))