from django.db import models
from django.contrib.auth.models import User

from django.contrib.auth.models import AbstractUser


class MUser(AbstractUser):
    USERNAME_FIELD = 'email'
    email = models.EmailField(verbose_name='email address', max_length=255, unique=True)
    REQUIRED_FIELDS = ['username']

class MyUser(models.Model):
    email=models.EmailField(null=True)
    #user=models.OneToOneField(User, on_delete=models.CASCADE)
    address=models.TextField()
    college=models.CharField(max_length=50)
    phoneNumber=models.IntegerField()