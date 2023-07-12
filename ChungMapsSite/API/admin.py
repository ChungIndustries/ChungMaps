from django.contrib import admin
from .models import MapExplorerKey
from rest_framework_api_key.admin import APIKeyModelAdmin


@admin.register(MapExplorerKey)
class MapExplorerKeyAdmin(APIKeyModelAdmin):
    pass
