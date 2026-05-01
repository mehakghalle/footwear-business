from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, CartItem, Order, OrderItem
from .serializers import ProductSerializer, CartItemSerializer, OrderSerializer


@api_view(['GET'])
def products(request):
    data = Product.objects.all().order_by('-id')

    section = request.GET.get('section')
    category = request.GET.get('category')
    search = request.GET.get('search')

    if section and section != "All":
        data = data.filter(section=section)

    if category and category != "All":
        data = data.filter(category=category)

    if search:
        data = data.filter(name__icontains=search)

    serializer = ProductSerializer(data, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_detail(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)


@api_view(['GET'])
def cart_items(request):
    cart = CartItem.objects.all()
    serializer = CartItemSerializer(cart, many=True)

    total = sum(item.total_price() for item in cart)

    return Response({
        "cart_items": serializer.data,
        "total_amount": total
    })


@api_view(['POST'])
def add_to_cart(request):
    product_id = request.data.get("product_id")
    size = request.data.get("size", "Default")
    quantity = int(request.data.get("quantity", 1))

    product = Product.objects.get(id=product_id)

    cart_item, created = CartItem.objects.get_or_create(
        product=product,
        size=size
    )

    if not created:
        cart_item.quantity += quantity
    else:
        cart_item.quantity = quantity

    cart_item.save()

    return Response({"message": "Product added to cart"})


@api_view(['POST'])
def update_cart_quantity(request, pk):
    action = request.data.get("action")
    item = CartItem.objects.get(id=pk)

    if action == "increase":
        item.quantity += 1

    if action == "decrease" and item.quantity > 1:
        item.quantity -= 1

    item.save()

    return Response({"message": "Cart updated"})


@api_view(['DELETE'])
def delete_cart_item(request, pk):
    item = CartItem.objects.get(id=pk)
    item.delete()
    return Response({"message": "Item removed"})


@api_view(['POST'])
def place_order(request):
    cart = CartItem.objects.all()

    if not cart.exists():
        return Response({"error": "Cart is empty"}, status=400)

    total = sum(item.total_price() for item in cart)

    order = Order.objects.create(
        full_name=request.data.get("full_name"),
        email=request.data.get("email"),
        phone=request.data.get("phone"),
        address=request.data.get("address"),
        payment_method=request.data.get("payment_method"),
        total_amount=total
    )

    for item in cart:
        OrderItem.objects.create(
            order=order,
            product_name=item.product.name,
            size=item.size,
            quantity=item.quantity,
            price=item.product.price
        )

    cart.delete()

    serializer = OrderSerializer(order)

    return Response({
        "message": "Order placed successfully",
        "order": serializer.data
    })


@api_view(['GET'])
def orders(request):
    data = Order.objects.all().order_by('-created_at')
    serializer = OrderSerializer(data, many=True)
    return Response(serializer.data)