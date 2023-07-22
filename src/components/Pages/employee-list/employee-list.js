import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

const EmployeeList = () => {
    const employees = useSelector((state) => state.employees);
    /*useEffect(() =>  {

    }, [employees]) */

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map((employee) => (
                    <li key={Math.floor(Math.random() * 10000)}>
                        {employee.firstname} {employee.lastname} - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;


