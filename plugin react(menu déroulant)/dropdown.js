import React, { useState } from 'react';

const Dropdown = ({ options, value, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <select value={selectedValue} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;
