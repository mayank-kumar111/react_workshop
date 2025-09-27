import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Home as HomeIcon, Info, Work } from '@mui/icons-material';

function Header() {
  const navigate = useNavigate();

  // Define navigation items
  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'About Me', path: '/about', icon: <Info /> },
    { name: 'Projects', path: '/projects', icon: <Work /> },
  ];

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(90deg, #1e88e5 30%, #42a5f5 90%)', boxShadow: 6 }}>
      <Toolbar>
        {/* Title/Branding Section */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          MK Portfolio
          <Typography component="span" variant="subtitle2" sx={{ ml: 1, opacity: 0.8 }}>
            | React Developer
          </Typography>
        </Typography>

        {/* Navigation Links (Desktop) */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {navItems.map((item) => (
            <Button
              key={item.name}
              color="inherit"
              onClick={() => navigate(item.path)}
              startIcon={item.icon}
              sx={{ 
                mx: 1, 
                fontWeight: 'medium',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                }
              }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        {/* Mobile Navigation (Placeholder for Menu Icon - functional for large screens) */}
        {/* For a full responsive solution, you'd use a Drawer component here. */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
          >
             {/* You would use a MenuIcon here and implement a Drawer for mobile navigation */}
             <Work /> 
          </IconButton>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
}

export default Header;