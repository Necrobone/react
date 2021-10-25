import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/CartContext';

const HeaderCartButton = props => {
    const [btnEffect, setIsBtnEffec] = useState(false);
    const context = useContext(CartContext);
    const {items} = context;

    const cartItems = items.reduce((number, item) => {
        return number + item.amount;
    }, 0);
    const btnClasses = `${classes.button} ${btnEffect ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setIsBtnEffec(true);

        const timer = setTimeout(() => {
            setIsBtnEffec(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{cartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
