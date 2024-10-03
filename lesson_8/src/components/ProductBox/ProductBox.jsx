import { Link } from "react-router-dom";


function ProductBox({ goods }) {
    return (
        <section className="product-box center">

            <h2 className="product-box__heading">Fetured Items</h2>
            <p className="product-box__text">Shop for items based on what we featured in this week</p>

            <div className="product-box__content">

                {goods.map((good, index) => {
                    return (
                        <div className="product" key={index}>

                            <div className="product__picturebox">

                                <div className="product__picturebox__itemHover">
                                    <button className="product__picturebox__buy-button">
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

            <div className="product-box__button">
                <Link to="/product" className="product-box__button__text">Browse All Product</Link>
            </div>

        </section>
    );
}

export default ProductBox;