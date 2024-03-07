from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views

router = DefaultRouter()
router.register('hello', views.HelloWorld, basename='hello')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
    # path('hello/',views.HelloWorld.as_view())
]
