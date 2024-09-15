import {TextField, Button, Card, CardContent, Typography} from '@mui/material';
import { useState } from 'react';

function Text() {
    const [value, setValue] = useState('');
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        setInputValue(value);
        setValue('');
    }

    return (
        <div>
            <TextField fullWidth label="Введите текст" value = {value} onChange = {handleChange}/>
            <Button variant="contained" onClick={handleClick}>Отобразить текст</Button>
            {inputValue && <Card>
                <CardContent className='card'>
                    <Typography variant='h5'>{inputValue}</Typography>
                </CardContent>
                </Card>}
        </div>
     );
}

export default Text;