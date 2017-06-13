from django.db import models

from app.base.models.Audit import Audit
from app.base.models.Slug import Slug


class Genre(Slug, Audit):
    name = models.CharField(max_length=100, blank=False, null=False)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name
