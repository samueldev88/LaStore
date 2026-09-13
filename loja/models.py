from django.contrib.auth.models import User
from django.db import models


class Produto(models.Model):
    """
    Antes, os produtos ficavam com preço/nome/imagem escritos direto no
    HTML. Agora viram registros no banco, editáveis pelo /admin, sem
    precisar mexer em código pra trocar um preço ou adicionar um item.
    """
    CATEGORIA_CHOICES = [
        ('celular', 'Celulares'),
        ('notebook', 'Notebooks'),
        ('fone', 'Fones'),
        ('smartwatch', 'SmartWatches'),
    ]

    slug = models.SlugField(max_length=60, unique=True)
    nome = models.CharField(max_length=200)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    imagem_url = models.URLField(max_length=500)
    descricao = models.TextField(blank=True)
    categoria = models.CharField(max_length=20, choices=CATEGORIA_CHOICES, default='celular')
    em_oferta = models.BooleanField(
        default=False,
        verbose_name='Em oferta',
        help_text='Marque para o produto aparecer no carrossel "Ofertas do Dia" da home.',
    )
    desconto_percentual = models.PositiveIntegerField(
        default=15,
        verbose_name='Desconto (%)',
        help_text='Percentual de desconto aplicado ao preço quando "Em oferta" estiver marcado.',
    )

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.nome

    @property
    def preco_com_desconto(self):
        if not self.em_oferta:
            return self.preco
        from decimal import Decimal
        fator = Decimal('1') - (Decimal(self.desconto_percentual) / Decimal('100'))
        return (self.preco * fator).quantize(Decimal('0.01'))


class Favorito(models.Model):
    """Substitui o antigo array salvo no localStorage do navegador."""
    usuario = models.ForeignKey(User, related_name='favoritos', on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    criado_em = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('usuario', 'produto')
        ordering = ['-criado_em']

    def __str__(self):
        return f'{self.usuario} ♥️ {self.produto}'


class Pedido(models.Model):
    """Um pedido finalizado — o histórico de compras que aparece em 'Minha Conta'."""

    STATUS_CHOICES = [
        ('recebido', 'Recebido'),
        ('separacao', 'Em separação'),
        ('enviado', 'Enviado'),
        ('entregue', 'Entregue'),
    ]

    usuario = models.ForeignKey(User, related_name='pedidos', on_delete=models.CASCADE)
    criado_em = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='recebido')

    class Meta:
        ordering = ['-criado_em']

    def __str__(self):
        return f'Pedido #{self.id} de {self.usuario}'


class ItemPedido(models.Model):
    """
    Guarda uma 'fotografia' do nome/preço no momento da compra
    (nome_produto/preco_unitario), em vez de só referenciar o Produto —
    assim, se o preço do produto mudar depois, o histórico antigo continua
    mostrando o valor que a pessoa realmente pagou.
    """
    pedido = models.ForeignKey(Pedido, related_name='itens', on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, null=True, blank=True, on_delete=models.SET_NULL)
    nome_produto = models.CharField(max_length=200)
    preco_unitario = models.DecimalField(max_digits=10, decimal_places=2)
    quantidade = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.quantidade}x {self.nome_produto}'