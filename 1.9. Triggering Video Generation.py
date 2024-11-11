# views.py (add to VideoViewSet)

from .tasks import generate_video

def perform_create(self, serializer):
    video = serializer.save()
    generate_video.delay(video.id)
