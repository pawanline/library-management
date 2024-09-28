const Seat = require('../models/Seat');

exports.getAllSeats = async (req, res) => {
    try {
        const seats = await Seat.find();
        res.json(seats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createSeat = async (req, res) => {
    const seat = new Seat({
        seat_number: req.body.seat_number,
        is_occupied: req.body.is_occupied,
    });

    try {
        const newSeat = await seat.save();
        res.status(201).json(newSeat);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getSeatById = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        if (!seat) return res.status(404).json({ message: 'Seat not found' });
        res.json(seat);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateSeat = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        if (!seat) return res.status(404).json({ message: 'Seat not found' });

        seat.seat_number = req.body.seat_number || seat.seat_number;
        seat.is_occupied = req.body.is_occupied || seat.is_occupied;

        const updatedSeat = await seat.save();
        res.json(updatedSeat);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteSeat = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        if (!seat) return res.status(404).json({ message: 'Seat not found' });

        await seat.remove();
        res.json({ message: 'Seat deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};