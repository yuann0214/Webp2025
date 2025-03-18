
from django.urls import path
from . import views


#urlpatterns = [
#    path('add', views.add_post, name='add_post'),
#    path('list', views.list_post, name='list_post'),
#]

urlpatterns = [
    path('addcourse', views.addcourse_post, name='add_post'),
    path('courselist', views.courselist_post, name='list_post'),
]
