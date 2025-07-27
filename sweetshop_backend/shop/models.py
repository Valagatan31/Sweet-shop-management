from django.db import models

class Sweet(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='sweet_images/')  # store image path
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=100)
    stock = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.name
