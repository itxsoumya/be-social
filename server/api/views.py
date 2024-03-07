from rest_framework.response import Response
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializers
from rest_framework import viewsets
from rest_framework import status


class HelloWorld(viewsets.ViewSet):
    
    def list(self,request):
        users = User.objects.all()
        serializer = UserSerializers(users,many=True)

        return Response(serializer.data)

    def create(self,request):
        serializer = UserSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
        

    

    
