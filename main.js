var map = L.map('map');
var layer = L.markerClusterGroup();

function getCurrentPosition() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(createCurrentPostionMap, createDefaultMap);
    } else {
        createDefaultMap();
    }
}

function createDefaultMap() {
    createMap(52.308601, 4.76389);
}

function createCurrentPostionMap(position) {
    console.log(position);
    createMap(position.coords.latitude, position.coords.longitude);
}

function createMap(latitude, longitude) {
    map.setView([latitude, longitude], 5);    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        minZoom: 6,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function clearLayer() {
    layer.clearLayers();
}

function addRoute() {
    var route = L.polygon([
        [52.308601, 4.76389],
        [52.308601, 4.76389]
    ]);
    
    route.addLayer(route);
    map.addLayer(markers);
}

getCurrentPosition();
