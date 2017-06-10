from django.conf.urls import url, include

urlpatterns = [
    url(r'^v1.0/entertainment/category/', include('entertainment.movies.urls')),
    url(r'^v1.0/entertainment/artists/', include('entertainment.artists.urls')),
]
