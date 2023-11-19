from rest_framework import generics
from .models import ContactRequest
from .serializers import ContactRequestSerializer


class ContactRequestListCreate(generics.ListCreateAPIView):
    queryset = ContactRequest.objects.all()
    serializer_class = ContactRequestSerializer
