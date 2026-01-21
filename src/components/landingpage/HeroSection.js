import React from 'react';
import { Box, Typography, Button, Chip, Grid, Paper } from '@mui/material';

export default function HeroSection() {
  return (
    <Box sx={{
    minHeight: '100vh',
    px: { xs: 3, md: 8 },
    py: { xs: 4, md: 13 },
    color: 'white',
    background: `radial-gradient(circle at 85% 40%, rgba(255, 166, 0, 0.2), transparent 40%),
                 linear-gradient(to bottom, #0a0d1a, #0b0e1a)`,
  }}
>
      <Grid container spacing={6} alignItems="center" sx={{py: 3}}>
        <Grid item xs={12} md={6}>
          <Chip label=" New Collection 2024" sx={{ mb: 2, background: '#2d1d0b', color: '#f5b24d' }} />
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Elevate Your <Box component="span" sx={{ color: '#f97316' }}>Style</Box>
          </Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            Discover premium fashion that defines elegance. From timeless classics to contemporary trends, find pieces that speak to your unique style.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button size="large" variant="contained" sx={{ backgroundColor: '#f97316' }}>Shop Collection</Button>
            <Button size="large" variant="outlined" sx={{ color: 'white', borderColor: 'gray' }}>View Lookbook</Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative' }}>
            <Paper elevation={3} sx={{ height: 350, borderRadius: 4, backgroundColor: '#f5f5f5' }}>
              <Box sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                backgroundColor: '#f97316',
                color: 'white',
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontWeight: 'bold',
                fontSize: '0.75rem'
              }}>
                Trending This Week
              </Box>
              <Box sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                backgroundColor: '#1c2a3c',
                color: 'white',
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontWeight: 'bold',
                fontSize: '0.75rem'
              }}>
                30% OFF <br /> First Order
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

