from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import HelpRequest, Volunteer, Resource, Notification
from .serializers import HelpRequestSerializer, VolunteerSerializer, ResourceSerializer, NotificationSerializer

class HelpRequestViewSet(viewsets.ModelViewSet):
    queryset = HelpRequest.objects.all()
    serializer_class = HelpRequestSerializer

class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer


@api_view(['POST'])
def assign_volunteer(request, request_id):
    volunteer_id = request.data.get('volunteer_id')
    volunteer = Volunteer.objects.get(id=volunteer_id)
    help_req = HelpRequest.objects.get(id=request_id)
    help_req.status = 'Assigned'
    help_req.save()
    volunteer.is_available = False
    volunteer.save()
    Notification.objects.create(
        message=f"Volunteer {volunteer.user.username} assigned to request {help_req.id}",
        recipient=help_req.requester
    )
    return Response({'message': 'Volunteer assigned successfully!'})

