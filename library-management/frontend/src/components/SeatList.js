import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SeatMap from './SeatMap';

const SeatList = () => {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/seats')
            .then(response => setSeats(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Seat List</h2>
            <SeatMap seats={seats} />
        </div>
    );
};

export default SeatList;