import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Divider,
  Stack,
} from '@mui/material';
import { alpha } from '@mui/material/styles'; 
import Navbar from '../landingpage/Navbar';
import { Favorite, Palette, People, Star } from '@mui/icons-material';

export default function About() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          bgcolor: '#0f172a',
          color: 'white',
          minHeight: '100vh',
          pt: { xs: 10, md: 12 },
          pb: 12,
          px: { xs: 3, md: 6, lg: 10 },
        }}
      >
        {/* Hero Section */}
        <Box textAlign="center" mb={10}>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              fontSize: { xs: '2.2rem', md: '3.2rem' }, 
              background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              letterSpacing: '-0.5px',
            }}
          >
            About LUXE
          </Typography>

          <Typography
            variant="h6"
            color="grey.300"
            maxWidth="800px"
            mx="auto"
            lineHeight={1.6}
            fontSize={{ xs: '1.05rem', md: '1.15rem' }}
          >
            LUXE is where your creativity meets wearable art.  
            We turn your ideas into stunning custom T-shirts — simple, fast, and uniquely yours.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,
              px: 6,
              py: 1.4,
              bgcolor: '#fbbf24',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 50,
              boxShadow: '0 8px 25px rgba(251, 191, 36, 0.3)',
              '&:hover': {
                bgcolor: '#f59e0b',
                boxShadow: '0 12px 35px rgba(251, 191, 36, 0.4)',
                transform: 'translateY(-3px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Start Designing Now
          </Button>
        </Box>

        {/* Mission & Vision Cards */}
        <Grid container spacing={5} justifyContent="center" mb={12}>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: 4,
                bgcolor: alpha('#1e293b', 0.9),
                height: '100%',
                textAlign: 'center',
                border: '1px solid rgba(251, 191, 36, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 40px rgba(251, 191, 36, 0.2)',
                },
              }}
            >
              <Favorite sx={{ fontSize: 50, color: '#fbbf24', mb: 3 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" color="grey.300" lineHeight={1.8} fontSize="1.05rem">
                To make custom T-shirt creation simple, fast, and beautiful for everyone.  
                We want every person to be able to wear their own unique style with pride.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              elevation={6}
              sx={{
                p: { xs: 4, md: 5 },
                borderRadius: 4,
                bgcolor: alpha('#1e293b', 0.9),
                height: '100%',
                textAlign: 'center',
                border: '1px solid rgba(251, 191, 36, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 40px rgba(251, 191, 36, 0.2)',
                },
              }}
            >
              <Palette sx={{ fontSize: 50, color: '#fbbf24', mb: 3 }} />
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" color="grey.300" lineHeight={1.8} fontSize="1.05rem">
                A world where everyone walks out wearing their own original designs.  
                Where creativity has no limits and self-expression is effortless.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={6}
          sx={{ color: '#fbbf24', fontSize: { xs: '1.8rem', md: '2.2rem' } }}
        >
          What We Stand For
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[
            {
              icon: <Star fontSize="large" />,
              title: 'Quality First',
              desc: 'Premium fabrics and top-tier printing — every shirt feels and looks exceptional.',
            },
            {
              icon: <People fontSize="large" />,
              title: 'Community Driven',
              desc: 'Your feedback shapes us. We build with you, not just for you.',
            },
            {
              icon: <Palette fontSize="large" />,
              title: 'Limitless Creativity',
              desc: 'No boundaries. Any idea, any style — we help bring it to life.',
            },
          ].map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  textAlign: 'center',
                  bgcolor: alpha('#1e293b', 0.9),
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 40px rgba(251, 191, 36, 0.2)',
                    border: '1px solid #fbbf24',
                  },
                }}
              >
                <Box sx={{ color: '#fbbf24', fontSize: 48, mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom fontSize="1.25rem">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="grey.400" fontSize="1.05rem">
                  {item.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Closing CTA */}
        <Box textAlign="center" mt={12}>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#fbbf24', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
            Join Our Creative Family
          </Typography>
          <Typography variant="body1" color="grey.300" maxWidth="700px" mx="auto" mb={5} fontSize="1.1rem">
            Ready to turn your ideas into wearable art?  
            Join LUXE and show the world what you're made of.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 7,
              py: 1.6,
              fontSize: '1.2rem',
              bgcolor: '#fbbf24',
              color: 'black',
              fontWeight: 'bold',
              borderRadius: 50,
              boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
              '&:hover': {
                bgcolor: '#f59e0b',
                boxShadow: '0 15px 40px rgba(251, 191, 36, 0.4)',
                transform: 'translateY(-4px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Start Designing Today
          </Button>
        </Box>
      </Box>
    </>
  );
}