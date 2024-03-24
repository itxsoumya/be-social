from rest_framework.response import Response
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer, SignUpSerializer, PostSerializer, PostReadSerializer, CommentSerializer
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import action
from drf_spectacular.utils import extend_schema
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Post, PostLike, PostDislike, Comment, CommentLike, CommentDislike
from rest_framework import serializers
from django.contrib.auth.hashers import make_password


class LikesAndDislikeSerializerForPost(serializers.Serializer):
    postId = serializers.IntegerField()


class LikeAndDislikeSerializerForComment(serializers.Serializer):
    commentId = serializers.IntegerField()


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['get'])
    def hello(self, request, pk=None):
        return Response({'msg': 'Hello form UserViewSet end point'})

# for post


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly]

    @extend_schema(responses=PostReadSerializer)
    def list(self, request, *args, **kwargs):
        data = Post.objects.all()
        serializer = PostReadSerializer(data, many=True)

        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        data = request.data
        data['user'] = request.user.id
        print(data)

        ser = self.serializer_class(data=data)
        if ser.is_valid():
            ser.save()
            return Response(ser.data)

        return Response(ser.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def like(self, request, pk=None):
        userId = request.user.id
        likeserializer = LikesAndDislikeSerializerForPost(data=request.data)
        if not likeserializer.is_valid():
            return Response(likeserializer.errors, status=status.HTTP_400_BAD_REQUEST)
        postId = likeserializer.data['postId']

        if PostLike.objects.filter(postId=postId, userId=userId).exists():
            return Response({'detail': "You have already liked the post"})

        try:
            post = Post.objects.get(id=postId)
            if PostDislike.objects.filter(postId=postId, userId=userId).exists():
                PostDislike.objects.filter(
                    postId=postId, userId=userId).delete()
                post.dislikes = post.dislikes - 1

            post.likes = post.likes+1
            post.save()
            new_like = PostLike(postId=post, userId=request.user)

            new_like.save()

            return Response({'detail': 'OK'})

        except Exception as e:
            print(e)
            return Response({'detail': "post does not exist"})

    @action(detail=False, methods=['post'])
    def dislike(self, request, pk=None):
        userId = request.user.id
        dislikeserializer = LikesAndDislikeSerializerForPost(data=request.data)
        if not dislikeserializer.is_valid():
            return Response(dislikeserializer.errors, status=status.HTTP_400_BAD_REQUEST)
        postId = dislikeserializer.data['postId']

        if PostDislike.objects.filter(postId=postId, userId=userId).exists():
            return Response({'detail': "You have already disliked the post"})

        try:
            post = Post.objects.get(id=postId)
            if PostLike.objects.filter(postId=postId, userId=userId).exists():
                PostLike.objects.filter(postId=postId, userId=userId).delete()
                post.likes = post.likes - 1

            post.dislikes = post.dislikes+1
            post.save()
            new_like = PostDislike(postId=post, userId=request.user)

            new_like.save()

            return Response({'detail': 'OK'})

        except Exception as e:
            print(e)
            return Response({'detail': "post does not exist"})


class SecrettestAPI(viewsets.ViewSet):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request, pk=None):
        return Response({'msg': 'this is from secret door'})


class SignUpAPI(viewsets.ViewSet):

    @extend_schema(responses=SignUpSerializer)
    def create(self, request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            encrypted_data = make_password(
                serializer.validated_data['password'])
            serializer.validated_data['password'] = encrypted_data
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentAPI(viewsets.ViewSet):

    def create(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def like(self, request, pk=None):
        userId = request.user.id
        likeserializer = LikeAndDislikeSerializerForComment(data=request.data)
        if not likeserializer.is_valid():
            return Response(likeserializer.errors, status=status.HTTP_400_BAD_REQUEST)
        commentId = likeserializer.data['commentId']

        if CommentLike.objects.filter(commentId=commentId, userId=userId).exists():
            return Response({'detail': "You have already liked the comment"})

        try:
            comment = Comment.objects.get(id=commentId)
            if CommentDislike.objects.filter(commentId=commentId, userId=userId).exists():
                CommentDislike.objects.filter(
                    commentId=commentId, userId=userId).delete()
                comment.dislikes = comment.dislikes - 1

            comment.likes = comment.likes+1
            comment.save()
            new_like = CommentLike(commentId=comment, userId=request.user)

            new_like.save()

            return Response({'detail': 'OK'})

        except Exception as e:
            print(e)
            return Response({'detail': "comment does not exist"})
