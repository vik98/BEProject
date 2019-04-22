var socket = io();
socket.emit("works", "hopeThisWorksMan")

socket.on("success", function (data) {
    console.log(data)
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



var prev = 0;

socket.on("gps_data", function (data) {
    console.log(data);
    document.getElementById("speed").textContent=data.speed;
    // $("#speed").text = data.speed;
    document.getElementById("level").textContent=data.level;
    marker = L.marker([data.latitude, data.longitude]).addTo(mymap);
    if (data.speed > 45) {
        document.getElementById("button3").click();
    }
    drop = prev - data.speed;
    prev = data.speed;
    if (drop > 10 ) {
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
    }

    if (data.level > 600) {
        document.getElementById("button2").click();
        var mymap2 = L.map('mapid2').setView([data.latitude, data.longitude], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap2);

        var marker = L.marker([data.latitude, data.longitude]).addTo(mymap2);
        var polyline = L.polyline([
            [data.latitude, data.longitude],
            [19.04507, 72.822232]
        ], {
            color: 'red',
            weight: 10,
            opacity: .7,
            dashArray: '20,15',
            lineJoin: 'round'
        }).addTo(mymap2);

        $("#lat").text(data.latitude);
        $("#lon").text(data.longitude);
        const l = "http://www.google.com/maps/place/" + data.latitude + "," + data.longitude;
        var a = document.getElementById('link');
        a.href = l
    }
})

socket.on("alcohol", function (data) {
    document.getElementById("button").click();
    var mymap1 = L.map('mapid2').setView([data.latitude, data.longitude], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(mymap2);

    var marker = L.marker([data.latitude, data.longitude]).addTo(mymap2);
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

socket.on("accident", function (data) {
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

// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);