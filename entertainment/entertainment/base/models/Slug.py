import uuid

from django.db import models


class Slug(models.Model):
    slug = models.CharField(max_length=36, default=uuid.uuid4, editable=False, unique=True)

    class Meta:
        abstract = True
