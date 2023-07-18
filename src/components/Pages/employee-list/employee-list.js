import React from 'react';
import { useSelector } from 'react-redux';

const EmployeeList = () => {
    const employees = useSelector((state) => state.employees);

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.firstName} {employee.lastName} - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;


