# firstapp/urls.py
from django.urls import path
from .views import cruisetrips_list, cruisetrip_detail

urlpatterns = [
    path('trips/', cruisetrips_list, name='cruisetrips_list'),
    path('trips/<int:pk>/', cruisetrip_detail, name='cruisetrip_detail'),
]
