import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import { GitHub, Web } from "@mui/icons-material";

const projects = [
  {
    title: "ToDo App",
    description: "A simple and intuitive ToDo application to manage your daily tasks. Features include adding, deleting, and marking tasks as complete.",
    githubLink: "https://github.com/your-github-profile/todo-app",
    // Use the internal application path here
    appPath: "/todo", 
  },
  // {
  //   title: "Movie App",
  //   description: "A movie search application that fetches data from an external API. Users can search for movies and view details like ratings and summaries.",
  //   githubLink: "https://github.com/your-github-profile/movie-app",
  //   appPath: "/movie",
  // },
  {
    title: "Weather App",
    description: "A real-time weather application that provides current weather conditions based on location. Utilizes a weather API for accurate data.",
    githubLink: "https://github.com/your-github-profile/weather-app",
    appPath: "/weather",
  },
  {
    title: "Stopwatch App",
    description: "A modern stopwatch with lap functionality, designed with a clean UI. It also includes local storage to save the last session.",
    githubLink: "https://github.com/your-github-profile/stopwatch-app",
    appPath: "/stopwatch",
  },
];

const Projects = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Box sx={{ py: 8, bgcolor: '#f0f2f5', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" align="center" fontWeight="bold" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          A collection of my work showcasing my skills in React and web development.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 2 }}>
                  <Button
                    size="small"
                    color="primary"
                    startIcon={<GitHub />}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                  {/* Changed the Live Demo button for internal navigation */}
                  <Button
                    size="small"
                    color="secondary"
                    startIcon={<Web />}
                    // Use onClick to call the navigate function
                    onClick={() => navigate(project.appPath)}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;