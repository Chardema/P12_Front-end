import React from 'react';
import styles from "./body.module.scss"

const Main = () => {
    const saveEmployee = () => {
        // Récupérer les données de l'employé à partir du formulaire
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dateOfBirth = document.getElementById("date-of-birth").value;
        const startDate = document.getElementById("start-date").value;
        const street = document.getElementById("street").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const zipCode = document.getElementById("zip-code").value;
        const department = document.getElementById("department").value;

        // Créer un objet représentant l'employé
        const employee = {
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            street,
            city,
            state,
            zipCode,
            department,
        };
    };

    return (
        <div>
            <div className={styles.title}>
                <h1>HRnet</h1>
            </div>
            <div className={styles.container}>
                <a href="employee-list.js">View Current Employees</a>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="text" />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="text" />

                    <fieldset className={styles.address}>
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state"></select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </form>

                <button onClick={saveEmployee}>Save</button>
            </div>
            <div id="confirmation" className={styles.modal}>Employee Created!</div>
        </div>
    );
};

export default Main;