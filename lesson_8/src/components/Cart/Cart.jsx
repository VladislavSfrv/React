import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import {Link} from "react-router-dom"
import { clearCart } from "../../redux/Slices/cartSlice";


function Card() {
    const dispatch = useDispatch();
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    return (
        <>
            <header className="top-head center">
                <div className="top-head__box">
                    <h1>SHOPPING CART</h1>
                </div>
            </header>

            <div className="product-selection center">
                <div className="product-selection__card">
                    
                    <CartItem />

                    <div className="product-selection__buttons">
                        <button className="product-selection__button" onClick={() => dispatch(clearCart())}>CLEAR SHOPPING CART</button>
                        <Link to="/catalog"><button className="product-selection__button">CONTINUE SHOPPING</button></Link>
                    </div>

                </div>

                <div className="product-selection__info">
                    <div className="product-selection__info__address">
                        <h5 className="product-selection__info__address-title">SHIPPING ADRESS</h5>
                        <input className="product-selection__info__address-input" type="text" placeholder="City" />
                        <input className="product-selection__info__address-input" type="text" placeholder="State" />
                        <input className="product-selection__info__address-input" type="number" placeholder="Postcode / Zip" />
                        <input className="product-selection__info__address-submit" type="submit" value="GET A QUOTE" />
                    </div>

                    <div className="product-selection__purchase">
                        <p className="product-selection__purchase__price-first">SUB TOTAL: {totalPrice} $</p>
                        <p className="product-selection__purchase__price-second">GRAND TOTAL: {totalPrice} $</p>
                        <div className="product-selection__purchase__line"></div>
                        <button className="product-selection__purchase__button">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;