import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SeatMap from './SeatMap';

const SeatList = () => {
    const [seats, setSeats] = useState([]);
    const apiUrl = process.env.REACT_APP_DEBUG === 'true'
        ? process.env.REACT_APP_API_URL
        : process.env.REACT_APP_API_URL_LIVE;
   
        useEffect(() => {
            const fetchSeats = async () => {
                try {
                    const response = await axios.get(`${apiUrl}/api/seats`);
                    setSeats(response.data);
                } catch (error) {
                    console.error('Error fetching seats:', error);
                }
            };
    
            fetchSeats();
        }, [apiUrl]);

    return (
        <div>
            <h2>Seat List</h2>
            <SeatMap seats={seats} />
        </div>
    );
};

export default SeatList;