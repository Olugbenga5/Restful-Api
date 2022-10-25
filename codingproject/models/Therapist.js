const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema({
    id: Number,
    title: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    addressLine1: String,
    addressLine2: String,
    town: String,
    city: String,
    eirCode: String,
})

const Therapist = mongoose.model('Therapists', therapistSchema)

module.exports = Therapist