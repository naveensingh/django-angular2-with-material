from entertainment.entertainment.base.models.AuditCreatedBy import AuditCreatedBy
from entertainment.entertainment.base.models.AuditTimeStamp import AuditTimeStamp
from entertainment.entertainment.base.models.AuditUpdatedBy import AuditUpdatedBy


class Audit(AuditTimeStamp, AuditCreatedBy, AuditUpdatedBy):
    class Meta:
        abstract = True
