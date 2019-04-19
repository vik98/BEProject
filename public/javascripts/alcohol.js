var socket = io();
socket.emit("works", "hopeThisWorksMan")

socket.on("success", function (data) {
    console.log(data)
})

socket.on("drivers", function (data) {
    console.log(data);
    $("#drivers").text(Math.floor((Math.random() * 100) + 1));
})


socket.on("overlimit", function (data) {
    document.getElementById("button").click();
    var mymap1 = L.map('mapid1').setView([data.latitude, data.longitude], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap1);

    var marker = L.marker([data.latitude, data.longitude]).addTo(mymap1);
    var polyline = L.polyline([
        [data.latitude, data.longitude],
        [19.04507, 72.822232]
    ], {
        color: 'red',
        weight: 10,
        opacity: .7,
        dashArray: '20,15',
        lineJoin: 'round'
    }).addTo(mymap1);

    $("#lat").text(data.latitude);
    $("#lon").text(data.longitude);
    const l = "http://www.google.com/maps/place/" + data.latitude + "," + data.longitude;
    var a = document.getElementById('link');
    a.href = l
});

var mymap = L.map('mapid').setView([19.03648, 72.81725], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

var marker = L.marker([19.03648, 72.81725]).addTo(mymap);



var circle = L.circle([19.02336, 72.837186], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);



var circle = L.circle([19.025703, 72.855844], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);



var circle = L.circle([19.083069, 72.834404], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var circle = L.circle([19.026027, 72.885721], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var circle = L.circle([19.040632, 72.932427], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var circle = L.circle([19.050043, 72.940155], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);



// var polyline = L.polyline([
//     [19.026027, 72.885721],
//     [19.050043, 72.940155],
//     [19.083069, 72.834404],
//     [19.025703, 72.855844]
//     ],
//     {
//         color: 'red',
//         weight: 10,
//         opacity: .7,
//         dashArray: '20,15',
//         lineJoin: 'round'
//     }
//     ).addTo(mymap);

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