import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

type TodosProps = {
    todos: Todo[],
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.todos.map(todo => <TodoItem key={todo.id} text={todo.text} />)}
        </ul>
    );
}

export default Todos;
