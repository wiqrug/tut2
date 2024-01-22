import React, { useState } from "react";

const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear existing interval
    }
    const id = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1); // Increment elapsed time every second
    }, 1000);
    // @ts-ignore
    setIntervalId(id);
  };

  const handleReset = () => {
    setElapsedTime(0);
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  return (
    <div>
      <div>Elapsed Time: {elapsedTime} seconds</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Timer;
