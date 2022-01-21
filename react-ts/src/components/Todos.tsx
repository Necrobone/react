import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

type TodosProps = {
    todos: Todo[],
    onRemoveTodo: (id: string) => void,
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.todos.map(todo =>
                <TodoItem
                    onRemoveTodo={() => props.onRemoveTodo(todo.id)}
                    key={todo.id}
                    text={todo.text}
                />
            )}
        </ul>
    );
}

export default Todos;
