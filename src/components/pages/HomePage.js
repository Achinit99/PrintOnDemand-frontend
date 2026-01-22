import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  Paper,
  Tab,
  Tabs,
  Container,
  alpha,
} from '@mui/material';
import { Share, Download, ArrowForward } from '@mui/icons-material';
import Navbar from '../landingpage/Navbar';
import TextTab from './TextTab';
import LogoTab from './LogoTab';
import DesignTab from './DesignTab';
import { ModelViewer } from '../../ModelViewer';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/collections');
    }
  }, [navigate]);

  const handleNext = () => {
    navigate('/order');
  };

  const [tab, setTab] = React.useState(0);
  const [textColor, setTextColor] = React.useState('#ffffff');
  const [textValue, setTextValue] = React.useState('YOUR TEXT');

  // Preview colors 
  const previewColors = [
    '#ef4444', // Red
    '#ffffff', // White
    '#3b82f6', // Blue
    '#22c55e', // Green
  ];

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const colorOptions = [
    '#000000', '#ffffff', '#ef4444', '#f59e0b', '#3b82f6', '#10b981',
  ];

  const renderColorCircles = (onClickHandler, selectedColor) => {
    return colorOptions.map((color) => (
      <Box
        key={color}
        onClick={() => onClickHandler(color)}
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          bgcolor: color,
          border: selectedColor === color ? '3px solid #fbbf24' : '2px solid white',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
          mx: 1,
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          '&:hover': {
            transform: 'scale(1.18)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
          },
        }}
      />
    ));
  };

  return (
    <>
      <Navbar />

      <Box
        sx={{
          bgcolor: '#0f172a',
          color: 'white',
          minHeight: '100vh',
          pt: { xs: 8, md: 10 },
          pb: 12,
        }}
      >
        {/* Hero Section */}
        <Container maxWidth="lg">
          <Box textAlign="center" mb={10}>
            <Typography
              variant="h2"
              fontWeight="300"
              sx={{
                fontSize: { xs: '2.8rem', md: '4.5rem' },
                background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                letterSpacing: '-1px',
              }}
            >
              Design Your Style
            </Typography>

            <Typography
              variant="h6"
              color="grey.300"
              maxWidth="800px"
              mx="auto"
              mb={5}
              lineHeight={1.6}
            >
              Create unique, high-quality custom T-shirts with real-time 3D preview.  
              No design skills needed – just your imagination.
            </Typography>

            <Button
              variant="contained"
              size="small"
              endIcon={<ArrowForward />}
              sx={{
                px: 6,
                py: 1.8,
                fontSize: '1.2rem',
                bgcolor: '#fbbf24',
                color: 'black',
                fontWeight: 'bold',
                borderRadius: 50,
                boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
                '&:hover': {
                  bgcolor: '#f59e0b',
                  boxShadow: '0 15px 40px rgba(251, 191, 36, 0.4)',
                  transform: 'translateY(-3px)',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={handleNext}
            >
              Start Designing Now
            </Button>
          </Box>

          {/* 4 Preview Boxes */}
          <Grid container spacing={3} justifyContent="center">
            {previewColors.map((color, index) => (
              <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                <Paper
                  elevation={8}
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    bgcolor: '#1e293b',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: '0 20px 40px rgba(251, 191, 36, 0.2)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: 380,
                      position: 'relative',
                      bgcolor: '#0f172a',
                    }}
                  >
                    <ModelViewer
                      shirtColor={color}
                      textValue={textValue}
                      textColor={textColor}
                    />
                  </Box>

                  <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" color="#fbbf24">
                      {`Color Variant ${index + 1}`}
                    </Typography>
                    <Typography variant="body2" color="grey.400" mt={0.5}>
                      {color.toUpperCase()}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Customize Section */}
          <Paper
            elevation={12}
            sx={{
              mt: 10,
              maxWidth: 800,
              mx: 'auto',
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              bgcolor: alpha('#ffffff', 0.06),
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(251, 191, 36, 0.15)',
            }}
          >
            <Typography variant="h4" fontWeight="bold" align="center" gutterBottom sx={{ color: '#fbbf24' }}>
              Customize Now
            </Typography>

            <Typography variant="body1" align="center" color="grey.300" mb={5}>
              Change colors, add your text, upload logo – see it live on the 3D model
            </Typography>

            <Tabs
              value={tab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{
                mb: 5,
                '& .MuiTab-root': {
                  color: 'grey.400',
                  fontWeight: 'bold',
                  '&.Mui-selected': { color: '#fbbf24' },
                },
                '& .MuiTabs-indicator': { backgroundColor: '#fbbf24' },
              }}
            >
              <Tab label="Colors" />
              <Tab label="Text" />
              <Tab label="Logo" />
              <Tab label="Design" />
            </Tabs>

            {tab === 0 && (
              <Box sx={{ px: 2 }}>
                <Typography variant="subtitle1" fontWeight="medium" gutterBottom color="grey.200">
                  Text Color (applies to all previews)
                </Typography>
                <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
                  {renderColorCircles(setTextColor, textColor)}
                </Box>
              </Box>
            )}

            {tab === 1 && <TextTab setTextValue={setTextValue} setTextColor={setTextColor} />}
            {tab === 2 && <LogoTab />}
            {tab === 3 && <DesignTab />}
          </Paper>

          {/* Final CTA */}
          <Box textAlign="center" mt={10}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                px: 8,
                py: 2,
                fontSize: '1.3rem',
                bgcolor: '#fbbf24',
                color: 'black',
                fontWeight: 'bold',
                borderRadius: 50,
                boxShadow: '0 12px 30px rgba(251, 191, 36, 0.3)',
                '&:hover': {
                  bgcolor: '#f59e0b',
                  boxShadow: '0 20px 50px rgba(251, 191, 36, 0.4)',
                  transform: 'translateY(-4px)',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={handleNext}
            >
              Ready? Let's Create Your Shirt
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}