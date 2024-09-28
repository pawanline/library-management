import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FeeList from './components/FeeList';
import StudentList from './components/StudentList';
import SeatList from './components/SeatList';
import StudentForm from './components/StudentForm';
import axios from 'axios';

const App = () => {
    const apiUrl = process.env.REACT_APP_DEBUG === 'true'
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL_LIVE;

    const addTenSeats = async () => {
        const seatPromises = [];
        for (let i = 1; i <= 10; i++) {
            const seatData = {
                seat_number: i,
                is_occupied: false,
                occupantName: ""
            };
            seatPromises.push(axios.post(`${apiUrl}/api/seats`, seatData));
        }

        try {
            await Promise.all(seatPromises);
            alert('10 seats added successfully');
        } catch (error) {
            console.error('Error adding seats:', error);
            alert('Failed to add seats');
        }
    };

    return (
        <Router>
            <div>
                <h1>Library Management System</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/students">Student List</Link>
                        </li>
                        <li>
                            <Link to="/add-student">Add Student</Link>
                        </li>
                        <li>
                            <Link to="/seats">Seat Available</Link>
                        </li>
                    </ul>
                </nav>
                <button onClick={addTenSeats}>Add 10 Seats</button>
                <Routes>
                    <Route path="/students" element={<StudentList />} />
                    <Route path="/seats" element={<SeatList />} />
                    <Route path="/fees" element={<FeeList />} />
                    <Route path="/add-student" element={<StudentForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;