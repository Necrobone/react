import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

type TodosProps = {
    todos: Todo[],
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul>
            {props.todos.map(todo => <TodoItem key={todo.id} text={todo.text} />)}
        </ul>
    );
}

export default Todos;
