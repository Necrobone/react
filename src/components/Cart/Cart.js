import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import { Fragment, useContext, useState } from 'react';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout/Checkout';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const context = useContext(CartContext);
    const totalAmount = `$${context.totalAmount.toFixed(2)}`;
    const hasItems = context.items.length > 0;

    const cartItemAddHandler = item => {
        context.addItem({ ...item, amount: 1 });
    };
    const cartItemRemoveHandler = id => {
        context.removeItem(id);
    };

    const cartItems = <ul className={classes['cart-items']}>
        {context.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={cartItemAddHandler.bind(null, item)}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
        ))}
    </ul>;

    const orderHandler = () => {
        setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-http-95324-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: context.items,
            }),
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        context.clearCart();
    };

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    );

    const cartModalContent =
        <Fragment>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </Fragment>;

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = <Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
            <button className={classes.button} onClick={props.onClose}>Close</button>
        </div>
    </Fragment>;

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;
