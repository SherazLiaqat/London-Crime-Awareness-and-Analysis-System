from django.urls import path
from .views import ContactRequestListCreate

urlpatterns = [
    path('contact/', ContactRequestListCreate.as_view(), name='contact-request-list-create'),
]
