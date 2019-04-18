var mongoose = require("mongoose");

var accidentSchema = new mongoose.Schema({
    date: String,
    time: String,
    flag: Boolean, 
    latitude: String,
    longitude: String,
    cars : String
});

module.exports = mongoose.model("accidents", accidentSchema);
