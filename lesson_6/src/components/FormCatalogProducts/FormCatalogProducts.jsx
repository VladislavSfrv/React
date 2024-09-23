import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/productsSlice";
import { useState } from "react";


function FormCatalogProducts() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState('');

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (name === "" || description === "" || price === "" || available === "") {
            console.log("Пожалуйста, заполните все поля ввода");
            return;
        }
        dispatch(addProduct([name, description, price, available])); 
        setName('');
        setDescription('');
        setPrice('');
        setAvailable('');
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handlePriceChange = (e) => {
        const input = e.target.value;
        if (!isNaN(input) || input === '') {
            setPrice(input);
        }
    }

    const handleAvailableChange = (e) => {
        const input = e.target.value;
        if (!isNaN(input) || input === '') {
            setAvailable(input);
        }
    }

    return (
        <>
            <h1 className="title-products">Добавить продукты</h1>
            <form className="form-catalog-products">
                <input onChange={handleNameChange} value={name} type="text" placeholder="Название продукта" />
                <input onChange={handleDescriptionChange} value={description} type="text" placeholder="Описание продукта" />
                <input onChange={handlePriceChange} value={price} type="text" placeholder="Цена продукта" />
                <input onChange={handleAvailableChange} value={available} type="text" placeholder="Количество продукта" />
                <Button nameClass={"add-btn products-add-btn"} handlerClick={handleAddProduct}>Добавить продукт</Button>
            </form>
        </>
    );
}

export default FormCatalogProducts;