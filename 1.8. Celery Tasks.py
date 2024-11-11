# tasks.py

from celery import shared_task
from .models import Video
import time  # Simulate video processing

@shared_task
def generate_video(video_id):
    video = Video.objects.get(id=video_id)
    # Simulate AI video generation
    time.sleep(10)  # Replace with actual AI generation logic
    video.status = 'completed'
    video.save()
