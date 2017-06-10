from django.contrib import admin

from entertainment.movies.models import Movie


@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    pass
