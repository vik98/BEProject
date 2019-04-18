var socket = io();
socket.emit("works", "hopeThisWorksMan")

socket.on("success", function (data) {
  console.log(data)
})

socket.on("level", function (data) {
  console.log(data);
  if (data.level > 400) {
    alert("Alcohol level exceeded")
    $("#alcohol").append("<p>Alcohol level over limit detected. Location is Longitude:" + data.long + " Latitude: " + data.lat + "</p>")
    socket.disconnect();
  } else {
    $("#level").text(data.level)
  }
})

socket.on("drivers", function (data) {
  console.log(data);
  $("#drivers").text(data.value);
})

var mymap = L.map('mapid').setView([19.03648, 72.81725], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);

var marker = L.marker([19.03648, 72.81725]).addTo(mymap);
var marker = L.marker([19.043179, 72.824506]).addTo(mymap);
var marker = L.marker([19.044559, 72.819033]).addTo(mymap);
var marker = L.marker([19.043666, 72.818969]).addTo(mymap);
var marker = L.marker([19.046911, 72.819935]).addTo(mymap);
var marker = L.marker([19.045208, 72.820428]).addTo(mymap);
var marker = L.marker([19.042071, 72.822221]).addTo(mymap);
var marker = L.marker([19.039853, 72.818647]).addTo(mymap);

var circle = L.circle([19.04301, 72.82394], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 200
}).addTo(mymap);

var circle = L.circle([19.050402, 72.825112], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 200
}).addTo(mymap);

var circle = L.circle([19.041072, 72.845286], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 200
}).addTo(mymap);

var circle = L.circle([19.067932, 72.829677], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 200
}).addTo(mymap);

var circle = L.circle([19.02336, 72.837186], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 200
}).addTo(mymap);

var circle = L.circle([19.012429, 72.815954], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 200
}).addTo(mymap);

var circle = L.circle([19.049689, 72.834164], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 200
}).addTo(mymap);

function onMapClick(e) {
  alert("You clicked the map at " + e.latlng);
}

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("You clicked the map at " + e.latlng.toString())
    .openOn(mymap);
}

mymap.on('click', onMapClick);