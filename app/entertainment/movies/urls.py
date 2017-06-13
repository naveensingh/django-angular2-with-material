from rest_framework import routers

from app.entertainment.movies.models.Movie import Movie
from app.entertainment.movies.models.Genre import Genre
from app.services.factory.v1.APIFactory import APIFactory

movies_router = routers.SimpleRouter(trailing_slash=True)
api_factory = APIFactory(Movie)
lookup_field = "slug"
search_fields = ("title", "plot", "release_date", "rank")
filter_fields = ("year", "actors__name", "rank")

genre_api_factory = APIFactory(Genre)
genre_lookup_field = "slug"
genre_search_fields = ("name",)

movies_router.register(r"movies",
                       api_factory.viewset(lookup_field, _search_fields=search_fields, _filter_fields=filter_fields),
                       base_name='movies')

movies_router.register(r"genre",
                       genre_api_factory.viewset(lookup_field, _search_fields=genre_search_fields), base_name='genre')

urlpatterns = movies_router.urls
