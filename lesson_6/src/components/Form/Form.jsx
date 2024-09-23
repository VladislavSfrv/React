import { useState } from "react";
import Button from "../Button/Button.jsx";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/slices/todoSlice.js";

function Form() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handlerOnChange = ({ target }) => {
        setValue(target.value)
    }
    
    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(value)) 
        setValue('');
    }
    return (
        <form onSubmit={handlerSubmit} className="form">
            <input onChange={handlerOnChange} value={value} placeholder="Добавить задачу..."/>
            <Button nameClass={"add-btn"}>Добавить</Button>
        </form>
    );
}

export default Form;