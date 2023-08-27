import { useState } from 'react';
import PropTypes from 'prop-types';
import { acceptedStyles, errorStyles, inputStyles } from './Input.styled.js';

export const InputMain = ({ value, name, label, placeholder, type, onChange }) => {
    // зберігання помилки
    const [error, setError] = useState({});

    // унікальний id для зв'язку інпута та лейбла
    const inputId = label.replace(/\s+/g, '-').toLowerCase();

    //функції валідації полів
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z]).{5,}$/;
        return passwordPattern.test(password);
    };

    // Обробник зміни значення інпута
    const handleChange = (event) => {
        const { value } = event.target;
    //перевірки
         let validationError = {};
        if (!value.trim()) {
            validationError = { isValid: false, message: 'This field is required.' };
        } else if (type === 'email' && !validateEmail(value)) {
            validationError = { isValid: false, message: 'Invalid email format (example@mail.com).' };
        } else if (type === 'password' && !validatePassword(value)) {
            validationError = { isValid: false, message: 'Invalid password format (The password must contain at least one uppercase alphabetical character, one figure and must be at least 5 characters in length).' };
        } else {
            validationError = { isValid: true, message: '' };
        }

        setError(validationError);
        onChange (value);
    };

    return (
        <>
            {/* Відображаємо мітку, якщо вона передана */}
            {label && <label htmlFor={inputId}>{label}</label>}

            {type === 'textarea' ? (
                // Якщо тип textarea
                <textarea
                    id={inputId}
                    className={inputStyles}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={handleChange}
                />
            ) : (
                // в іншому випадку відображаємо input
                <input
                    id={inputId}
                    type={type}
                        value={value}
                        className={inputStyles}
                        placeholder={placeholder}
                        name={name}
                     onChange={handleChange}
                />
            )}
            {/* Відображаємо помилку, якщо вона присутня або приймаємо */}
             <span className={error ? errorStyles : acceptedStyles}>
            {error ? error.message : 'Accepted'}
        </span>
        </>
    );
};


InputMain.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    validators: PropTypes.array,
    type: PropTypes.string,
    name:PropTypes.string,
     onChange: PropTypes.func.isRequired,
};

// Дефолтні значення
InputMain.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    type: 'text',
    validators: [],
    name:'',
};

