import { Button, TextField } from "@mui/material";
import { useState } from "react";

function TemperatureConverter() {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [deggrey, setDeggrey] = useState(true);

    const convertTemperature = (e) => {
        e.preventDefault();
        if(deggrey) {
            setFahrenheit((celsius * 9 / 5 + 32).toFixed(2));
        }else{
            setCelsius(((fahrenheit - 32) * 5 / 9).toFixed(2));
        }
    }

    return (
        <div className="temperature-converter">
            <TextField
                label="Введите температуры по Цельсию"
                style={{ width: "50%" }}
                value={celsius}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    if (!isNaN(inputValue) || inputValue === '') {
                        setCelsius(inputValue)
                    }
                    setDeggrey(true);
                }} 
                />
            <TextField
                label="Введите температуру по Фаренгейту"
                style={{ width: "50%" }}
                value={fahrenheit}
                onChange={(e) => {
                    const inputValue = e.target.value;
                    if (!isNaN(inputValue) || inputValue === '') {
                        setFahrenheit(inputValue);
                    }
                    setDeggrey(false);
                }}
            />
            <h1>Перевести {deggrey ? "цельсии в фаренгейты" : "фаренгейты в цельсии"}</h1>
            <Button variant = "contained" onClick={convertTemperature}>Нажми</Button>
        </div>
    );
}

export default TemperatureConverter;