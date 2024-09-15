import { TextField, Button, IconButton, List, ListItem, ListItemText } from "@mui/material";
import Delete from '@mui/icons-material/Delete';
import { useState } from "react";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput === "") {
            console.log("Введите текст задачи!");
        }else {
            const newTask = [...tasks, taskInput];
            setTasks(newTask);
            setTaskInput("");
        }
    }

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return (
        <div>
            <TextField
                label="Новая задача"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <Button 
                variant="contained" 
                color="primary"
                onClick={addTask}>Добавить задачу</Button>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {tasks.map((value, index) => (
                    <ListItem
                        key={crypto.randomUUID()}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="delete"
                            onClick={() => deleteTask(index)}>
                                <Delete />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={value} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default TodoList;