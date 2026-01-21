import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate(); 
    const handleHomeClick = () => {
    navigate("/");
  };
    const handleLoginClick = () => {
    navigate("/login"); 
  }
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#0b0e1a', px: 4 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }}  onClick={handleHomeClick}>
          <Box component="span" sx={{ color: '#FFA726', fontWeight: 600}}>LUXE</Box> Premium Fashion
        </Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Typography variant="body1" sx={{ cursor: 'pointer' }} onClick={handleHomeClick}>
            Home
          </Typography>
          <Typography variant="body1" sx={{ cursor: 'pointer' }} onClick={() => navigate("/collections")}>
           Collections
          </Typography>
          <Typography variant="body1" sx={{ cursor: 'pointer' }} onClick={() => navigate("/about")}>
           About
          </Typography>
          <Typography variant="body1">Contact</Typography>
        </Box>
        <Box sx={{ ml: 3 }}>
          <Button variant="contained" spacing={2} sx={{ backgroundColor: '#f97316' }} onClick={handleLoginClick}>Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
  
}
export default Navbar;
