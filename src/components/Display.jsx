import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const { timeLeft, phase } = useSelector((state) => state);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="display">
      <h1 id="timer-label">{phase}</h1>
      <h2 id="time-left">{formatTime(timeLeft)}</h2>
    </div>
  );
};

export default Display;