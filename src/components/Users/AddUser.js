import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState(null);

    const addUserHandler = event => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }

        if (parseInt(enteredAge) < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }
        setEnteredUsername('');
        setEnteredAge('');
        props.onAddUser(enteredUsername, enteredAge);
    };

    const enteredUsernameHandler = event => {
        setEnteredUsername(event.target.value);
    };

    const enteredAgeHandler = event => {
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={enteredUsernameHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="text" value={enteredAge} onChange={enteredAgeHandler} />
                    <Button type="submit" onClick={addUserHandler}>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
