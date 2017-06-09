from django.db import models

from entertainment.artists import FORTE
from entertainment.base.models.Audit import Audit
from entertainment.base.models.Slug import Slug


class Artist(Slug, Audit):
    name = models.CharField(max_length=100, blank=False, null=False)
    forte = models.CharField(choices=FORTE, max_length=100, blank=False, null=False)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name
