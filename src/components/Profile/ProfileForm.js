import classes from './ProfileForm.module.css';
import { useContext, useRef } from 'react';
import AuthContext from '../../store/auth-context';

const ProfileForm = () => {
    const newPasswordInputRef = useRef();
    const context = useContext(AuthContext);

    const submitHandler = event => {
        event.preventDefault();

        const enteredPassword = newPasswordInputRef.current.value;

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBglMxIcjMGe9UkLKxW2en_sBt54OxCFxY', {
            body: JSON.stringify({
                idToken: context.token,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {

        });
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" ref={newPasswordInputRef} minLength="7" />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
