import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeeList = () => {
    const [fees, setFees] = useState([]);
  
    const apiUrl = process.env.REACT_APP_DEBUG === 'true'
        ? process.env.REACT_APP_API_URL
        : process.env.REACT_APP_API_URL_LIVE;

    useEffect(() => {
        axios.get(`${apiUrl}/api/fees`)
            .then(response => setFees(response.data))
            .catch(error => console.error(error));
    }, [apiUrl]); // Include apiUrl in the dependency array

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