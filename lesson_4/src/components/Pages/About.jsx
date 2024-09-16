import { Link } from "react-router-dom";
import Box from "../Box/Box";
import "../Box/Box.css";

function About() {
    return ( 
        <div>
            <Link to="/">Главная</Link>
            <h2>О нас</h2>
            <Box comp = {<>
                    <h3>Команда</h3>
                    <ul>
                        <li>Иванов</li>
                        <li>Алексеев</li>
                        <li>Петров</li>
                    </ul>
                </>} />
        </div>
     );
}

export default About;