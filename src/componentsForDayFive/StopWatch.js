import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Paper,
  List,
  ListItem,
  Divider,
} from "@mui/material";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // in ms
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const lap = () => {
    if (running) {
      setLaps((prev) => [...prev, time]);
    }
  };

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis = Math.floor((ms % 1000) / 10);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(2, "0")}`;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #ece9e6, #ffffff)",
        p: 4,
      }}
    >
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          ⏱ Stopwatch
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "monospace",
            fontWeight: "bold",
            mb: 3,
            color: "#1976d2",
            fontSize: { xs: "2.5rem", sm: "3.5rem" },
          }}
        >
          {formatTime(time)}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 3, flexWrap: "wrap" }}
        >
          {!running ? (
            <Button
              variant="contained"
              color="success"
              onClick={start}
              sx={{ minWidth: 100 }}
            >
              Start
            </Button>
          ) : (
            <Button
              variant="contained"
              color="error"
              onClick={stop}
              sx={{ minWidth: 100 }}
            >
              Stop
            </Button>
          )}

          <Button
            variant="outlined"
            color="secondary"
            onClick={lap}
            disabled={!running}
            sx={{ minWidth: 100 }}
          >
            Lap
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={reset}
            sx={{ minWidth: 100 }}
          >
            Reset
          </Button>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
          Laps
        </Typography>
        {laps.length === 0 ? (
          <Typography color="text.secondary">No laps yet...</Typography>
        ) : (
          <List
            sx={{ maxHeight: 200, overflow: "auto", width: "100%", px: 2 }}
          >
            {laps.map((lapTime, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  bgcolor: "rgba(0,0,0,0.05)",
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                <Typography fontWeight="bold">{`Lap ${index + 1}`}</Typography>
                <Typography>{formatTime(lapTime)}</Typography>
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
};

export default Stopwatch;