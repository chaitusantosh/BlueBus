const mongoose = require('mongoose')
const busSchema = new mongoose.Schema({
    from: { type: String },
    to: { type: String },
    date: { type: String },
    type: { type: String },
    seats: { type: Number },
    departure: { type: String },
    arrival: { type: String },
    fare: { type: Number },
    booked: { type: Number },
    available: { type: Number },
    bookedseats: []
})
module.exports = mongoose.model('Bus', busSchema)