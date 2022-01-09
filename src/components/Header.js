import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { authActions } from '../store/auth';

const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const logoutHandler = () => {
        dispatch(authActions.logout());
    };

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    {isAuthenticated && (
                        <Fragment>
                            <li>
                                <a href="/">My Products</a>
                            </li>
                            <li>
                                <a href="/">My Sales</a>
                            </li>
                            <li>
                                <button onClick={logoutHandler}>Logout</button>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
