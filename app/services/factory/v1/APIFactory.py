from rest_framework import permissions, serializers
from rest_framework.filters import SearchFilter, DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from app.entertainment.artists.models.Artist import Artist
from app.entertainment.movies.models.Genre import Genre
from app.entertainment.movies.models.Movie import Movie


class APIFactory:
    def __init__(self, _model):
        self._model = _model
        pass

    def viewset(self, _lookup_field, _search_fields=(), _filter_fields=()):
        class ModelAPIViewSet(ModelViewSet):
            serializer_class = self.serializer()
            permission_classes = (permissions.AllowAny,)
            model = self._model
            queryset = self._model.objects.all()
            lookup_field = _lookup_field
            filter_backends = (DjangoFilterBackend, SearchFilter,)
            search_fields = _search_fields
            filter_fields = _filter_fields

            def update(self, request, *args, **kwargs):
                partial = kwargs.pop('partial', True)
                movie = request.GET.get('type')
                instance = self.get_object()
                if movie == "movie":
                    serializer = SerializeUpdateModel(instance, data=request.data, partial=partial)
                else:
                    serializer = self.get_serializer(instance, data=request.data, partial=partial)
                serializer.is_valid(raise_exception=True)
                self.perform_update(serializer)
                if getattr(instance, '_prefetched_objects_cache', None):
                    instance._prefetched_objects_cache = {}

                return Response(self.get_serializer(self.get_object()).data)

        return ModelAPIViewSet

    def serializer(self, _fields='__all__', **kwargs):
        class SerializeModel(serializers.ModelSerializer):
            class Meta:
                model = self._model
                fields = _fields
                depth = 2

        return SerializeModel


class SerializeUpdateModel(serializers.ModelSerializer):
    genres = serializers.PrimaryKeyRelatedField(queryset=Genre.objects.all(), many=True)
    actors = serializers.PrimaryKeyRelatedField(queryset=Artist.objects.all(), many=True)
    directors = serializers.PrimaryKeyRelatedField(queryset=Artist.objects.all(), many=True)

    class Meta:
        model = Movie
        fields = '__all__'
