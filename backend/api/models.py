from django.db import models
from django.contrib.auth.models import User

class HelpRequest(models.Model):
    requester = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    location = models.CharField(max_length=200)
    status = models.CharField(max_length=30, default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)

class Volunteer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    skills = models.TextField()
    is_available = models.BooleanField(default=True)

class Resource(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    allocated_to = models.ForeignKey(HelpRequest, on_delete=models.SET_NULL, null=True, blank=True)

class Notification(models.Model):
    message = models.CharField(max_length=255)
    recipient = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

