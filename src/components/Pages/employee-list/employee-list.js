import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from "./employee-list.module.scss";
import { Link } from "react-router-dom";

const EmployeeList = () => {
    const employees = useSelector((state) => state.employees);
    const [entriesToShow, setEntriesToShow] = useState(10);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const filteredEmployees = employees.filter((employee) =>
        searchValue === '' ||
        (employee.firstname && employee.firstname.toLowerCase().includes(searchValue.toLowerCase())) ||
        (employee.lastname && employee.lastname.toLowerCase().includes(searchValue.toLowerCase())) ||
        (employee.email && employee.email.toLowerCase().includes(searchValue.toLowerCase())) ||
        (employee.department && employee.department.toLowerCase().includes(searchValue.toLowerCase())) ||
        (employee.street && employee.street.toLowerCase().includes(searchValue.toLowerCase())) ||
        (employee.city && employee.city.toLowerCase().includes(searchValue.toLowerCase())) ||
        (employee.state && employee.state.toLowerCase().includes(searchValue.toLowerCase())) ||
        (employee.zipCode && employee.zipCode.toLowerCase().includes(searchValue.toLowerCase()))
    );


    return (
        <div>
            <h1>Current Employees</h1>
            <div className={styles.tablecontainer}>
                <div className={styles.searchcontainer}>
                    <label htmlFor="search">Search:</label>
                    <input
                        id="search"
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <label htmlFor="entriesToShow">Show entries:</label>
                    <select
                        id="entriesToShow"
                        value={entriesToShow}
                        onChange={(e) => setEntriesToShow(e.target.value)}
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>

                {filteredEmployees.length === 0 ? (
                    <p>No data available in table</p>
                ) : (
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
                        {filteredEmployees
                            .slice(currentPage * entriesToShow, (currentPage + 1) * entriesToShow)
                            .map((employee) => (
                                <tr key={Math.floor(Math.random() * 10000)}>
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
                )}
            </div>
            <div className={styles.pagination}>
            <p>
                Showing {Math.min(entriesToShow, filteredEmployees.length)} of {filteredEmployees.length} entries
            </p>
            <button onClick={() => setCurrentPage((page) => Math.max(page - 1, 0))}>Previous</button>
            <button onClick={() => setCurrentPage((page) => Math.min(page + 1, Math.ceil(filteredEmployees.length / entriesToShow) - 1))}>Next</button>
            </div>
            <Link to="/" className={styles.link}>Home</Link>
        </div>
    );
};

export default EmployeeList;
