# Generated by Django 5.0.1 on 2024-01-20 18:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_brand_product_brand'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='brand',
            options={'verbose_name': 'Brand', 'verbose_name_plural': 'Brands'},
        ),
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Category', 'verbose_name_plural': 'Categories'},
        ),
        migrations.AlterModelOptions(
            name='product',
            options={'verbose_name': 'Product', 'verbose_name_plural': 'Products'},
        ),
        migrations.AlterField(
            model_name='brand',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='product',
            name='brand',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='product.brand', verbose_name='Brand'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ManyToManyField(to='product.category', verbose_name='Category'),
        ),
        migrations.AlterField(
            model_name='product',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Creation Date'),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(upload_to='products', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=3, max_digits=7, verbose_name='Price'),
        ),
        migrations.AlterField(
            model_name='product',
            name='promotion',
            field=models.IntegerField(default=0, verbose_name='Promotion'),
        ),
        migrations.AlterField(
            model_name='product',
            name='reviews',
            field=models.IntegerField(default=0, verbose_name='Reviews'),
        ),
        migrations.AlterField(
            model_name='product',
            name='slogan',
            field=models.CharField(max_length=100, verbose_name='Slogan'),
        ),
        migrations.AlterField(
            model_name='product',
            name='stock',
            field=models.IntegerField(default=0, verbose_name='Stock'),
        ),
        migrations.AlterField(
            model_name='product',
            name='updated_at',
            field=models.DateTimeField(auto_now=True, verbose_name='Update Date'),
        ),
    ]
