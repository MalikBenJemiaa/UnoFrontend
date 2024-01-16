from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    slogan = models.CharField(max_length=100)
    review_count = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=7, decimal_places=3)
    description = models.TextField()
    promotion = models.DecimalField(max_digits=3, decimal_places=0, default=0)
    category = models.ManyToManyField(Category)
    marque = models.CharField(max_length=100)
    stock = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
