import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import {TodosContext} from "../store/todos-context";

const Todos: React.FC = () => {
    const context = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {context.todos.map(todo =>
                <TodoItem
                    onRemoveTodo={() => context.removeTodo(todo.id)}
                    key={todo.id}
                    text={todo.text}
                />
            )}
        </ul>
    );
}

export default Todos;
