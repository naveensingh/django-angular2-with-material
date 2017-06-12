from django.conf import settings
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin

from app.base.views.AppLanding import AppLanding

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', AppLanding.as_view(), name="app"),
    url(r'^api/', include('app.services.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

