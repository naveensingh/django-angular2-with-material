from django.contrib import admin

from entertainment.artists.models import Artist
from entertainment.movies.models import Genre


class ArtistAdmin(admin.ModelAdmin):
    list_display = ('name', 'forte')
    search_fields = ['name', 'forte']
    ordering = ['name']


admin.site.register(Artist, ArtistAdmin)


class GenreAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ['name']
    ordering = ['name']


admin.site.register(Genre, GenreAdmin)
