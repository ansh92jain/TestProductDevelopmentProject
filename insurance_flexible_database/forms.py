
from django import forms

from .models import InsuranceTemplate

class InsuranceForm(forms.ModelForm):

    class Meta:
        model = InsuranceTemplate
        fields = "__all__"