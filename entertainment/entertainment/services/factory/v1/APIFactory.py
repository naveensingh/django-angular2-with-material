from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import permissions, serializers
from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet


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

        return ModelAPIViewSet

    def serializer(self, _fields='__all__', **kwargs):
        class SerializeModel(serializers.ModelSerializer):
            class Meta:
                model = self._model
                fields = _fields
                depth = 2

        return SerializeModel
