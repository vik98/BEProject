var express = require("express");
var logger = require('morgan');
var path = require("path")
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var accidents = require("./models/accidents");
var app = express();
var server = require("http").createServer(app)
var io = require('socket.io')(server);

server.listen(8080, function () {
    console.log("check port 8080");
});

mongoose.connect("mongodb://vikram:vikram123@ds133275.mlab.com:33275/beproject", {useNewUrlParser:true}, function(){
    console.log("connected to mlab");
})

const obj = {
    date: "18-04-2019",
    time: "13:46",
    flag: true,
    latitude: "17.02145",
    longitude: "55.45112",
       cars: ["MH02EF45540", "MH25SD4455"] 
}

// new accidents(obj).save(function(err, data){
//     console.log(data);
// })

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

app.post("/realtime", function(req, res){
    var result = JSON.parse(req.body.result)
    console.log(result);
    io.sockets.emit('level', result);
    res.send(200);
})

app.post("/", function(req, res){
    var result  = JSON.parse(req.body.result)
    console.log(result);
    io.sockets.emit('drivers', result);
    res.sendStatus(200);
})

app.get("/accident", function(req, res){
    res.render("accident");
})

app.post("/accident", function(req, res){
    var result = req.body.result;
    console.log(result);
    res.sendStatus(200);
})

app.get("/accidentLog", function(req, res){
    accidents.find({}, function(err, data){
        console.log(data);
        res.render("accidentLog", {data:data});
    })
})

io.sockets.on('connection', function (socket) {
    console.log(" connected");

    socket.on("works", function (data) {
        console.log(data);
    })
})