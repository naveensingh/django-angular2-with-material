from django.db import models
from django.utils.timesince import timesince

from app.base.models.Audit import Audit
from app.base.models.Slug import Slug
from app.entertainment.artists.models.Artist import Artist
from app.entertainment.movies.models.Genre import Genre


class Movie(Slug, Audit):
    title = models.CharField(max_length=100, blank=False, null=False)
    plot = models.TextField(blank=True, null=True)
    release_date = models.DateTimeField(blank=True, null=True)
    rating = models.FloatField(null=True, blank=True)
    rank = models.FloatField(null=True, blank=True)
    year = models.FloatField(null=True, blank=True)
    image_url = models.URLField(null=True, blank=True)
    running_time_secs = models.FloatField(null=True, blank=True)
    directors = models.ManyToManyField(Artist, related_name="directors")
    actors = models.ManyToManyField(Artist, related_name="actors")
    genres = models.ManyToManyField(Genre)

    class Meta:
        ordering = ('-year',)

    def __str__(self):
        return self.title

    def __unicode__(self):
        return self.title

    def readable_releast_date(self, *args, **kwargs):
        return timesince(self.release_date)

    def all_directors(self, *args, **kwargs):
        return self.directors.values_list("name", flat=True)

    def all_actors(self, *args, **kwargs):
        return self.actors.values_list("name", flat=True)

    def all_genre(self, *args, **kwargs):
        return self.genres.values_list("name", flat=True)
