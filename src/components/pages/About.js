import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Navbar from '../landingpage/Navbar';

export default function About() {
  return (
    <>
    <Navbar />
    <Box sx={{ pt: 10, px: 10, bgcolor: '#f9fafb', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Us
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={6} md={4} sx={{p: 4}}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              height: '100%',
              borderRadius: 3,
              textAlign: 'center',
              bgcolor: '#ffffff',
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Mission
            </Typography>
            <Typography>
              We aim to provide the best customizable T-shirt experience for every creative mind.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={6} md={4} sx={{p: 4}}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              height: '100%',
              borderRadius: 3,
              textAlign: 'center',
              bgcolor: '#ffffff',
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Vision
            </Typography>
            <Typography>
              Empowering individuals to wear their creativity with pride and simplicity.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
