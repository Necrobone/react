import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import { useContext, useState } from 'react';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout/Checkout';
import cartContext from '../../store/CartContext';

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const context = useContext(CartContext);
    const totalAmount = `$${context.totalAmount.toFixed(2)}`;
    const hasItems = context.items.length > 0;

    const cartItemAddHandler = item => {
        context.addItem({...item, amount: 1});
    };
    const cartItemRemoveHandler = id => {
        context.removeItem(id)
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

    const submitOrderHandler = (userData) => {
        fetch('https://react-http-95324-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: context.items,
            })
        });
    };

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    );

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
            {!isCheckout && modalActions}
        </Modal>
    );
};

export default Cart;
