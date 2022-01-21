import React from "react";

type TodosProps = {
    items: string[],
}

const Todos: React.FC<TodosProps> = (props) => {
    return (
        <ul>
            {props.items.map(item => <li key={item}>{item}</li>)}
        </ul>
    );
}

export default Todos;
