import React, { useState } from 'react';
import './App.css';
import TaskInput from './TaskInput';
import Button from './Button';
import TimeDropDown from './TimeDropDown';
import CurrentDateTime from './CurrentDateTime';
import TimerButton from './TimerButton';
import ProdRepoButton from './ProdRepoButton';
import logo from './assets/reactify-logo-white.png';


function App() {
  const [showTimer, setShowTimer] = useState(false); // State to toggle the timer
  const [showProdReport, setShowProdReport] = useState(false); // State to toggle the report
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [selectedStartTime, setSelectedStartTime] = useState(''); //Store the selected start time for task input
  const [selectedEndTime, setSelectedEndTime] = useState(''); //Store the selected end time for task input

  const handleTimerButtonClick = () => {
    setShowTimer(!showTimer); // Toggle the timer visibility
  };

  const handleProdReportButtonClick = () => {
    setShowProdReport(!showProdReport); // Toggle the productivity report visibility
  };

  const addTask = (task) => {
    const newTask = {
        task: task,
        selectedStartTime: selectedStartTime,
        selectedEndTime: selectedEndTime
    };
    setTasks([...tasks, newTask]);
  };
  
  return (
      <div className='App'>
        
        <section id ="up"></section> {/*These are the colored blobs and the related physics for the animated gradient background*/}
        <section id ="down"></section>
        <section id ="left"></section>
        <section id ="right"></section>

        <div className='AppTop'> {/*I wanted to keep the top of the application container seperate from the todays schedule area */}

          <img src={logo} alt="Reactify Logo" style={{width: '145px', height: '75px', marginTop: '15px'}}/> {/* Logo */}

        
        <h2>
          <Button label="Timer" onClick={handleTimerButtonClick} /> {/* Button with event handler attached */}
          <Button label="Productivity Report" onClick={handleProdReportButtonClick} /> {/* Button with event handler attached */}
        </h2>

        <h3>
          <TaskInput onAddTask={addTask} /> {/* Conditionally render TaskInput */}
          <div className="current-date-time"><CurrentDateTime /></div>
        </h3>

        <h4>
        <TimeDropDown
          selectedStartTime={selectedStartTime}
          setSelectedStartTime={setSelectedStartTime}
          selectedEndTime={selectedEndTime}
          setSelectedEndTime={setSelectedEndTime}/> {/*This component contains the start time and end time headers, as well as the select a time drop down menues, I raised state from the TimeDropDown component due to performance issues*/}
        </h4>
        </div>


        
        {showTimer && ( // Conditionally render the Timer component
          <div className='Timer'>
            <h5 style={{ textDecoration: 'underline' }}>Timer</h5> {/*Underlined header*/}
            <TimerButton />
          </div>
        )}

        <div className='Schedule'>
          <h5 style={{ textDecoration: 'underline' }}>Today's Schedule</h5> {/*Underlined header*/}
          <ul style={{color: 'white'}}> {/*create a unordered list with an inline decoration for white text*/}
            {tasks.map((task, index) => ( /*tasks.map will iterate through the tasks array, this is more efficient than the traditional for loop*/
              <li key={index}>{task.task} {task.selectedStartTime } - {task.selectedEndTime}</li>
            ))}
          </ul>
          {showProdReport && ( // Conditionally render the Productivity Report component
            <div className='ProdReport'>
              <ProdRepoButton />
            </div>
          )}  
        </div>
    </div>  
  );
}

export default App;
