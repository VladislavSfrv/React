import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem.jsx";
import "./todoList.css";

function TodoList() {
    const todo = useSelector((state)=> state.todo);
    return (
        <ul className="ul-list">
            {todo.items.map(item =>
                <li key={item.id}>
                    <TodoItem {...item} />
                </li>)}
        </ul>
    );
}

export default TodoList;