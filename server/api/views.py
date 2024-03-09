from rest_framework.response import Response
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer,SignUpSerializer
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import action
from drf_spectacular.utils import extend_schema


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    @action(detail=False,methods=['get'])
    def hello(self,request,pk=None):
        return Response({'msg':'Hello form UserViewSet end point'})
    


class SignUpAPI(viewsets.ViewSet):
    serializer_class = SignUpSerializer
    @extend_schema(responses=SignUpSerializer)
    def create(self,request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    