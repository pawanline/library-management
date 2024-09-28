const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes'); // Ensure the path is correct
const seatRoutes = require('./routes/seatRoutes');
const feeRoutes = require('./routes/feeRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/library')
    .then(() => {
        app.listen(5000, () => { // Ensure the port number matches
            console.log('Server is running on port 5000');
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });

// Routes
app.use('/api/students', studentRoutes);
app.use('/api/seats', seatRoutes);
app.use('/api/fees', feeRoutes);

// Add this route to handle POST requests for adding new students
app.post('/api/students', async (req, res) => {
    try {
        const { name, mobile, email, joiningDate, identityNo, preparingFor, type, seatNo, timeSlot, address } = req.body;
        console.log('Request body:', req.body); // Log the request body

        const newStudent = new Student({
            name,
            mobile,
            email,
            joiningDate,
            identityNo,
            preparingFor,
            type,
            seatNo,
            timeSlot,
            address
        });
        console.log('New student:', newStudent); // Log the new student object

        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        console.error('Error saving student:', error);
        res.status(400).json({ message: error.message });
    }
});