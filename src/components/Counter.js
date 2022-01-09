import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter);

    const incrementHandler = (value) => {
        dispatch(counterActions.increment());
    };
    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };
    const increaseHandler = () => {
        dispatch(counterActions.increase(10));
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
