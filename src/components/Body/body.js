import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveEmployee } from '../../redux/employeeActions';
import styles from './body.module.scss';
import {Link} from "react-router-dom";

const Main = () => {
    const dispatch = useDispatch();
    const [showError, setShowError] = useState(false);
    const [showZipError, setShowZipError] = useState(false);
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

    const handleNameChange = (event) => {
        const { value } = event.target;
        // Vérifiez si la valeur contient des chiffres
        if (/\d/.test(value)) {
            // Si la valeur contient des chiffres, ne mettez pas à jour l'état et affichez le message d'erreur
            event.preventDefault();
            setShowError(true);
        } else {
            // Sinon, mettez à jour l'état avec la nouvelle valeur et cachez le message d'erreur
            // setState(value);
            setShowError(false);
        }
    };
    const handleZipCodeChange = (event) => {
        const { value } = event.target;
        // Vérifiez si la valeur ne contient que des chiffres
        if (!/^\d*$/.test(value)) {
            // Si la valeur ne contient pas que des chiffres, ne mettez pas à jour l'état et affichez le message d'erreur
            event.preventDefault();
            setShowZipError(true);
        } else {
            // Sinon, mettez à jour l'état avec la nouvelle valeur et cachez le message d'erreur
            // setState(value);
            setShowZipError(false);
        }
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
                    <input  name="firstname" type="text" id="first-name" onChange={handleNameChange} />
                    {showError && <p className="error">Les chiffres ne sont pas autorisés dans les champs de prénom </p>}

                    <label htmlFor="last-name">Last Name</label>
                    <input name="lastname" type="text" id="last-name" onChange={handleNameChange} />
                    {showError && <p className="error">Les chiffres ne sont pas autorisés dans les champs du nom de famille </p>}

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input name="dateOfBirth" type="date" id="date-of-birth" />

                    <label htmlFor="start-date">Start Date</label>
                    <input name = "startDate" type="date" id="start-date" />

                    <fieldset className={styles.address}>
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input name ="street" type="text" id="street" />

                        <label htmlFor="city">City</label>
                        <input  name ="city" type="text" id="city" />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input name="zipCode" type="text" id="zip-code" onChange={handleZipCodeChange} />
                        {showZipError && <p className="error">Le code postal ne doit contenir que des chiffres.</p>}

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
