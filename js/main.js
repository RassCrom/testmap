// let mymap = L.map("mapid");
// Подложки
const mapbox = "https://api.mapbox.com/styles/v1/rasscrom/ckmq71yrq0tut17qhr0l6b28x/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFzc2Nyb20iLCJhIjoiY2tsbmpiODBzMDJtczJ1bndkenV0bXNxMiJ9.h9ivmngOxtAV01VMs57vmA";
const osm = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

// let mymap = L.map('mapid', {
//     center: [39.73, -104.99],
//     zoom: 10,
//     layers: [mapbox, osm]
// });


// L.tileLayer(osm, {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     tileSize: 512,
//     zoomOffset: -1,
// }).addTo(mymap);


var grayscale = L.tileLayer(mapbox, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'}),
    streets   = L.tileLayer(osm, {id: 'MapID', tileSize: 512, zoomOffset: -1, attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'});

var map = L.map('mapid', {
    center: [51.169392, 71.449074],
    zoom: 11,
    maxZoom: 25,
    minZoom: 3,
    layers: [grayscale]
});

var baseMaps = {
    "Grayscale": grayscale,
    "Streets": streets
};

stComerciaisLayer= L.tileLayer.wms("http://localhost:8080/geoserver/Lakes/wms", {
        layers: '2002_lake',
        format: 'image/png',
        transparent: true,
        attribution: "Lakes:2002_lake"
      }).addTo(map);

L.control.layers(baseMaps).addTo(map);


// import {Map, View} from 'ol';
// import Tilelayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';

// import TileWMS from 'ol/sourceTileWMS';

// const map = new Map({
//     target: 'map',
//     layers: [
//         new Tilelayer({
//             source: new OSM()
//         }),
//         new Tilelayer ({
//             source: new TileWMS({
//                 url: 'http://localhost:8080/geoserver/Ashyq/wms',
//                 params: {'LAYERS': 'Ashyq:using ashyq', 'TILED':true},
//                 serverType: 'geoserver',
//             })
//         })
//     ]
// })






// var map = L.map('mapid');
// var wmsLayer = L.tileLayer.wms('http://ows.mundialis.de/services/service?', wmsOptions).addTo(map);

// var wmsLayer = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//     layers: 'TOPO-OSM-WMS'
// }).addTo(map);

// var wmsLayer = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//     layers: 'SRTM30-Colored-Hillshade'
// }).addTo(map);

// var map = L.map('mapid', {
//     center: [51.169392, 71.449074],
//     zoom: 11,
//     maxZoom: 20,
//     minZoom: 5,
//     layers: [TOPO-OSM-WMS]
// });

// var topographyAndPlaces = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//     layers: 'TOPO-WMS,OSM-Overlay-WMS'
// }).addTo(map);
// var basemaps = {
//     Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//         layers: 'TOPO-WMS'
//     }),

//     Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//         layers: 'OSM-Overlay-WMS'
//     }),

//     'Topography, then places': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//         layers: 'TOPO-WMS,OSM-Overlay-WMS'
//     }),

//     'Places, then topography': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
//         layers: 'OSM-Overlay-WMS,TOPO-WMS'
//     })
// };

// L.control.layers(basemaps).addTo(map);

// basemaps.Topography.addTo(map);



window.onload = init;

function init(){
    const mapid2 = new ol.Map({
        view: new ol.View({
            center: [7951852.933532785, 6647472.417691752],
            zoom: 15,
            maxZoom: 20,
            minZoom: 4,
            rotation: 0
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: 'js-map'
    })

    map.on('click', function(e){
        console.log(e.coordinate)
    })

    var venice = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://localhost:8080/geoserver/Ashyq/wms',
            params: {'LAYERS':'Ashyq:using ashyq'},
            serverType: 'geoserver'
        })
    });

    mapid2.addLayer(venice)

}