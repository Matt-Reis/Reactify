import React, { useState } from 'react';
import './App.css';
import './Button.css';
import TaskInput from './TaskInput';
import Button from './Button';
import TimeDropDown from './TimeDropDown';
import CurrentDateTime from './CurrentDateTime';
import TimerButton from './TimerButton';
import ProdRepoButton from './ProdRepoButton';

function App() {
  const [showTimer, setShowTimer] = useState(false); // State to toggle the timer
  const [showTask, setShowTask] = useState(false); // State to toggle the task input
  const [showProdReport, setShowProdReport] = useState(false); // State to toggle the report
  const [tasks, setTasks] = useState([]); // State to store the list of tasks

  const handleTimerButtonClick = () => {
    setShowTimer(!showTimer); // Toggle the timer visibility
  };

  const handleAddTaskButtonClick = () => {
    setShowTask(!showTask); // Toggle the task input visibility
  };

  const handleProdReportButtonClick = () => {
    setShowProdReport(!showProdReport); // Toggle the productivity report visibility
  };

  const addTask = (task) => {
    setTasks([...tasks, task]); // Add the new task to the list of tasks
  };

  return (
    <div className='App'>
      <h1>Reactify</h1>
      <h2>
        <Button label="Timer" onClick={handleTimerButtonClick} /> {/* Button with event handler attached */}
        <Button label="Productivity Report" onClick={handleProdReportButtonClick} /> {/* Button with event handler attached */}
      </h2>
      <h3>
        <TaskInput onAddTask={addTask} /> {/* Conditionally render TaskInput */}
        <div className="current-date-time"><CurrentDateTime /></div>
      </h3>
      <h4>
        <TimeDropDown />
      </h4>
      {showTimer && ( // Conditionally render the Timer component
        <div>
          <h5>Timer</h5>
          <TimerButton />
        </div>
      )}
      <div>
        <h5 style={{ textDecoration: 'underline' }}>Today's Schedule</h5>
        <ul style={{color: 'white'}}>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        {showProdReport && ( // Conditionally render the Productivity Report component
          <div>
            <ProdRepoButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

