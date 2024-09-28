import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SeatMap.css'; // Import the CSS file for styling

const SeatMapSelector = ({ selectedSeat, setSelectedSeat }) => {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/seats')
            .then(response => {
                const nonOccupiedSeats = response.data.filter(seat => !seat.isOccupied && !seat.is_occupied);
                setSeats(nonOccupiedSeats);
            })
            .catch(error => console.error('Error fetching seats:', error));
    }, []);

    const handleSeatClick = (seatNumber) => {
        setSelectedSeat(seatNumber);
    };

    // Determine the number of rows and columns based on the number of seats
    const numRows = Math.ceil(seats.length / 10);
    const rows = Array.from({ length: numRows }, () => []);

    // Populate the rows array with actual seat data
    seats.forEach((seat, index) => {
        const seatNumber = seat.seatNumber || seat.seat_number;
        if (seatNumber && !isNaN(seatNumber)) {
            const row = Math.floor(index / 10);
            rows[row].push(seat);
        }
    });

    return (
        <div className="seat-map">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                    {row.map((seat, colIndex) => (
                        <div
                            key={colIndex}
                            className={`seat ${selectedSeat === (seat.seatNumber || seat.seat_number) ? 'selected' : 'available'}`}
                            onClick={() => handleSeatClick(seat.seatNumber || seat.seat_number)}
                        >
                            {seat.seatNumber || seat.seat_number || 'Empty'}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SeatMapSelector;