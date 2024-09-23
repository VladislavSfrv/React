import { useDispatch } from "react-redux";
import Button from "../Button/Button.jsx";
import { deleteTodo } from "../../redux/slices/todoSlice.js";

function TodoItem({ id, text }) {
    const dispatch = useDispatch();
    const deleteItem = () => {
        if (window.confirm('Удалить запись?')) {
            dispatch(deleteTodo(id))  
        }
    }

    return (
        <div className="item-div">
            <p>{text}</p>
            <Button nameClass = {"remove-btn"} handlerClick={deleteItem}>Удалить</Button>
        </div>
    );
}

export default TodoItem;