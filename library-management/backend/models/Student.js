const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    joiningDate: {
        type: Date,
        required: true,
    },
    identityNo: {
        type: String,
        required: true,
    },
    preparingFor: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    seatNo: {
        type: String,
        required: true,
    },
    timeSlot: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Student', studentSchema);