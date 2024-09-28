const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    due_date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Fee', feeSchema);