from rest_framework import serializers
from .models import CruiseTrip

class CruiseTripSerializer(serializers.ModelSerializer):
    class Meta:
        model = CruiseTrip
        fields = ('id', 'destination', 'origin', 'departure_time', 'arrival_time', 'registration_date', 'available_seats', 'capacity')
