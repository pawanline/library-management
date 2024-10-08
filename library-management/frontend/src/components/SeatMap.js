import React from 'react';
import './SeatMap.css'; // Create a CSS file for styling

const SeatMap = ({ seats }) => {
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
                            className={`seat ${seat.isOccupied || seat.is_occupied ? 'occupied' : 'available'}`}
                        >
                            {seat.seatNumber || seat.seat_number || 'Empty'}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SeatMap;