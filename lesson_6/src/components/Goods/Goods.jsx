import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { addItem } from "../../redux/slices/favoriteSlice";
import "./goods.css";

function Goods({ goods }) {
    const dispatch = useDispatch();

    return (
        <>
            <h1 className="title-goods">Товары</h1>
            <ul className="goods-ul">
                {goods
                    .map(item => {
                        {
                            return (
                                <div key={item.id} className="goods-div">
                                    <li>
                                        <h1>{item.name}</h1>
                                        <p>{item.description}</p>
                                        <h3>{item.price} <span>рублей</span></h3>
                                        <Button
                                            nameClass={"favorite-btn-add"}
                                            handlerClick={() => { dispatch(addItem(item.id)) }}
                                        >
                                            Добавить в избранное
                                        </Button>
                                    </li>
                                </div>
                            )
                        }
                    })}
            </ul >
        </>
    );
}

export default Goods;