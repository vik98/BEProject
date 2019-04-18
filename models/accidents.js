var mongoose = require("mongoose");

var accidentSchema = new mongoose.Schema({
    date: String,
    time: String,
    flag: Boolean, 
    latitude: String,
    longitude: String,
    cars :[{
        type:String
    }]
});

module.exports = mongoose.model("accidents", accidentSchema);
