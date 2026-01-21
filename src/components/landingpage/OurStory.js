import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GroupIcon from '@mui/icons-material/Group';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const features = [
  {
    icon: <StarIcon sx={{ color: 'white' }} margin="normal" />,
    title: 'Premium Quality',
    description: 'Every piece is crafted with the finest materials and attention to detail',
  },
  {
    icon: <GroupIcon sx={{ color: 'white' }} />,
    title: 'Expert Curation',
    description: 'Our fashion experts handpick each item to ensure exceptional style',
  },
  {
    icon: <DesignServicesIcon sx={{ color: 'white' }} />,
    title: 'Timeless Design',
    description: 'Classic pieces that transcend trends and remain stylish for years',
  },
];

const OurStory = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#0b0e1a',
        color: 'white',
        px: { xs: 2, md: 8 },
        py: { xs: 6, md: 12 },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          mb: { xs: 6, md: 0 },
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #ffb347, #ffcc33)',
            color: 'black',
            fontWeight: 600,
            textTransform: 'none',
            mb: 2,
            borderRadius: '20px',
            px: 2,
            py: 0.5,
          }}
        >
          Our Story
        </Button>

        <Typography variant="h4" fontWeight={700} gutterBottom>
          Crafting <Box component="span" sx={{ color: '#f97316' }}>Elegance</Box> Since 2010
        </Typography>

        <Typography color="gray" sx={{ maxWidth: 600, mb: 8}}>
          Born from a passion for exceptional fashion, LUXE has been at the forefront of premium clothing for over a decade. We believe that true style is timeless, and every piece in our collection reflects our commitment to quality, craftsmanship, and elegance.
          <br /><br />
          From our atelier to your wardrobe, each garment tells a story of meticulous attention to detail and unwavering dedication to excellence.
        </Typography>

        <Box sx={{ mb: 4 }}>
          {features.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'flex-start', 
                mb: 2,
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#7c3aed',
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                {item.icon}
              </Box>
              <Box>
                <Typography fontWeight={600}>{item.title}</Typography>
                <Typography color="gray" fontSize="14px">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#f97316',
            color: 'white',
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: 2,
            px: 3,
            py: 1,
            '&:hover': {
              backgroundColor: '#ea580c',
            },
          }}
        >
          Learn More About Us →
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 2,
          maxWidth: 500,
        }}
      >
        {[1, 2, 3, 4].map((i) => (
          <Paper
            key={i}
            elevation={3}
            sx={{
              height: 160,
              borderRadius: 3,
              backgroundImage: `url(https://via.placeholder.com/300x160?text=Image+${i})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OurStory;

