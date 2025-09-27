import React from "react";
import { Container, Typography, Box, Paper, Grid, Avatar, Chip, Divider } from "@mui/material";
import { Favorite, Code, Movie, Watch, Psychology, Language, LaptopMac, EmojiObjects } from "@mui/icons-material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const About = () => {
  const projects = [
    { name: "ToDo App", icon: <Code /> },
    // { name: "Movie App", icon: <Movie /> },
    { name: "Weather App", icon: <Favorite /> },
    { name: "Stopwatch App", icon: <Watch /> },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Paper
        elevation={10}
        sx={{
          padding: 6,
          borderRadius: 6,
          background: "linear-gradient(145deg, #e0f7fa 0%, #b3e5fc 100%)",
          transform: 'rotate(-2deg)',
          transition: 'transform 0.5s ease-in-out',
          '&:hover': {
            transform: 'rotate(0deg) scale(1.02)',
          },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 150,
                height: 150,
                mx: 'auto',
                mb: 2,
                bgcolor: '#42a5f5',
                border: '6px solid #1e88e5',
                boxShadow: '0 0 15px #1e88e5',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { boxShadow: '0 0 0 0 #1e88e5' },
                  '70%': { boxShadow: '0 0 0 10px rgba(30, 136, 229, 0)' },
                  '100%': { boxShadow: '0 0 0 0 rgba(30, 136, 229, 0)' },
                }
              }}
            >
              <Typography variant="h2" fontWeight="bold">MK</Typography>
            </Avatar>
            <Typography variant="h4" component="h1" fontWeight="bold" color="#1a237e" sx={{ mt: 2 }}>
              Mayank Kumar
            </Typography>
            <Typography variant="subtitle1" color="#424242">
              B.Tech in Information Technology
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary">
              "Building things for the web, one component at a time."
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box>
              <Typography variant="h5" component="h2" gutterBottom fontWeight="bold" color="#0d47a1">
                About My Journey
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.6, color: '#37474f' }}>
                Hello! I'm a passionate beginner React developer, eager to build dynamic and interactive web applications. As a B.Tech student, I'm continuously expanding my skills and bringing new ideas to life.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" component="h3" fontWeight="bold" color="#0d47a1" sx={{ mb: 2 }}>
                  Projects I've Built:
                </Typography>
                <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
                  {projects.map((project, index) => (
                    <Grid item key={index}>
                      <Chip
                        icon={project.icon}
                        label={project.name}
                        variant="outlined"
                        color="primary"
                        sx={{
                          fontWeight: 'bold',
                          transition: 'transform 0.2s',
                          '&:hover': {
                            transform: 'scale(1.1)',
                            bgcolor: '#e3f2fd',
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              
              <Divider sx={{ my: 4 }} />
              
              <Box>
                <Typography variant="h6" component="h3" fontWeight="bold" color="#0d47a1" sx={{ mb: 2 }}>
                  Skills & Interests
                </Typography>
                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="primary"><Language /></TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="body1" fontWeight="bold">Languages</Typography>
                      <Typography variant="body2" color="text.secondary">JavaScript, C++, HTML, CSS</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="secondary"><LaptopMac /></TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="body1" fontWeight="bold">Frameworks & Libraries</Typography>
                      <Typography variant="body2" color="text.secondary">React, Material-UI, Bootstrap</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="error"><Psychology /></TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="body1" fontWeight="bold">Interests</Typography>
                      <Typography variant="body2" color="text.secondary">UI/UX Design, Problem Solving, Data Structures & Algorithms</Typography>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="success"><EmojiObjects /></TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="body1" fontWeight="bold">Future Goals</Typography>
                      <Typography variant="body2" color="text.secondary">Building scalable applications, contributing to open source.</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;