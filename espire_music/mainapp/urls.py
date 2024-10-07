from django.urls import path
from mainapp.views import main, ArtistView, CreateArtistView, SongView, CreateSongView, RegView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'main'

urlpatterns = [
    path('artist', ArtistView.as_view()),
    path('create_artist', CreateArtistView.as_view()),
    path('song', SongView.as_view()),
    path('create_song', CreateSongView.as_view()),
    path('reg', RegView.as_view()),
    path('token/refresh',TokenRefreshView.as_view()),
    path('token/', TokenObtainPairView.as_view())
]
