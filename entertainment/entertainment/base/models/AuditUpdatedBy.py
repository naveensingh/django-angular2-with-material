from django.contrib.auth.models import User
from django.db import models


class AuditUpdatedBy(models.Model):
    updated_by = models.ForeignKey(User, related_name="updated_by")

    class Meta:
        abstract = True
