import React, { useState } from 'react';
import axios from 'axios';
import './StudentForm.css'; // Import the CSS file
import SeatMapSelector from './SeatMapSelector'; // Import the SeatMapSelector component

const StudentForm = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [joiningDate, setJoiningDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date
    const [identityNo, setIdentityNo] = useState('');
    const [preparingFor, setPreparingFor] = useState('');
    const [type, setType] = useState('');
    const [seatNo, setSeatNo] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newStudent = {
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
        };

        console.log('Submitting student:', newStudent); // Log the request payload

        axios.post('http://localhost:5000/api/students', newStudent)
            .then(response => {
                console.log('Student added:', response.data);
                setName('');
                setMobile('');
                setEmail('');
                setJoiningDate(new Date().toISOString().split('T')[0]);
                setIdentityNo('');
                setPreparingFor('');
                setType('');
                setSeatNo('');
                setTimeSlot('');
                setAddress('');
            })
            .catch(error => {
                console.error('There was an error adding the student!', error);
            });
    };

    return (
        <div className="form-container">
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mobile:</label>
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Joining Date:</label>
                    <input
                        type="date"
                        value={joiningDate}
                        onChange={(e) => setJoiningDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Identity No:</label>
                    <input
                        type="text"
                        value={identityNo}
                        onChange={(e) => setIdentityNo(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Preparing For:</label>
                    <input
                        type="text"
                        value={preparingFor}
                        onChange={(e) => setPreparingFor(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Type:</label>
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                </div>
                <SeatMapSelector selectedSeat={seatNo} setSelectedSeat={setSeatNo} />
                <div className="form-group">
                    <label>Selected Seat No:</label>
                    <input
                        type="text"
                        value={seatNo}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label>Time Slot:</label>
                    <input
                        type="text"
                        value={timeSlot}
                        onChange={(e) => setTimeSlot(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Add Student</button>
                </div>
            </form>
        </div>
    );
};

export default StudentForm;