import React, { useState, useEffect } from 'react';
import './App.css';

const TimerButton = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24)); // Calculate the number of days
    const hours = Math.floor((time % (3600 * 24)) / 3600); // Calculate the number of hours remaining after subtracting days
    const minutes = Math.floor((time % 3600) / 60); // Calculate the number of minutes remaining after subtracting hours
    const seconds = time % 60; // Calculate the number of seconds remaining after subtracting minutes
    return `${days < 10 ? '0' : ''}${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Formatted the time into the my desired format (DD:HH:MM:SS) using string concatenation and conditional operators
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <div style={{textAlign: 'center', color: 'white'}}>{formatTime(seconds)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TimerButton;


