import {Link} from "react-router-dom";

function Adavantages() {
    return (
        <>
            <div className="product-box__button">
                <Link to="/product" className="product-box__button__text">Browse All Product</Link>
            </div>
            <div className="advantages center">

                <article className="advantages__item">
                    <img src="./../../src/images/advantages1.svg" alt="car" />
                    <h3 className="advantages__item__heading">Free Delivery</h3>
                    <p className="advantages__item__text">Worldwide delivery on all. Authorit tively morph <br /> next-generation
                        innov
                        tion with extensive
                        models.
                    </p>
                </article>

                <article className="advantages__item">
                    <img src="./../../src/images/advantages2.svg" alt="percent" />
                    <h3 className="advantages__item__heading">Sales & discounts</h3>
                    <p className="advantages__item__text">Worldwide delivery on all. Authorit tively morph <br /> next-generation
                        innov
                        tion with extensive
                        models.
                    </p>
                </article>

                <article className="advantages__item">
                    <img src="./../../src/images/advantages3.svg" alt="king" />
                    <h3 className="advantages__item__heading">Quality assurance</h3>
                    <p className="advantages__item__text">Worldwide delivery on all. Authorit tively morph <br /> next-generation
                        innov
                        tion with extensive
                        models.
                    </p>
                </article>

            </div>
        </>
    );
}

export default Adavantages;