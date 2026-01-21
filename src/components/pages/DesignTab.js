import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
} from '@mui/material';

const DesignTab = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Design Templates
      </Typography>
      <Grid item xs={2} sm={4} md={4} container spacing={2} mb={2}>
        {[
          { label: 'Dark', color: '#5a5656ff' },
          { label: 'Simple', color: '#eef1f5ff' },
          { label: 'Red', color: '#ec3838ff' },
        ].map((template) => (
          <Grid item xs={6} key={template.label}>
            <Card
              variant="outlined"
              sx={{
                borderColor: selectedTemplate === template.label ? 'primary.main' : 'grey.300',
              }}
            >
              <CardActionArea onClick={() => setSelectedTemplate(template.label)}>
                <CardMedia
                  sx={{
                    height: 60,
                    backgroundColor: template.color,
                  }}
                />
                <Box textAlign="center" p={1}>
                  <Typography>{template.label}</Typography>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        T-Shirt Style
      </Typography>
      <Grid container spacing={2} mb={3}>
        {['Regular Fit', 'Slim Fit', 'Oversized'].map((style) => (
          <Grid item xs={12} sm={4} key={style}>
            <Button
              fullWidth
              variant={selectedStyle === style ? 'contained' : 'outlined'}
              onClick={() => setSelectedStyle(style)}
              sx={{ textTransform: 'none' }}
            >
              {style}
            </Button>
          </Grid>
        ))}
      </Grid>

      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Size
      </Typography>
      <Grid container spacing={2}>
        {['S', 'M', 'L', 'XL'].map((size) => (
          <Grid item xs={4} sm={2} key={size}>
            <Button
              fullWidth
              variant={selectedSize === size ? 'contained' : 'outlined'}
              onClick={() => setSelectedSize(size)}
              sx={{ textTransform: 'none' }}
            >
              {size}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DesignTab;
