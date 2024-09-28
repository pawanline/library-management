const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
const studentRoutes = require('./routes/studentRoutes');
const seatRoutes = require('./routes/seatRoutes');
const feeRoutes = require('./routes/feeRoutes');

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
      res.status(500).json({ error: 'Failed to save student' });
  }
});


  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));