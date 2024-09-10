import { useState } from "react";

function Show() {
    const [block, setBlock] = useState(false);

    const blockShow = () => {
        setBlock(!block);
    }

    return ( 
        <div>
            <button onClick={blockShow}>Показать или скрыть</button>
            <p style={{display: block ? 'block' : 'none'}}>Lorem ipsum dolor sit amet.</p>
        </div>
     );
}

export default Show;