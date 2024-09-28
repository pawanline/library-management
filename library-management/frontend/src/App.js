import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import FeeList from './components/FeeList';
import StudentList from './components/StudentList';
import SeatList from './components/SeatList';
import StudentForm from './components/StudentForm';


const App = () => {
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