import React, {useState} from 'react';
import './App.css';

const TaskInput = ({onAddTask}) => {
    
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [lastTask, setLastTask] = useState('');
    
    const handleTask = (event) => {
        setValue(event.target.value);
    };

    const addTask = () => {
        if (value.trim()) {
            onAddTask(value);  // Call the parent callback with the new task
            setValue('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={handleTask}
                placeholder='Enter Task Here'
                className='textbox' 
            />
            <button onClick={addTask} className='add-button'>Add Task</button>
            </div>
    );
};


export default TaskInput;