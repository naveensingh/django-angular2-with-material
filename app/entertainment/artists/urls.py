from rest_framework import routers

from app.entertainment.artists.models.Artist import Artist
from app.services.factory.v1.APIFactory import APIFactory

artists_router = routers.SimpleRouter(trailing_slash=True)
api_factory = APIFactory(Artist)
lookup_field = "slug"
search_fields = ("name", "forte")
filter_fields = ("forte",)

artists_router.register(r"",
                        api_factory.viewset(lookup_field, _search_fields=search_fields, _filter_fields=filter_fields),
                        base_name='artists')

urlpatterns = artists_router.urls
