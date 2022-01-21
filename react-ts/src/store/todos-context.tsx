import React, {useState} from "react";
import Todo from "../models/todo";

type TodosContextTypes = {
    todos: Todo[],
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextTypes>({
    todos: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    };

    const contextValue: TodosContextTypes = {
        todos: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;
