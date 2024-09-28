import React from 'react';
import './SeatMap.css'; // Create a CSS file for styling

const SeatMap = ({ seats }) => {
    const rows = seats.reduce((acc, seat) => {
        const row = Math.floor((seat.seatNumber - 1) / 10);
        const col = (seat.seatNumber - 1) % 10;
        if (!acc[row]) acc[row] = [];
        acc[row][col] = seat;
        return acc;
    }, []);

    return (
        <div className="seat-map">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="seat-row">
                    {row.map((seat, colIndex) => (
                        <div
                            key={colIndex}
                            className={`seat ${seat.isOccupied ? 'occupied' : 'available'}`}
                        >
                            {seat.seatNumber}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SeatMap;