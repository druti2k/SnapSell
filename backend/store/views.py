from django.shortcuts import render
from rest_framework import generics
from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer

# Create your views here.

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class OrderListCreateView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
