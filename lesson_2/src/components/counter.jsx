import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    function upCount(){
        setCount(count + 1);
    } 

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick={upCount}>Click + 1</button>
        </div>
     );
}

export default Counter;