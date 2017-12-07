from rest_framework import serializers

from django.contrib.auth import authenticate
import django.contrib.auth.password_validation as validators
from django.db import transaction

from rest_framework import exceptions
from rest_framework import status

from django.contrib.auth.models import User

from .models import InsuranceTemplate


class InsuranceSerializer(serializers.ModelSerializer):
    """ 
    """
    class Meta:
        model = InsuranceTemplate
        fields = '__all__'


       
