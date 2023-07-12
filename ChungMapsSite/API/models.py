from django.db import models
from rest_framework_api_key.models import AbstractAPIKey


class MapExplorerKey(AbstractAPIKey):
    map_explorer = models.ForeignKey('MapViewer.MapExplorer', on_delete=models.CASCADE, related_name='api_keys')
