from django.contrib import admin

from app.entertainment.movies.models.Movie import Movie


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    pass
