from django.urls import path
from mainapp.views import main

app_name = 'main'
urlpatterns = [
    path('', main, name='main'),
]
