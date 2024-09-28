import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentList.css'; // Import the CSS file for styling

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/students')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    return (
        <div className="student-list">
            <h2>Student List</h2>
            <div className="card-container">
                {students.map(student => (
                    <div key={student._id} className="card">
                        <div className="card-content">
                            <strong>Name:</strong> {student.name} <br />
                            <strong>Mobile:</strong> {student.mobile} <br />
                            <strong>Email:</strong> {student.email} <br />
                            <strong>Joining Date:</strong> {new Date(student.joiningDate).toLocaleDateString()} <br />
                            <strong>Identity No:</strong> {student.identityNo} <br />
                            <strong>Preparing For:</strong> {student.preparingFor} <br />
                            <strong>Type:</strong> {student.type} <br />
                            <strong>Seat No:</strong> {student.seatNo} <br />
                            <strong>Time Slot:</strong> {student.timeSlot} <br />
                            <strong>Address:</strong> {student.address} <br />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentList;