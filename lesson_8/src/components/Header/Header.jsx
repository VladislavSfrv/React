import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const [checked, setChecked] = useState();

    const handleToggle = () => {
        setChecked(!checked);
        return checked
    }

    return (
        <header className="header center">

            <div className="header__left">
                <NavLink to="/"><img src="../../../src/images/top__menu__logo.svg" alt="логотип" /></NavLink>
                <NavLink to="/"><img src="../../../src/images/top__menu__search.svg" alt="поиск" /></NavLink>
            </div>

            <nav className="header__right">
                <label><img src="../../../src/images/top__menu__menu.svg" alt="меню" /></label>
                <NavLink to="/reg" className="header__link-site"><img src="../../../src/images/top__menu__profile.svg"
                    alt="личный профиль" /></NavLink>
                <NavLink to="/cart" className="header__link-site"><img src="../../../src/images/top__menu__basket.svg" alt="корзина" /></NavLink>
            </nav>

            <input className="header__checkbox" id="header__check" type="checkbox" defaultChecked />

            <div className="mobile-menu">
                <h3 className="mobile-menu__heading">MENU</h3>

                <div className="mobile-menu__box">

                    <div className="mobile-menu__item">
                        <NavLink to="/" className="mobile-menu__title">MAN</NavLink>
                        <ul className="mobile-menu__list">
                            <li><NavLink className="mobile-menu__link" to="/">Accessories</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">Bags</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">Denim</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">T-Shirts</NavLink></li>
                        </ul>
                    </div>

                    <div className="mobile-menu__item">
                        <NavLink to="/" className="mobile-menu__title">WOMAN</NavLink>
                        <ul className="mobile-menu__list">
                            <li><NavLink className="mobile-menu__link" to="/">Accessories</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">Jackets & Coats</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">Polos</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">T-Shirts</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">Shirts</NavLink></li>
                        </ul>
                    </div>

                    <div className="mobile-menu__item">
                        <NavLink to="/" className="mobile-menu__title">KIDS</NavLink>
                        <ul className="mobile-menu__list">
                            <li><NavLink className="mobile-menu__link" to="/">Accessories</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">Jackets & Coats</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">Polos</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">T-Shirts</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">Shirts</NavLink></li>
                            <li><NavLink className="mobile-menu__link" to="/">Bags</NavLink></li>
                        </ul>
                    </div>

                </div>

            </div>

        </header>
    );
}

export default Header;