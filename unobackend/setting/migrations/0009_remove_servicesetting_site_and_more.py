# Generated by Django 5.0.1 on 2024-04-25 20:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('setting', '0008_remove_sitesetting_about_me_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='servicesetting',
            name='site',
        ),
        migrations.RemoveField(
            model_name='testimonialsetting',
            name='site',
        ),
        migrations.DeleteModel(
            name='MagazineSetting',
        ),
        migrations.DeleteModel(
            name='ServiceSetting',
        ),
        migrations.DeleteModel(
            name='TestimonialSetting',
        ),
    ]