import { useState } from "react";

function TextInput() {
    const [text, setText] = useState("");
    
    return ( 
        <>
            <input type="text" onChange={(e) => (setText(e.target.value))} value={text} />
        </>
     );
}

export default TextInput;