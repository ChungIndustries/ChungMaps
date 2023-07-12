from rest_framework import serializers
from MapViewer.models import MinecraftBlock, MapExplorer


class MinecraftBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = MinecraftBlock
        fields = '__all__'


class MapExplorerSerializer(serializers.ModelSerializer):
    scanned_blocks = serializers.PrimaryKeyRelatedField(many=True, queryset=MinecraftBlock.objects.all())

    class Meta:
        model = MapExplorer
        fields = ['id', 'name', 'x', 'y', 'z', 'dimension', 'trusted', 'scanned_blocks']

