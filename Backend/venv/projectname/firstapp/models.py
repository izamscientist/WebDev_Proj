from django.db import models

class CruiseTrip(models.Model):
    destination = models.CharField(max_length=100)
    origin = models.CharField(max_length=100)
    departure_time = models.DateTimeField()
    arrival_time = models.DateTimeField()
    registration_date = models.DateField(auto_now_add=True)
    available_seats = models.IntegerField(default=5)
    capacity = models.IntegerField(default=300)  # Default capacity set to 300 seats

    def __str__(self):
        return self.destination
