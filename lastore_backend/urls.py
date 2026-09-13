from django.contrib import admin
from django.urls import path, include

from loja import views as loja_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('loja.urls')),

    # ===== PAINEL DA EQUIPE =====
    # Fora do 'api/' de propósito: essas são páginas HTML normais (não
    # endpoints JSON), então ficam no mesmo nível do 'index' logo abaixo.
    path('painel/', loja_views.painel_dashboard, name='painel_dashboard'),
    path('painel/pedidos/', loja_views.painel_pedidos, name='painel_pedidos'),
    path('painel/pedidos/<int:pedido_id>/status/', loja_views.painel_atualizar_status, name='painel_atualizar_status'),

    path('', loja_views.index, name='index'),
]