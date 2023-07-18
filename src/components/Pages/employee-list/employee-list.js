import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Header/header';
import axios from 'axios';

const EmployeeList = () => {
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/employees')
            .then((response) => {
                // Mise à jour du store avec les données des employés
                dispatch({ type: 'SET_EMPLOYEES', payload: response.data });
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, [dispatch]);

    // Utilisez Header en tant que composant en l'appelant avec des balises JSX
    return (
        <div>
            <Header />
            <ul>
                <h1>Lol</h1>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;

