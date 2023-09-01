import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from "./employeeTable.module.scss";

const EmployeeTable = ({ employees, currentPage, entriesToShow }) => {
    const displayedEmployees = employees.slice(
        currentPage * entriesToShow,
        (currentPage + 1) * entriesToShow
    );

    return (
        <table className={styles.table}>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Start Date</th>
                <th>Department</th>
                <th>Date of Birth</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
            </tr>
            </thead>
            <tbody>
            {displayedEmployees.map((employee) => (
                <tr key={uuidv4()}>
                    <td>{employee.firstname}</td>
                    <td>{employee.lastname}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.dateOfBirth}</td>
                    <td>{employee.street}</td>
                    <td>{employee.city}</td>
                    <td>{employee.state}</td>
                    <td>{employee.zipCode}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
