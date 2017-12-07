# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.db import connection
from django.core.urlresolvers import reverse

from rest_framework.response import Response
from rest_framework import viewsets

from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect, HttpResponse

from .models import InsuranceTemplate
from .forms import InsuranceForm
from .serializers import InsuranceSerializer
# Create your views here.

@login_required
def index(request):
    """ 
    Display login user insurance template on index page
    """
    insurance = InsuranceTemplate.objects.filter(user=request.user)
    return render(request,'insurance_flexible_database/insurance_index.html',{'insurance':insurance})

@login_required
def create_insurance(request):
    """
        Create insurance template with fields
    """
    if request.method == "POST":
       
        form = InsuranceForm(request.POST)
        if form.is_valid():
            form.save()
        
            return HttpResponseRedirect(reverse("insurance:index"))
    
        return render (request,'insurance_flexible_database/create_insurance_form.html',{'form':form})
    else:   
        return render (request,'insurance_flexible_database/create_insurance_form.html',{'form':InsuranceForm()})

@login_required
def update_insurance(request,insurance_id):
    """
        Update insurance template 
    """
    if insurance_id:
        insurance = InsuranceTemplate.objects.filter(id=insurance_id)
        if insurance:
            if request.method == "POST":
       
                form = InsuranceForm(request.POST,instance=insurance[0])
                if form.is_valid():
                    form.save()
        
                    return HttpResponseRedirect(reverse("insurance:index"))
                return render (request,'insurance_flexible_database/create_insurance_form.html',{'form':form})   
            else:   
                return render (request,'insurance_flexible_database/create_insurance_form.html',{'form':InsuranceForm(instance=insurance[0])})
        return HttpResponseRedirect(reverse("insurance:index"))
    return HttpResponseRedirect(reverse("insurance:index"))
    
def display_insurance_template_form(request,insurance_id):

    if insurance_id:
        insurance_template = InsuranceTemplate.objects.filter(id=insurance_id)
        if insurance_template:
            text_field = range(insurance_template[0].text_fields)
            radio = range(insurance_template[0].radio_button)
            choice = range(insurance_template[0].choice_field)
            checkbox = range(insurance_template[0].check_box)
        
        return render(request,"insurance_flexible_database/insurance_template_form.html",{'insurance_template':insurance_template[0],'text_field':text_field,
            'radio':radio,'choice':choice,'checkbox':checkbox})
    return render(request,"insurance_flexible_database/insurance_template_form.html",{'nsurance_template':"",'text_field':"",
            'radio':"",'choice':"",'checkbox':""})           


class InsuranceViewSet(viewsets.ViewSet):
    """ call api for get all insurance template and its related fields information"""
    queryset = InsuranceTemplate.objects.all()

    def list(self,request,pk=None):

        serializer = InsuranceSerializer(self.queryset, many=True)
        return Response(serializer.data)

     
class ParticulatInsuranceViewSet(viewsets.ViewSet):

    def get_queryset(self):
        return InsuranceTemplate.objects.filter(insurance_name = self.request.GET['name'])
       
    def list(self,request,pk=None):

        serializer = InsuranceSerializer(self.get_queryset(), many=True)
        return Response(serializer.data)   
