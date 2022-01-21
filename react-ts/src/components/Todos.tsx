import React from "react";
import Todo from "../models/todo";

type TodosProps = {
    todos: Todo[],
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul>
            {props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    );
}

export default Todos;
