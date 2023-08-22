import React, { useState } from 'react';
import './datePicker.scss';

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (event) => {
        const inputDate = event.target.value;
        setSelectedDate(inputDate);
    };

    return (
        <div className="date-picker-container">
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
            />
            {selectedDate && (
                <p>Selected date: {selectedDate}</p>
            )}
        </div>
    );
};

export default DatePicker;
