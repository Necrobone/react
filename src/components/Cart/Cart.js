import classes from './Cart.module.css';
import Modal from '../UI/Modal/Modal';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem/CartItem';

const Cart = props => {
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

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
