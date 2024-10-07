from django.shortcuts import render, HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from mainapp.models import Artist, Song
from mainapp.serializers import ArtistSerializer, SongSerializer, RegSerializer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


def main(request):
    return render(request, "frontend/index.html")


def artists_list(request):
    data = Artist.objects.all()
    serializer = ArtistSerializer(data, context={"request": request}, many=True)

    return Response(serializer.data)


class ArtistView(APIView):
    def get(self, request):
        data = Artist.objects.all()
        serializer = ArtistSerializer(data, many=True)

        return Response(serializer.data)


class CreateArtistView(generics.CreateAPIView):
    queryset = Artist
    serializer_class = ArtistSerializer


class SongView(generics.ListAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class CreateSongView(generics.CreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer


class RegView(APIView):
    @csrf_exempt
    def post(self, request):
        serializer = RegSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
