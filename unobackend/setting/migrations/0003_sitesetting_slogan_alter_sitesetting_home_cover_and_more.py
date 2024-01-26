# Generated by Django 5.0.1 on 2024-01-26 11:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('setting', '0002_alter_sitesetting_home_cover_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='sitesetting',
            name='slogan',
            field=models.CharField(default=1, max_length=100, verbose_name='Slogan'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='sitesetting',
            name='home_cover',
            field=models.ImageField(blank=True, default={'STATIC_URL': 'https://ghassen.s3.amazonaws.com/static/'}, null=True, upload_to='home_cover', verbose_name='Home cover'),
        ),
        migrations.AlterField(
            model_name='sitesetting',
            name='product_cover',
            field=models.ImageField(blank=True, default={'STATIC_URL': 'https://ghassen.s3.amazonaws.com/static/'}, null=True, upload_to='product_cover', verbose_name='Product cover'),
        ),
    ]
