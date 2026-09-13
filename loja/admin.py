from django.contrib import admin

from .models import Favorito, ItemPedido, Pedido, Produto


@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    list_display = ('nome', 'categoria', 'preco', 'em_oferta', 'desconto_percentual')
    list_editable = ('em_oferta', 'desconto_percentual')
    list_filter = ('categoria', 'em_oferta')
    search_fields = ('nome', 'slug')
    prepopulated_fields = {'slug': ('nome',)}


class ItemPedidoInline(admin.TabularInline):
    model = ItemPedido
    extra = 0
    readonly_fields = ('produto', 'nome_produto', 'preco_unitario', 'quantidade')


@admin.register(Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ('id', 'usuario', 'total', 'status', 'criado_em')
    list_editable = ('status',)
    list_filter = ('status', 'criado_em')
    inlines = [ItemPedidoInline]


@admin.register(Favorito)
class FavoritoAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'produto', 'criado_em')
    list_filter = ('criado_em',)