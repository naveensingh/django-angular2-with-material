from entertainment.base.models.AuditTimeStamp import AuditTimeStamp


class Audit(AuditTimeStamp):
    class Meta:
        abstract = True
