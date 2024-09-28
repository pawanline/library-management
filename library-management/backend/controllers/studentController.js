const Student = require('../models/Student'); // Ensure the path is correct


// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.createStudent = async (req, res) => {
    console.log('Request body:', req.body); // Log the request body

    debugger; // Add this line to set a breakpoint

    const { name, mobile, email, joiningDate, identityNo, preparingFor, type, seatNo, timeSlot, address } = req.body;

    // Validate required fields
    if (!name || !mobile || !email || !joiningDate || !identityNo || !preparingFor || !type || !seatNo || !timeSlot || !address) {
        return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    const student = new Student({
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

    console.log('New student:', student); // Log the new student object

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (err) {
        console.error('Error saving student:', err);
        res.status(400).json({ message: err.message });
    }
};

exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });

        student.name = req.body.name || student.name;
        student.email = req.body.email || student.email;

        const updatedStudent = await student.save();
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });

        await student.remove();
        res.json({ message: 'Student deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
