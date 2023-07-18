import React from 'react';
import { useDispatch } from 'react-redux';
import { saveEmployee } from '../../redux/employeeActions';
import styles from './body.module.scss'

const Main = () => {
    const dispatch = useDispatch();

    const handleSaveEmployee = (event) => {
        event.preventDefault();
        // Récupérer le formulaire à partir de l'événement
        const form = event.target.form;
        // Récupérer les données de l'employé à partir du formulaire
        const formData = new FormData(form);
        const employee = Object.fromEntries(formData);
        // Enregistrer l'employé à l'aide de l'action Redux
        dispatch(saveEmployee(employee));
        // Réinitialiser le formulaire après l'enregistrement (si nécessaire)
        form.reset();
    };


    return (
    <div>
            <div className={styles.title}>
                <h1>HRnet - Current Employees</h1>
            </div>
            <div className={styles.container}>
                <a href="/employee-list">View Current Employees</a>
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

                <button onClick={handleSaveEmployee}>Save</button>
            </div>
            <div id="confirmation" className={styles.modal}>Employee Created!</div>
        </div>
    );
};

export default Main;