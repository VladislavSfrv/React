import "../Header/header.css"
import {Link} from "react-router-dom"

function Header({title}) {
    return (  
        <header className="header">
            {title.map((item, index) => (
                <>
                    <Link className = "header-text" to={item.link} key={index}>{item.title}</Link>
                </>
            ))}
        </header>
    );
}

export default Header;