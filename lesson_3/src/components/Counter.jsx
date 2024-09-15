import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

function Counter() {
    const [value, setValue] = useState(0);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleUpValue = () => {
        setValue(value + 1);
    }

    const handleDownValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    }

    useEffect(()=>{
        if (value > 0) {
            setIsButtonDisabled(false);
        }else{
            setIsButtonDisabled(true);
        }
    }, [value])

    return (
        <div>
            <h2>{value}</h2>
            <Button variant="contained" color="success" onClick={handleUpValue}>
                Плюс один
            </Button>
            <Button variant="outlined" color="error" onClick={handleDownValue} disabled = {isButtonDisabled}>
                Минус один
            </Button>
        </div>
    );
}

export default Counter;