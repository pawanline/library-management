const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    seat_number: {
        type: String,
        required: true,
        unique: true, // Ensure seat_number is unique
    },
    is_occupied: {
        type: Boolean,
        default: false,
    },
    occupant_name: {
        type: String,
        default: '', // Add occupant_name field
    },
});

module.exports = mongoose.model('Seat', seatSchema);