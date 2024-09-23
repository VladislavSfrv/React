import { addProduct, deleteProduct } from "../../redux/slices/productsSlice";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import "./catalogProducts.css"

function CatalogProducts() {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const handleAddProduct = (e) => {
        e.preventDefault();
        dispatch(addProduct());
    }

    return (<div>
        <Button nameClass = {"add-btn products-add-btn"}handlerClick={handleAddProduct}>Добавить продукт</Button>
        <h1 className="title-products">Каталог продуктов</h1>
        {products.map((product) => {
            return(
                <ul key={product.id} className="products-ul">
                    <div className="products-div">
                        <li>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.price} <span>руб.</span></p>
                            <p>Осталось - {product.available}</p>
                            <Button nameClass={"remove-btn"} handlerClick={() => {dispatch(deleteProduct(product.id))}}>Удалить продукт</Button>
                        </li>
                    </div>
                </ul>
            )
        })}
    </div> );
}

export default CatalogProducts;