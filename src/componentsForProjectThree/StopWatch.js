import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import LapList from "./LapList";
import { Box, Typography, Paper } from '@mui/material';

function Stopwatch() {
  const [time, setTime] = useState(
    () => Number(localStorage.getItem('stopwatchTime')) || 0
  );
  const [isRunning, setIsRunning] = useState(
    () => localStorage.getItem('stopwatchIsRunning') === 'true' || false
  );
  const [laps, setLaps] = useState(
    () => JSON.parse(localStorage.getItem('stopwatchLaps')) || []
  );

  // Timer effect
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 10); // increase 10ms
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Save state to local storage
  useEffect(() => {
    localStorage.setItem('stopwatchTime', time);
  }, [time]);

  useEffect(() => {
    localStorage.setItem('stopwatchIsRunning', isRunning);
  }, [isRunning]);

  useEffect(() => {
    localStorage.setItem('stopwatchLaps', JSON.stringify(laps));
  }, [laps]);

  // Format function
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  };

  // Handlers
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };
  const handleLap = () => {
    setLaps([...laps, time]);
  };

  return (
    <Box 
      sx={{ 
        textAlign: "center", 
        marginTop: "50px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          padding: '2rem', 
          borderRadius: '16px', 
          backgroundColor: '#f5f5f5', 
          width: '90%', 
          maxWidth: '500px' 
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
        >
          ⏱ Stopwatch
        </Typography>

        <Typography 
          variant="h2" 
          component="h2" 
          sx={{ 
            fontFamily: 'monospace', 
            fontWeight: 'bold', 
            marginBottom: '1rem' 
          }}
        >
          {formatTime(time)}
        </Typography>
        
        <Controls
          isRunning={isRunning}
          onStart={handleStart}
          onStop={handleStop}
          onLap={handleLap}
          onReset={handleReset}
        />
        
        <LapList laps={laps} formatTime={formatTime} />
      </Paper>
    </Box>
  );
}

export default Stopwatch;