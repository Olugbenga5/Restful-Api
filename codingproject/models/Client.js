const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
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
    dob: Date,
    guardianName: String,
    permissionToLeaveMessage: Boolean, 
    gender: String,
    maritalStatus: String,
    referrer: String
})

const Client = mongoose.model('Clients', clientSchema)

module.exports = Client