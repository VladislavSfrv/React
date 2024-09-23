import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { deleteItem } from "../../redux/slices/favoriteSlice";
import { useEffect, useState } from "react";


function FavoriteList({ goods }) {
    const favorite = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    let [title, setTitle] = useState("");

    useEffect(() => {
        if (favorite.items.length === 0){
            setTitle("")
        }else{
            setTitle("Избранные товары");
        }
    }, [favorite]);

    return (
        <>
            <h1 className="title-goods">{title}</h1>
            <ul className="goods-ul">
                {goods
                    .filter((item) => favorite.items.includes(item.id))
                    .map(item => {
                        {
                            return (
                                <div key={item.id} className="goods-div">
                                    <li>
                                        <h1>{item.name}</h1>
                                        <p>{item.description}</p>
                                        <h3>{item.price} <span>рублей</span></h3>
                                        <Button
                                            nameClass={"favorite-btn-delete"}
                                            handlerClick={() => { dispatch(deleteItem(item.id)) }}
                                        >
                                            Удалить из избранных
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

export default FavoriteList;