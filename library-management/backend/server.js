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
app.post('/api/students', (req, res) => {
    const newStudent = new Student({
      name: req.body.name,
      email: req.body.email,
    });
  
    newStudent.save()
      .then(student => res.status(201).json(student))
      .catch(err => res.status(400).json({ error: err.message }));
  });
  
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));