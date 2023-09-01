import React from 'react';
import styles from './Modal.module.scss';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <p>Employee saved successfully!</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;

