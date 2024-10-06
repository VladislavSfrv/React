import { useDispatch } from "react-redux";
import { addGoodToCart } from "../../redux/Slices/cartSlice.js";


function ProductBox({ goods }) {
    const dispatch = useDispatch();
    const addToCart = (good) => {
        dispatch(addGoodToCart(good));
    };
    return (
        <section className="product-box center">

            <div className="product-box__content">

                {goods.map((good, index) => {
                    return (
                        <div className="product" key={index}>

                            <div className="product__picturebox">

                                <div className="product__picturebox__itemHover">
                                    <button className="product__picturebox__buy-button" onClick={() => addToCart(good)}>
                                        <img src="./../../src/images/vector.svg" alt="корзина"
                                            className="product__picturebox__buy-button-img" />
                                        Add to Cart
                                    </button>
                                </div>

                                <img src={good.photo} alt="photo" className="product__picturebox__img" />

                            </div>

                            <div className="product__content">
                                <h5 className="product__content__heading">{good.title}</h5>
                                <p className="product__content__text">{good.description}</p>
                                <p className="product__content__price">${good.price}</p>
                                {good.size ? <p>Size: {good.size}</p> : ''}
                            </div>

                        </div>
                    )
                })}

            </div>

        </section>
    );
}

export default ProductBox;