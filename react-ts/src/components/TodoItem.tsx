import React from "react";
import classes from './TodoItem.module.css';

type TodoProps = {
    text: string,
    onRemoveTodo: () => void,
}

const TodoItem: React.FC<TodoProps> = (props) => {
    return (
        <li onClick={props.onRemoveTodo} className={classes.item}>{props.text}</li>
    );
}

export default TodoItem;
