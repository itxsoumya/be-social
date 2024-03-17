from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api import views
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from drf_spectacular.views import SpectacularAPIView,SpectacularSwaggerView

router = DefaultRouter()
router.register('users', views.UserViewSet, basename='users')
router.register('signup', views.SignUpAPI, basename='signup')
router.register('secret',views.SecrettestAPI,basename='secret')
router.register('posts',views.PostViewSet,basename='posts')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/login/',TokenObtainPairView.as_view(),name='token'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/schema/',SpectacularAPIView.as_view(),name='schema'),
    path('api/docs/',SpectacularSwaggerView.as_view(url_name='schema'))
]
