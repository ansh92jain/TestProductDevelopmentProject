"""TestProductDevelopmentProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url,include
from django.contrib import admin

from django.conf import settings
from rest_framework import routers
from django.conf.urls.static import static

from insurance_flexible_database import views as api_views

router = routers.DefaultRouter()
router.register(r'all-insurance', api_views.InsuranceViewSet,  base_name="InsuranceViewSet")
router.register(r'insurance-template', api_views.ParticulatInsuranceViewSet,  base_name="InsuranceViewSet")
urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^accounts/', include('allauth.urls')),
    url(r'^api/display/', include(router.urls)),
    url(r'^insurance/$', api_views.index, name="index"),
    url(r'^', include('insurance_flexible_database.urls', namespace='insurance', app_name='insurance_flexible_database')),
]
