from django.views.generic.base import TemplateView


class AppLanding(TemplateView):
    template_name = "base.html"

    def dispatch(self, *args, **kwargs):
        return super(AppLanding, self).dispatch(*args, **kwargs)
