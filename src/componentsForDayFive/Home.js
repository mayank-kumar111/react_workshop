import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Stack, Paper, Chip } from "@mui/material";
import { GitHub, LinkedIn, Work, Code, Info, Web } from "@mui/icons-material";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        textAlign: "center",
        py: 8,
        position: "relative",
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle, #0d47a1 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: { xs: "24px", md: "48px" },
          borderRadius: "20px",
          maxWidth: "800px",
          zIndex: 1,
          backdropFilter: 'blur(5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.02)',
          }
        }}
      >
        <Typography variant="h2" component="h1" fontWeight="bold" color="#1a237e" gutterBottom>
          Hello, I'm Mayank Kumar
        </Typography>

        <Typography variant="h5" component="h2" color="text.secondary" sx={{ mb: 4, fontStyle: 'italic' }}>
          A passionate React Developer who loves building beautiful and functional web applications.
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
          I am currently pursuing my B.Tech in Information Technology at SKIT Jaipur. My journey into web development has led me to explore modern technologies like **React** and **Material-UI**. This portfolio showcases some of my projects, reflecting my dedication to learning and my passion for clean code and user-friendly design.
        </Typography>

        <Box sx={{ my: 4 }}>
          <Typography variant="h6" component="h3" fontWeight="bold" color="#0d47a1" sx={{ mb: 2 }}>
            Skills & Expertise
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
            <Chip label="React" icon={<Web />} color="primary" variant="outlined" />
            <Chip label="JavaScript (ES6+)" icon={<Code />} color="primary" variant="outlined" />
            <Chip label="Material-UI" icon={<Web />} color="primary" variant="outlined" />
            <Chip label="HTML5 & CSS3" icon={<Code />} color="primary" variant="outlined" />
            <Chip label="UI/UX Design" icon={<Web />} color="primary" variant="outlined" />
          </Stack>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/about")}
            startIcon={<Info />}
            size="large"
          >
            About Me
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/projects")}
            startIcon={<Work />}
            size="large"
          >
            My Projects
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => window.open('https://github.com/mayank-kumar111', '_blank')}
            startIcon={<GitHub />}
            size="large"
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="info"
            onClick={() => window.open('https://www.linkedin.com/in/mayank-kumar111', '_blank')}
            startIcon={<LinkedIn />}
            size="large"
          >
            LinkedIn
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Home;