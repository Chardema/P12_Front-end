import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from "./employee-list.module.scss";
import { Link } from "react-router-dom";
import EmployeeTable from "../../employeeTable/employeeTable";

const EmployeeList = () => {
    const employees = useSelector((state) => state.employees);
    console.log(employees)
    const [entriesToShow, setEntriesToShow] = useState(10);
    const [searchValue, setSearchValue] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const filteredEmployees = employees.filter((employee) =>
        searchValue === '' ||
        (employee.firstname && employee.firstname.toLowerCase().includes(searchValue.toLowerCase())) ||
        (employee.lastname && employee.lastname.toLowerCase().includes(searchValue.toLowerCase())) ||
        (employee.dateOfBirth && employee.dateOfBirth.toLowerCase().includes(searchValue.toLowerCase())) ||
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
                    <EmployeeTable
                        employees={filteredEmployees}
                        currentPage={currentPage}
                        entriesToShow={entriesToShow}
                    />
                )}
            </div>
            <div className={styles.pagination}>
            <p>
                Showing {Math.min(entriesToShow, filteredEmployees.length)} of {filteredEmployees.length} entries
            </p>
                <div className={styles.buttoncontainer}>
            <button  className={styles.button} onClick={() => setCurrentPage((page) => Math.max(page - 1, 0))}>Previous</button>
            <button  className={styles.button} onClick={() => setCurrentPage((page) => Math.min(page + 1, Math.ceil(filteredEmployees.length / entriesToShow) - 1))}>Next</button>
            </div>
                </div>
            <Link to="/" className={styles.link}>Home</Link>
        </div>
    );
};

export default EmployeeList;
