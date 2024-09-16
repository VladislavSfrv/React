import { Link } from "react-router-dom";

function Home() {
    return ( 
        <div>
            <Link to="/about">О нас</Link>
            {/**ссылка выдают ошибку 
             * Cannot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null.
            TypeError: Cannot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' 
            as it is null. */}
            <h1>Домашняя страница</h1>
            <p>Это наша домашняя страница.</p>
            <p>Используем React!</p>
        </div>
     );
}

export default Home;