import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

export default function Stats() {
  const data = [
    { title: '50K+', subtitle: 'Happy Customers' },
    { title: '1000+', subtitle: 'Premium Items' },
    { title: '4.9', subtitle: 'Customer Rating' },
  ];

  return (
    <Box sx={{
    bgcolor: '#0b0e1a',
    color: 'white',
    py: 5,
    px: { xs: 2, md: 8 },
    mt: { xs: -20, md: -42 }, 
    zIndex: 10,
    position: 'relative',
  }}>
      <Grid container spacing={4} justifyContent="center">
        {data.map((item, index) => (
          <Grid item key={index}>
            <Typography variant="h5" fontWeight="bold">{item.title}</Typography>
            <Typography variant="body2">{item.subtitle}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
