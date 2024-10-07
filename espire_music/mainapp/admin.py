from django.contrib import admin
from mainapp.models import Artist, Song

# Register your models here.

admin.site.register(Artist)
admin.site.register(Song)