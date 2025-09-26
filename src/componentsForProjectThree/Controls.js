import React from 'react';
import { Button, Stack } from '@mui/material';

function Controls({ isRunning, onStart, onStop, onLap, onReset }) {
    return (
        <Stack direction="row" spacing={2} sx={{ margin: '20px' }}>
            {isRunning ? (
                <Button
                    variant="contained"
                    color="error"
                    onClick={onStop}
                >
                    Stop
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color="success"
                    onClick={onStart}
                >
                    Start
                </Button>
            )}
            <Button
                variant="outlined"
                onClick={onLap}
                disabled={!isRunning}
            >
                Lap
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                onClick={onReset}
            >
                Reset
            </Button>
        </Stack>
    );
}

export default Controls;