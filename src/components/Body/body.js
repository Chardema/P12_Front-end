import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveEmployee } from '../../redux/employeeActions';
import styles from './body.module.scss';
import {Link} from "react-router-dom";

const Main = () => {
    const dispatch = useDispatch();
    // Créez une référence pour le formulaire
    const formRef = useRef(null);
    // État pour gérer l'affichage du message de confirmation
    const [showConfirmation, setShowConfirmation] = useState(false);
    const handleSaveEmployee = () => {
        // Récupérer les données de l'employé à partir du formulaire en utilisant la référence
        const formData = new FormData(formRef.current);
        const employee = Object.fromEntries(formData);
        console.log(employee)
        // Enregistrer l'employé à l'aide de l'action Redux
        dispatch(saveEmployee(employee));
        // Réinitialiser le formulaire après l'enregistrement (si nécessaire)
        formRef.current.reset();
        // Afficher le message de confirmation
        setShowConfirmation(true);
        // Cacher le message de confirmation après quelques secondes (facultatif)
        setTimeout(() => {
            setShowConfirmation(false);
        },3000);
    };

    return (
        <div>
            <div className={styles.title}>
                <h1>HRnet - Current Employees</h1>
            </div>
            <div className={styles.container}>
                <Link to={"/employee-list"}> View current Employees </Link>
                <h2>Create Employee</h2>
                {/* Utilisez la référence pour lier le formulaire */}
                <form ref={formRef} action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input  name="firstname" type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input name="lastname" type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input type="date" id="date-of-birth" />

                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id="start-date" />

                    <fieldset className={styles.address}>
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" />

                        <label htmlFor="city">City</label>
                        <input type="text" id="city" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input type="text" id="zip-code" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department">
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>

                    <button type="button" onClick={handleSaveEmployee}>Save</button>
                </form>
            </div>
            {/* Afficher le message de confirmation s'il est vrai */}
            {showConfirmation && (
                <div id="confirmation" className={styles.modal}>
                    Employee Created!
                </div>
            )}
        </div>
    );
};

export default Main;
