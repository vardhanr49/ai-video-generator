# urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from ai_generator.views import VideoViewSet

router = DefaultRouter()
router.register(r'videos', VideoViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
