from django.db import models
from django.contrib.auth.models import User


class MapExplorer(models.Model):
    name = models.CharField(max_length=100)
    x = models.IntegerField()
    y = models.IntegerField()
    z = models.IntegerField()
    dimension = models.CharField(max_length=100)
    trusted = models.BooleanField(default=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['x', 'y', 'z', 'dimension'], name='unique_explorer'),
        ]

    def __str__(self):
        return f"{self.name}"


class MinecraftBlock(models.Model):
    name = models.CharField(max_length=100)
    x = models.IntegerField()
    y = models.IntegerField()
    z = models.IntegerField()
    dimension = models.CharField(max_length=100)
    metadata = models.JSONField(null=True, blank=True)
    lastModified = models.DateTimeField(auto_now=True, blank=True)
    lastModifiedBy = models.ForeignKey(MapExplorer, related_name='scanned_blocks', on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['x', 'y', 'z', 'dimension'], name='unique_block'),
        ]

    def __str__(self):
        return f"{self.name} at ({self.x}, {self.y}, {self.z}) in {self.dimension}"
