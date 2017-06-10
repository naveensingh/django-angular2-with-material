import json
import logging

from django.conf import settings
from django.core.management import BaseCommand

from app.entertainment.artists.models import Artist
from app.entertainment.movies.models import Movie, Genre

logger = logging.getLogger(__name__)


class Command(BaseCommand):
    def handle(self, **options):
        filepath = settings.BASE_DIR + "/moviedata.json"
        try:
            with open(filepath) as open_file:
                self.content = json.loads(open_file.read())
                open_file.close()
        except Exception as es:
            print es
            self.content = []
        self.add_movies()

    def add_movies(self):
        for item in self.content:
            movie = Movie()
            movie.title = item["title"]
            movie.year = item["year"]
            movie.release_date = item["info"].get("release_date")
            movie.rating = item["info"].get("rating")
            movie.plot = item["info"].get("plot")
            movie.rank = item["info"].get("rank")
            movie.running_time_secs = item["info"].get("running_time_secs")
            movie.image_url = item["info"].get("running_time_secs")
            movie.save()
            if item["info"].get("actors"):
                for actor in item["info"].get("actors"):
                    act = Artist.objects.get_or_create(name=actor, forte="Actor")[0]
                    movie.actors.add(act)
            if item["info"].get("directors"):
                for director in item["info"].get("directors"):
                    act = Artist.objects.get_or_create(name=director, forte="Director")[0]
                    movie.directors.add(act)
            if item["info"].get("genres"):
                for genre in item["info"].get("genres"):
                    act = Genre.objects.get_or_create(name=genre)[0]
                    movie.genres.add(act)
            movie.save()
            print "Movie:%s added successfully" % movie.title
            print "-"
        print "Total movies added: %s" % len(self.content)
        return self.content
