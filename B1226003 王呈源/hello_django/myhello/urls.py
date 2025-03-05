
from django.urls import path
from . import views


urlpatterns = [
    path('', views.HelloApiview.as_view(), name='index'),
]