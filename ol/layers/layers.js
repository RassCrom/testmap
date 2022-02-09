var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);cluster__1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource__1
});
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:cluster__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Точки сбора вторсырья'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);cluster__2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource__2
});
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:cluster__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Пункты наблюдения загрязнения воздуха'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);cluster__3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource__3
});
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:cluster__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> ЭКО организации'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr__1,lyr__2,lyr__3];
lyr__1.set('fieldAliases', {'Организация': 'Организация', 'Категория': 'Категория', 'latitude': 'latitude', 'lng': 'lng', });
lyr__2.set('fieldAliases', {'Организация': 'Организация', 'Категория': 'Категория', 'lat': 'lat', 'lon': 'lon', });
lyr__3.set('fieldAliases', {'Организация': 'Организация', 'Категория': 'Категория', 'lat': 'lat', 'lon': 'lon', 'Информация': 'Информация', });
lyr__1.set('fieldImages', {'Организация': 'TextEdit', 'Категория': 'TextEdit', 'latitude': 'TextEdit', 'lng': 'TextEdit', });
lyr__2.set('fieldImages', {'Организация': 'TextEdit', 'Категория': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', });
lyr__3.set('fieldImages', {'Организация': 'TextEdit', 'Категория': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'Информация': 'TextEdit', });
lyr__1.set('fieldLabels', {'Организация': 'inline label', 'Категория': 'header label', 'latitude': 'no label', 'lng': 'no label', });
lyr__2.set('fieldLabels', {'Организация': 'inline label', 'Категория': 'header label', 'lat': 'no label', 'lon': 'no label', });
lyr__3.set('fieldLabels', {'Организация': 'inline label', 'Категория': 'header label', 'lat': 'no label', 'lon': 'no label', 'Информация': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});