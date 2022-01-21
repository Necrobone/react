import React from "react";
import classes from './TodoItem.module.css';

type TodoProps = {
    text: string,
}

const TodoItem: React.FC<TodoProps> = (props) => {
    return (
        <li className={classes.item}>{props.text}</li>
    );
}

export default TodoItem;
