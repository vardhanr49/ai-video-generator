ai-video-generator/
├── frontend/               # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
├── backend/                # Django backend
│   ├── ai_generator/       # Main Django app
│   ├── media/              # Directory for storing generated videos
│   ├── templates/
│   ├── static/
│   ├── settings.py
│   ├── urls.py
│   ├── views.py
│   ├── models.py
│   ├── serializers.py
│   ├── tasks.py            # Celery tasks for background processing
│   ├── Dockerfile
│   ├── requirements.txt
│   └── manage.py
├── docker-compose.yml
└── README.md
