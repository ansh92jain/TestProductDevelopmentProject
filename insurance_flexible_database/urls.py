from django.conf.urls import include ,url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^create-insurance/$', views.create_insurance, name="create_insurance"),
    url(r'^update-insurance/(?P<insurance_id>[0-9]+)/$',views.update_insurance,name="update_insurance"),
    url(r'^insurance-template-form/(?P<insurance_id>[0-9]+)/$',views.display_insurance_template_form,name="display_insurance_template_form"),
]