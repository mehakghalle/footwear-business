from django.urls import path
from . import views

urlpatterns = [
    path('products/', views.products),
    path('products/<int:pk>/', views.product_detail),

    path('cart/', views.cart_items),
    path('cart/add/', views.add_to_cart),
    path('cart/update/<int:pk>/', views.update_cart_quantity),
    path('cart/delete/<int:pk>/', views.delete_cart_item),

    path('order/place/', views.place_order),
    path('orders/', views.orders),
]