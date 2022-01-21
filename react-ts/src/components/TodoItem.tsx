import React from "react";

type TodoProps = {
    text: string,
}

const TodoItem: React.FC<TodoProps> = (props) => {
    return (
        <li>{props.text}</li>
    );
}

export default TodoItem;
