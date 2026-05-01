from rest_framework import serializers
from .models import Product, CartItem, Order, OrderItem


class ProductSerializer(serializers.ModelSerializer):
    discount = serializers.SerializerMethodField()
    size_list = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_discount(self, obj):
        return obj.discount_percent()

    def get_size_list(self, obj):
        return [size.strip() for size in obj.sizes.split(",")]


class CartItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    product_id = serializers.IntegerField(write_only=True)
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = CartItem
        fields = ['id', 'product', 'product_id', 'size', 'quantity', 'total_price']

    def get_total_price(self, obj):
        return obj.total_price()


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'