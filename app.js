var express = require("express");
var logger = require('morgan');
var path = require("path")
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var accidents = require("./models/accidents");
var alcohols = require("./models/alcohols");
var SerialPort = require('serialport');
// var SerialPort = serialport.SerialPort;
var app = express();
var server = require("http").createServer(app)
var io = require('socket.io')(server);

server.listen(8080, function () {
    console.log("check port 8080");
});

mongoose.connect("mongodb://vikram:vikram123@ds133275.mlab.com:33275/beproject", {
    useNewUrlParser: true
}, function () {
    console.log("connected to mlab");
})

const obj = {
    date: "18-04-2019",
    time: "13:46",
    latitude: "17.02145",
    longitude: "55.45112",
    registration: "4455"
}

const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('COM3');
const parser = new Readline();
port.pipe(parser);
parser.on('data', function (data) {
    if (data > 550) {
        var result = {
            date: "19-04-2019",
            time: "15:20",
            latitude: "19.163741",
            longitude: "72.866937",
            registration: 1421
        }
        console.log(result);
        io.sockets.emit('overlimit', result);
    }
});


app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.render("index");
})

app.post("/realtime", function (req, res) {
    var result = JSON.parse(req.body.result)
    console.log(result);
    io.sockets.emit('level', result);
    res.send(200);
})

app.post("/", function (req, res) {
    var result = JSON.parse(req.body.result)
    console.log(result);
    io.sockets.emit('drivers', result);
    res.sendStatus(200);
})

app.get("/accident", function (req, res) {
    res.render("accident");
})

app.post("/accident", function (req, res) {
    var result = req.body.result;
    console.log(result);
    res.sendStatus(200);
})

app.get("/accidentLog", function (req, res) {
    accidents.find({}, function (err, data) {
        console.log(data);
        res.render("accidentLog", {
            data: data
        });
    })
})

app.get("/accidentRegister", function (req, res) {
    res.render("accidentRegister")
});

app.post("/accidentRegister", function (req, res) {
    const obj = {
        date: req.body.date,
        time: req.body.time,
        latitude: req.body.lat,
        flag: true,
        longitude: req.body.lon,
        cars: req.body.cars
    }
    new accidents(obj).save(function (err, data) {
        console.log(data);
        res.redirect("accidentLog");
    })
});

app.post("/accidentMonitor", function (req, res) {
    var result = JSON.parse(req.body.result)
    // console.log(result);
    io.sockets.emit('accident', result);
    const obj = {
        date: result.date,
        time: result.time,
        latitude: result.latitude,
        flag: true,
        longitude: result.longitude,
        cars: result.cars
    }
    new accidents(obj).save(function (err, data) {
        console.log(data);
        res.sendStatus(200);
    })
})

app.get("/alcohol", function (req, res) {
    res.render("alcohol")
})

app.get("/alcoholLog", function (req, res) {
    alcohols.find({}, function (err, data) {
        console.log(data);
        res.render("alcoholLog", {
            data: data
        });
    })
})

app.get("/alcoholRegister", function (req, res) {
    res.render("alcoholRegister");
});

app.post("/alcoholRegister", function (req, res) {
    const obj = {
        date: req.body.date,
        time: req.body.time,
        latitude: req.body.lat,
        longitude: req.body.lon,
        registration: req.body.registration
    }
    new alcohols(obj).save(function (err, data) {
        console.log(data);
        res.redirect("alcoholLog");
    })
});

app.post("/alcoholMonitor", function (req, res) {
    var result = JSON.parse(req.body.result)
    console.log(result);
    io.sockets.emit('alcohol', result);
    const obj = {
        date: result.date,
        time: result.time,
        latitude: result.latitude,
        longitude: result.longitude,
        registration: result.registration
    }
    new alcohols(obj).save(function (err, data) {
        console.log(data);
        res.sendStatus(200);
    })
})

io.sockets.on('connection', function (socket) {
    console.log(" connected");

    socket.on("works", function (data) {
        console.log(data);
    })
})