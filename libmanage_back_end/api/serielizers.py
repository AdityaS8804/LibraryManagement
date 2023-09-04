from rest_framework.serializers import ModelSerializer
from.models import MyUser

class MyUserSerielizer(ModelSerializer):
    class Meta:
        model=MyUser
        fields="__all__"