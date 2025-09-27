import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  IconButton, // Added for icon-based buttons
} from "@mui/material";
import {
  AddCircleOutline,
  CheckCircleOutline,
  Edit,
  Delete,
  Save,
  Cancel,
} from "@mui/icons-material";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedInProgress = JSON.parse(localStorage.getItem("inProgress")) || [];
      const savedCompleted = JSON.parse(localStorage.getItem("completed")) || [];
      setInProgress(savedInProgress);
      setCompleted(savedCompleted);
    } catch (error) {
      console.error("Failed to load state from local storage:", error);
    }
  }, []);

  // Save to localStorage whenever tasks update
  useEffect(() => {
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [inProgress, completed]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setInProgress([...inProgress, task]);
      setTask("");
    }
  };

  const handleComplete = (index) => {
    const newInProgress = [...inProgress];
    const completedTask = newInProgress.splice(index, 1)[0];
    setInProgress(newInProgress);
    setCompleted([...completed, completedTask]);
  };

  const handleEditStart = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleEditSave = (index) => {
    const updatedTasks = [...inProgress];
    updatedTasks[index] = editValue;
    setInProgress(updatedTasks);
    setEditIndex(null);
    setEditValue("");
  };

  const handleDelete = (list, index) => {
    if (list === "inProgress") {
      const newInProgress = [...inProgress];
      newInProgress.splice(index, 1);
      setInProgress(newInProgress);
    } else {
      const newCompleted = [...completed];
      newCompleted.splice(index, 1);
      setCompleted(newCompleted);
    }
  };

  // Helper function to render a single task item
  const renderTask = (task, index, listId) => {
    const isEditing = editIndex === index && listId === "inProgress";
    const isCompleted = listId === "completed";

    return (
      <Box
        key={index}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "white",
          borderRadius: 2,
          p: 1.5,
          mb: 1,
          boxShadow: 2,
          transition: "transform 0.2s",
          "&:hover": { transform: "translateY(-2px)" },
        }}
      >
        {isEditing ? (
          <Stack direction="row" spacing={1} sx={{ flexGrow: 1 }}>
            <TextField
              size="small"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              fullWidth
            />
            <IconButton
              color="primary"
              size="small"
              onClick={() => handleEditSave(index)}
            >
              <Save />
            </IconButton>
            <IconButton
              color="error"
              size="small"
              onClick={() => setEditIndex(null)}
            >
              <Cancel />
            </IconButton>
          </Stack>
        ) : (
          <>
            <Typography sx={{ textDecoration: isCompleted ? "line-through" : "none" }}>
              {task}
            </Typography>
            <Stack direction="row" spacing={1}>
              {!isCompleted && (
                <>
                  <IconButton
                    color="secondary"
                    size="small"
                    onClick={() => handleEditStart(index, task)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="success"
                    size="small"
                    onClick={() => handleComplete(index)}
                  >
                    <CheckCircleOutline />
                  </IconButton>
                </>
              )}
              <IconButton
                color="error"
                size="small"
                onClick={() => handleDelete(listId, index)}
              >
                <Delete />
              </IconButton>
            </Stack>
          </>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ p: 4, minHeight: "100vh", bgcolor: '#f0f2f5' }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 4,
          color: "#1976d2",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        To-Do App
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Add Task Card */}
        <Card
          sx={{
            flex: 1,
            minWidth: 300,
            maxWidth: 400,
            bgcolor: "#f5f5f5",
            boxShadow: 6,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}>
              Add a New Task
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField
                label="Enter task"
                variant="outlined"
                fullWidth
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAdd();
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
                startIcon={<AddCircleOutline />}
              >
                Add
              </Button>
            </Stack>
          </CardContent>
        </Card>

        {/* In Progress Card */}
        <Card
          sx={{
            flex: 1,
            minWidth: 300,
            maxWidth: 400,
            bgcolor: "#fff3e0",
            boxShadow: 6,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textAlign: "center", color: '#ff9800' }}>
              In Progress
            </Typography>
            {inProgress.length === 0 ? (
              <Typography color="text.secondary" textAlign="center">No tasks yet...</Typography>
            ) : (
              inProgress.map((t, i) => renderTask(t, i, "inProgress"))
            )}
          </CardContent>
        </Card>

        {/* Completed Card */}
        <Card
          sx={{
            flex: 1,
            minWidth: 300,
            maxWidth: 400,
            bgcolor: "#e8f5e9",
            boxShadow: 6,
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", textAlign: "center", color: '#4caf50' }}>
              Completed
            </Typography>
            {completed.length === 0 ? (
              <Typography color="text.secondary" textAlign="center">No completed tasks...</Typography>
            ) : (
              completed.map((t, i) => renderTask(t, i, "completed"))
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ToDo;