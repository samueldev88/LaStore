from django.urls import path

from . import views

urlpatterns = [
    path('produtos/', views.ProdutoListView.as_view(), name='api-produtos'),

    path('auth/registro/', views.RegistroView.as_view(), name='api-registro'),
    path('auth/login/', views.LoginView.as_view(), name='api-login'),
    path('auth/logout/', views.LogoutView.as_view(), name='api-logout'),
    path('auth/me/', views.MeView.as_view(), name='api-me'),

    path('favoritos/', views.FavoritoListCreateView.as_view(), name='api-favoritos'),
    path('favoritos/<int:produto_id>/', views.FavoritoDeleteView.as_view(), name='api-favorito-delete'),

    path('pedidos/', views.PedidoListCreateView.as_view(), name='api-pedidos'),
]
