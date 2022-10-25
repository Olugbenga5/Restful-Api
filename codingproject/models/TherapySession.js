const mongoose = require("mongoose");

const therapySessionSchema = new mongoose.Schema({
    id: Number,
    date: Date,
    clients: [Number],
    therapist: Number,
    fee: Number,
    number: Number,
    attendance: String,
    type: String,
    notes: String
})

const TherapySession = mongoose.model('TherapySessions', therapySessionSchema)

module.exports = TherapySession