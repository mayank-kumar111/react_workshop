import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

function Footer() {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#1a237e', // Deep blue color
                color: 'white',
                py: 3, // Padding on top and bottom
                mt: 'auto', // Push to the bottom of the page
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body1" sx={{ mb: 1 }}>
                    © 2024 Mayank Kumar. All rights reserved.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <IconButton
                        color="inherit"
                        href="https://github.com/your-github-profile" // Replace with your GitHub URL
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn URL
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedIn />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://twitter.com/your-twitter-handle" // Replace with your Twitter URL
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter />
                    </IconButton>
                </Box>
                <Typography variant="body2" sx={{ mt: 2, fontSize: '0.8rem', opacity: 0.7 }}>
                    Designed and built with React and Material-UI
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;