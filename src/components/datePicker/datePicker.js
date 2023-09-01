import React, { useState } from 'react';
import './datePicker.scss';

const DatePicker = ({onSelectedDate}) => {
    const [selectedDate, setSelectedDate] = useState("");

 

    return (
        <div className="date-picker-container">
            <input
                type="date"
                value={selectedDate}
                onChange={(e)=>{
                    setSelectedDate(e.target.value);
                    onSelectedDate(e.target.value)
                }}
            />
            {selectedDate && (
                <p>Selected date: {selectedDate}</p>
            )}
        </div>
    );
};

export default DatePicker;
