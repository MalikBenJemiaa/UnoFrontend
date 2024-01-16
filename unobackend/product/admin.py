from django.contrib import admin

from product.models import Product, Category


# Register your models here.
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'marque', 'stock')


admin.site.register(Category)
