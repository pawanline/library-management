const Fee = require('../models/Fee');

exports.getAllFees = async (req, res) => {
    try {
        const fees = await Fee.find().populate('student_id');
        res.json(fees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createFee = async (req, res) => {
    const fee = new Fee({
        student_id: req.body.student_id,
        amount: req.body.amount,
        due_date: req.body.due_date,
    });

    try {
        const newFee = await fee.save();
        res.status(201).json(newFee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getFeeById = async (req, res) => {
    try {
        const fee = await Fee.findById(req.params.id).populate('student_id');
        if (!fee) return res.status(404).json({ message: 'Fee not found' });
        res.json(fee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateFee = async (req, res) => {
    try {
        const fee = await Fee.findById(req.params.id);
        if (!fee) return res.status(404).json({ message: 'Fee not found' });

        fee.student_id = req.body.student_id || fee.student_id;
        fee.amount = req.body.amount || fee.amount;
        fee.due_date = req.body.due_date || fee.due_date;

        const updatedFee = await fee.save();
        res.json(updatedFee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteFee = async (req, res) => {
    try {
        const fee = await Fee.findById(req.params.id);
        if (!fee) return res.status(404).json({ message: 'Fee not found' });

        await fee.remove();
        res.json({ message: 'Fee deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};