import React, { useState } from 'react';
import './App.css'; // Ensure this file contains appropriate styles

const generateTimeOptions = () => {
    const times = [];
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 2; j++) {
            const hour = i === 0 ? 12 : i > 12 ? i - 12 : i;
            const minutes = j === 0 ? '00' : '30';
            const period = i < 12 ? 'AM' : 'PM';
            times.push(`${hour}:${minutes}${period}`);
        }
    }
    return times;
};

const TimeDropDown = ({ selectedStartTime, setSelectedStartTime, selectedEndTime, setSelectedEndTime }) => {

    const handleStartTimeChange = (event) => {
        setSelectedStartTime(event.target.value); // Call the callback function with the new start time
      };
      
      const handleEndTimeChange = (event) => {
        setSelectedEndTime(event.target.value); // Call the callback function with the new end time
      };
      

    const timeOptions = generateTimeOptions();

    return (
        <div className='select-wrapper'>
            <label htmlFor='start-time'>Start Time: </label>
            <select id='start-time' value={selectedStartTime} onChange={handleStartTimeChange}>
                <option value="">Select a time:</option>
                {timeOptions.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>
            
            <label htmlFor='end-time'> End Time: </label>
            <select id='end-time' value={selectedEndTime} onChange={handleEndTimeChange}>
                <option value="">Select a time:</option>
                {timeOptions.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>
            <p>Selected Time: {selectedStartTime} - {selectedEndTime}</p>
        </div>
    )
};

export default TimeDropDown;
