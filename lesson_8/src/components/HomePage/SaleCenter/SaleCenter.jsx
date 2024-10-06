import { Link } from "react-router-dom";

function SaleCenter() {
    return (
        <>
        <section className="sale center">

            <div className="sale__item">
                <div className="sale__content">
                    <p className="sale__text">30% OFF</p>
                    <h3 className="sale__heading">FOR WOMEN</h3>
                </div>
                <img src="./../../src/images/advertisement001.jpg" alt="sale image" className="img__sale" />
            </div>

            <Link to={"/catalog"}>
                <div className="sale__item">
                    <div className="sale__content">
                        <p className="sale__text">HOT DEAL</p>
                        <h3 className="sale__heading">FOR MEN</h3>
                    </div>
                    <img src="./../../src/images/advertisement002.jpg" alt="sale image" className="img__sale" />
                </div>
            </Link>

            <div className="sale__item">
                <div className="sale__content">
                    <p className="sale__text">NEW ARRIVALS</p>
                    <h3 className="sale__heading">FOR KIDS</h3>
                </div>
                <img src="./../../src/images/advertisement003.jpg" alt="sale image" className="img__sale" />
            </div>

            <div className="sale__item sale__item__big">
                <div className="sale__content">
                    <p className="sale__text">LUXIROUS & TRENDY</p>
                    <h3 className="sale__heading">ACCESORIES</h3>
                </div>
                <img src="./../../src/images/advertisement004.jpg" alt="sale image" className="img__big" />
            </div>


        </section>
        <h2 className="product-box__heading">Fetured Items</h2>
            <p className="product-box__text">Shop for items based on what we featured in this week</p>

        </>
    );
}

export default SaleCenter;