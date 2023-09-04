from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
# Create your views here.
from .serielizers import MyUserSerielizer
from .models import MyUser
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainSerializer
from rest_framework_simplejwt.tokens import RefreshToken
class customSerializer(TokenObtainSerializer):
    username_field = User.EMAIL_FIELD
class MyTokenObtainPairSerializer(customSerializer):
    
    @classmethod
    def get_token(cls, user):
        
        #token = super().get_token(user)
        #a=MyUser.objects.get(user__username=user.username)
        # Add custom claims
        #a=MyUser.objects.get()
        #token['email'] = user.username
        # ...

        #return token
        return RefreshToken.for_user(user)
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)

        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer



@api_view(['GET'])
def getRoutes(request):
    return Response({
        'Routes':['api/']
    })



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUsers(request):
    user=request.user
    users=user.myuser_set.all()
    serielizer=MyUserSerielizer(users)
    
    return Response(serielizer.data)