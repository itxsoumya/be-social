from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

class Tag(models.Model):
    name = models.CharField(max_length=50)
    post_id = models.ForeignKey(Post,on_delete=models.DO_NOTHING)

class Like(models.Model):
    postId = models.ForeignKey(Post,on_delete=models.CASCADE)
    userId = models.ForeignKey(User,on_delete=models.CASCADE)

    class Meta:
        unique_together = [['postId','userId']]

class Dislike(models.Model):
    postId = models.ForeignKey(Post,on_delete=models.CASCADE)
    userId = models.ForeignKey(User,on_delete=models.CASCADE)

    class Meta:
        unique_together = [['postId','userId']]

class Comment(models.Model):
    postId = models.ForeignKey(Post,on_delete=models.CASCADE)
    userId = models.ForeignKey(User,on_delete=models.CASCADE)
    content = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)

class CommentLike(models.Model):
    commentId = models.ForeignKey(Comment,on_delete=models.CASCADE)
    userId = models.ForeignKey(User,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class CommentDislike(models.Model):
    commentId = models.ForeignKey(Comment,on_delete=models.CASCADE)
    userId = models.ForeignKey(User,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)