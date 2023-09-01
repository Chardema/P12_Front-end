import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveEmployee } from '../../redux/employeeActions';
import styles from './body.module.scss';
import {Link} from "react-router-dom";
import DatePicker from "../datePicker/datePicker";
import Modal from "../Modal/modal";
import { ChrisDropdown } from 'chris_dropdown';

const Main = () => {
    const dispatch = useDispatch();
    const [showError, setShowError] = useState(false);
    const [showZipError, setShowZipError] = useState(false);
    const [birthD, setBirthD] = useState("");
    const [startD, setStartD] = useState("");

  const [department, setDepartment] = useState("Sales");

  const departments =[
                { value: 'Sales', label: 'Sales' },
                { value: 'Marketing', label: 'Marketing' },
                { value: 'Engineering', label: 'Engineering' },
                { value: 'Human Resources', label: 'Human Resources' },
                { value: 'Legal', label: 'Legal' },
            ]


 const handleSelect = (selectVal)=>{
  setDepartment(selectVal)
 }

    const getDateOfBirth = (dateofbirth)=>{
       setBirthD(dateofbirth)
    }

      const getStartDate = (startdate)=>{
        setStartD(startdate)
    }



    // Créez une référence pour le formulaire
    const formRef = useRef(null);
    // État pour gérer l'affichage du message de confirmation
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleSaveEmployee = () => {
        // Récupérer les données de l'employé à partir du formulaire en utilisant la référence
        const formData = new FormData(formRef.current);
        const employee = Object.fromEntries(formData);
        employee.dateOfBirth = birthD;
        employee.startDate = startD;
        employee.department = department;
        
        // Effectuer la validation des champs ici
        const firstName = employee.firstname;
        const lastName = employee.lastname;
        const zipCode = employee.zipCode;

           console.log(employee);

        if (/\d/.test(firstName) || /\d/.test(lastName)) {
            setShowError(true);
            return; // Empêche la sauvegarde si une erreur est détectée
        }

        if (!/^\d*$/.test(zipCode)) {
            setShowZipError(true);
            return;
        }

        // Si aucune erreur n'a été détectée, la sauvegarde continue
        dispatch(saveEmployee(employee));
        formRef.current.reset();
        setShowConfirmation(true);
        setIsModalOpen(true);
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
    const handleCloseModal = () => {
        setIsModalOpen(false);
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
                    <DatePicker onSelectedDate={getDateOfBirth}  id="date-of-birth" />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker onSelectedDate={getStartDate}  id="start-date" />

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
                    <ChrisDropdown 
                      handleSelect={handleSelect}
                            name="department"
                            id="department"
                            options={departments}
                    />
                    <button type="button" onClick={handleSaveEmployee}>Save</button>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                </form>
            </div>
        </div>
    );
};

export default Main;
