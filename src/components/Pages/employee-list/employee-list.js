import React, { useState, useEffect } from "react";
import Header from "../../Header/header";

const EmployeeList = () => {
    Header();
    // Définir l'état des employés
    const [employees, setEmployees] = useState([]);

    // Charger les employés de la base de données
    useEffect(() => {
        fetch("/employees")
            .then((response) => response.json())
            .then((data) => setEmployees(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Afficher la liste des employés
    return (
        <ul>
            {employees.map((employee) => (
                <li key={employee.id}>
                    {employee.name} {employee.email}
                </li>
            ))}
        </ul>
    );
};

export default EmployeeList;
