from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HelpRequestViewSet, VolunteerViewSet, ResourceViewSet, NotificationViewSet, assign_volunteer

router = DefaultRouter()
router.register('help', HelpRequestViewSet)
router.register('volunteers', VolunteerViewSet)
router.register('resources', ResourceViewSet)
router.register('notifications', NotificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('assign/<int:request_id>/', assign_volunteer),
]
