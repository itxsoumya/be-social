from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer,HyperlinkedIdentityField
from .models import Post,Comment
from rest_framework import serializers

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','password']

    def to_representation(self, instance):
       
        data = super().to_representation(instance)
        
        data.pop('password', None)
        data.pop('email',None)
        return data
        
    
class SignUpSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username','email','password']
    
    def to_representation(self, instance):
        
        data = super().to_representation(instance)
        
        data.pop('password', None)
        return data

class PostSerializer(ModelSerializer):

    class Meta:
        model=Post
        fields = ['id','title','likes','dislikes','user']
    
    

class PostReadSerializer(ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Post
        fields = ['id','title','likes','dislikes','user']

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id','userId','postId','content','likes','dislikes','created_at']