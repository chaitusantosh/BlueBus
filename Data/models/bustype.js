const mongoose = require('mongoose');
const bustypeSchema = new mongoose.Schema({
    type: { type: String },
    seats: { type: Number },
    departure: { type: String },
    arrival: { type: String },
    fare: { type: Number }
})
module.exports = mongoose.model('BusType', bustypeSchema);