# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class InsuranceTemplate(models.Model):
    '''by this model we store insurance form fields details to genarate dynamic form '''
    insurance_name = models.CharField( max_length=256, verbose_name='Insurance Form Name',unique=True)
    
    text_fields = models.IntegerField(default=0,verbose_name='Number Of Text Field',null=True,blank=True) 
    label = models.CharField( max_length=256, verbose_name='Label',null=True, blank=True)
    
    radio_button = models.IntegerField( default=0, verbose_name='Number Of Radio Buttons Field',null=True, blank=True)
    radio_button_label = models.CharField( max_length=256, verbose_name='Radio Bouton Level',null=True, blank=True)
    
    check_box = models.IntegerField( default=0, verbose_name='Number Of Check Box Field',null=True, blank=True)
    check_box_label = models.CharField( max_length=256, verbose_name='Check Box Label',null=True, blank=True)
    
    choice_field = models.IntegerField( default=0, verbose_name='Number Of Choice Field',null=True, blank=True)
    choice_label = models.CharField( max_length=256, verbose_name='Choice Field Label',null=True, blank=True)
    
    date_field = models.IntegerField( default=0, verbose_name='Number Of Date Field',null=True, blank=True)
    date_field_label = models.CharField( max_length=256, verbose_name='Date Field Label',null=True, blank=True)
    
    image_field = models.IntegerField( default=0, verbose_name='Number Of Image Field',null=True, blank=True)
    image_field_label = models.CharField( max_length=256, verbose_name='Image Field Label',null=True, blank=True)
    
    user = models.ForeignKey(User, verbose_name='Created By', null=True, blank=True)
    

    def __str__(self):
        return '%s >> %s' %(self.insurance_name, self.text_fields)