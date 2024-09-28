import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeeList = () => {
    const [fees, setFees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/fees')
            .then(response => setFees(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Fee List</h2>
            <ul>
                {fees.map(fee => (
                    <li key={fee._id}>{fee.student_id.name} - ${fee.amount} - Due: {new Date(fee.due_date).toLocaleDateString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default FeeList;