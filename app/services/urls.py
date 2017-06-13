from django.conf.urls import url, include

urlpatterns = [
    url(r'^v1.0/app/entertainment/', include('app.entertainment.movies.urls')),
    url(r'^v1.0/app/artists/', include('app.entertainment.artists.urls')),
]
