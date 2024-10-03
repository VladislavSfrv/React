import { Link } from "react-router-dom";

function ProductHeader() {
    return (
        <header className="top-head center">
            <div className="top-head__box">
                <h1>NEW ARRIVALS</h1>
                <nav>
                    <ul className="top-head__breadcrumbs">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/man">MAN</Link></li>
                        <li className="top-head__title">NEW ARRIVALS</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default ProductHeader;