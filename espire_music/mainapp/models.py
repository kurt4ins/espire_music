from django.db import models

# Create your models here.
class Artist(models.Model):
    name = models.CharField(max_length=200)

    
class Song(models.Model):
    name = models.CharField(max_length=200)
    artist = models.ForeignKey(to=Artist, on_delete=models.CASCADE)
