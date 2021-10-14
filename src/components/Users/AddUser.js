import React, { useState, Fragment, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState(null);

    const addUserHandler = event => {
        event.preventDefault();

        const enteredUserName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
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
        props.onAddUser(enteredUserName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="text" ref={ageInputRef} />
                    <Button type="submit" onClick={addUserHandler}>Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
};

export default AddUser;
