const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    seat_number: {
        type: String,
        required: true,
    },
    is_occupied: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Seat', seatSchema);