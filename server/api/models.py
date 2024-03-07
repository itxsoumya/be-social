from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    likes = models.IntegerField()
    dislikes = models.IntegerField()

class Tag(models.Model):
    name = models.CharField(max_length=50)
    post_id = models.ForeignKey(Post,on_delete=models.DO_NOTHING)



