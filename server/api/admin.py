from django.contrib import admin
from .models import Post, PostLike, PostDislike, Comment, CommentLike, CommentDislike


@admin.register(Post)
class PostModelAdmin(admin.ModelAdmin):
    list_display = ['title', 'user', 'likes', 'dislikes']


@admin.register(PostLike)
class LikeModelAdmin(admin.ModelAdmin):
    list_display = ['postId', 'userId']


@admin.register(PostDislike)
class DislikeModelAdmin(admin.ModelAdmin):
    list_display = ['postId', 'userId']


@admin.register(Comment)
class CommentModelAdmin(admin.ModelAdmin):
    list_display = ['userId', 'postId', 'content',
                    'likes', 'dislikes', 'created_at']

@admin.register(CommentLike)
class CommentLikeAdmin(admin.ModelAdmin):
    list_display = ['commentId','userId']

@admin.register(CommentDislike)
class CommentDislikeAdmin(admin.ModelAdmin):
    list_display = ['commentId','userId']
