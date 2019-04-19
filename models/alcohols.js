var mongoose = require("mongoose");

var alcoholSchema = new mongoose.Schema({
    date: String,
    time: String,
    latitude: String,
    longitude: String,
    registration: String
});

module.exports = mongoose.model("alcohols", alcoholSchema);
