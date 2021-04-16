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
    maxZoom: 20,
    minZoom: 5,
    layers: [grayscale]
});

var baseMaps = {
    "Grayscale": grayscale,
    "Streets": streets
};

L.control.layers(baseMaps).addTo(map);