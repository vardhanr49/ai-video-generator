# views.py

from rest_framework import viewsets
from .models import Video
from .serializers import VideoSerializer
from rest_framework.permissions import IsAuthenticated

class VideoViewSet(viewsets.ModelViewSet):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
    permission_classes = [IsAuthenticated]
