# Generated by Django 5.0.1 on 2024-01-20 14:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0003_alter_order_email_alter_order_notes_and_more'),
        ('product', '0004_brand_product_brand'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='OrderItem',
            new_name='Item',
        ),
    ]
