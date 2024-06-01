import React, {useState} from 'react';
import TimeDropDown from './TimeDropDown';
import './App.css';

const TaskInput = ({onAddTask}) => {
    
    const [value, setValue] = useState(''); /*initialize value as a empty string */
    const [tasks, setTasks] = useState([]); /*initialize tasks as a empty array */

    const handleTask = (event) => {
        setValue(event.target.value); /*event.target refers to the element that trigger the input event, which is the input field itself, event.target.value accesses the entered value in the input field */
    }; /*In other words, this function sets the value to whatever is in the input field, rather than an empty string */

    const addTask = () => {
        if (value.trim()) { //trim removes white space from the task(value) entry
            onAddTask(value);  // Call the parent callback with the new task
            setValue(''); //after the task is added, this line will reset the input field as an empty string
        }
    };

    return (
        <div>
            <input  /*Text box and placeholder, the box accepts input from the user to add a task. The entered string is stored as {value}*/
                type="text"  
                value={value}
                onChange={handleTask}
                placeholder='Enter Task Here'
                className='textbox' 
            />
            <button onClick={addTask} className='add-button'>Add Task</button> {/*Adds the task after clicking the add task button*/}
            </div>
    );
};


export default TaskInput;