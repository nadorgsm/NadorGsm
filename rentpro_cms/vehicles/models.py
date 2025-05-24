from django.db import models

class Vehicle(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    vin = models.CharField(max_length=17, unique=True, help_text="Vehicle Identification Number")
    registration_number = models.CharField(max_length=20, unique=True)
    color = models.CharField(max_length=50, blank=True, null=True)
    vehicle_type = models.CharField(max_length=50, help_text="e.g., Sedan, SUV, Truck, Van")
    features = models.TextField(blank=True, null=True, help_text="List features like GPS, sunroof, etc.")
    daily_rental_rate = models.DecimalField(max_digits=10, decimal_places=2)
    
    STATUS_CHOICES = [
        ('Available', 'Available'),
        ('Rented', 'Rented'),
        ('Maintenance', 'Maintenance'),
        ('Unavailable', 'Unavailable')
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Available')
    image = models.ImageField(upload_to='vehicle_images/', blank=True, null=True)

    def __str__(self):
        return f"{self.year} {self.make} {self.model} ({self.vin})"
