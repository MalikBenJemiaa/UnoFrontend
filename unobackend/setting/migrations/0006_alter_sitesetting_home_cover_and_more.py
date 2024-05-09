# Generated by Django 5.0.1 on 2024-04-21 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0006_alter_product_description'),
        ('setting', '0005_link_sublink'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sitesetting',
            name='home_cover',
            field=models.ImageField(blank=True, default={'STATIC_URL': '/static/'}, null=True, upload_to='home_cover', verbose_name='Home cover'),
        ),
        migrations.AlterField(
            model_name='sitesetting',
            name='product_cover',
            field=models.ImageField(blank=True, default={'STATIC_URL': '/static/'}, null=True, upload_to='product_cover', verbose_name='Product cover'),
        ),
        migrations.AlterField(
            model_name='sublink',
            name='categories',
            field=models.ManyToManyField(to='product.category', verbose_name='Categories'),
        ),
    ]