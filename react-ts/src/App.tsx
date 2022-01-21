import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
    const todos = [
        new Todo('Learn React'),
        new Todo('Learn Typescript'),
    ]
    return (
        <div>
            <Todos todos={todos} />
        </div>
    );
}

export default App;
