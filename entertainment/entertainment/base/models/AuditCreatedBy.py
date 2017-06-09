from django.contrib.auth.models import User
from django.db import models


class AuditCreatedBy(models.Model):
    created_by = models.ForeignKey(User, related_name="created_by")

    class Meta:
        abstract = True
