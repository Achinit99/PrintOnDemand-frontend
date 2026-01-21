import React, { useState } from 'react';
import Navbar from '../landingpage/Navbar';
import {
  Stack,
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
  Chip,
  Divider
} from '@mui/material';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import StraightenIcon from '@mui/icons-material/Straighten';
import TagIcon from '@mui/icons-material/Tag';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1f2937',
  padding: theme.spacing(2),
  maxWidth: 700,
  margin: 'auto',
  borderRadius: theme.spacing(2),
  color: 'white',
}));

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    backgroundColor: '#374151',
    color: 'white',
    borderRadius: 6,
    height: 40,
    padding: '0 15px',
  },
  '& .MuiInputLabel-root': {
    color: '#9CA3AF',
    fontSize: '1.2rem',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#4B5563',
  },
});

const CustomRadio = styled(FormControlLabel)(({ theme }) => ({
  backgroundColor: '#374151',
  margin: theme.spacing(1),
  borderRadius: 6,
  padding: theme.spacing(1.5, 2),
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid #4B5563',
  color: 'white',
}));

const OrderForm = () => {
  const [material, setMaterial] = useState('100% Cotton');

  return (
    <>
    <Box position="sticky" top={0} zIndex={10} >
        <Navbar />
          </Box>
    
    <Box sx={{ background: '#111827', minHeight: '100vh', py: 12 }}>
      <Typography variant="h4" align="center" fontWeight="bold" color="white">
        Custom T-Shirt Order
      </Typography>
      <Typography variant="body1" align="center" color="#9CA3AF" mb={4}>
        Design your perfect t-shirt with premium materials and craftsmanship
      </Typography>

      <StyledPaper elevation={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Order Details
        </Typography>
        <Typography variant="body2" color="#9CA3AF" mb={2}>
          Fill in your details to place your custom t-shirt order
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold" mt={2} mb={1} py={0.5} >
          Personal Information
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StyledTextField 
            sx={{height: 20,}}
              fullWidth
              label="Full Name"
              InputProps={{ startAdornment: <PersonIcon sx={{ mr: 1, }} /> }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              label="Phone Number"
              InputProps={{ startAdornment: <PhoneAndroidIcon sx={{ mr: 1 }} /> }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="City"
              select
              InputProps={{ startAdornment: <LocationOnIcon sx={{ mr: 1 }} /> }}
            >
              <MenuItem value="Colombo">Colombo</MenuItem>
              <MenuItem value="Kandy">Kandy</MenuItem>
              <MenuItem value="Galle">Galle</MenuItem>
              <MenuItem value="Colombo">Kurunegala</MenuItem>
              <MenuItem value="Kandy">Matara</MenuItem>
              <MenuItem value="Galle">Anuradhapura</MenuItem>
            </StyledTextField>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: '#4B5563' }} />

        <Typography variant="subtitle1" fontWeight="bold" mb={1} >
          Product Specifications
        </Typography>

        <Grid container spacing={2} py={0.5}>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              label="Type"
              select
              InputProps={{ startAdornment: <CheckroomIcon sx={{ mr: 1 }} /> }}
            >
              <MenuItem value="Round Neck">Round Neck</MenuItem>
              <MenuItem value="V Neck">V Neck</MenuItem>
              <MenuItem value="Polo">Polo</MenuItem>
            </StyledTextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              label="Size"
              select
              InputProps={{ startAdornment: <StraightenIcon sx={{ mr: 1 }} /> }}
            >
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
            </StyledTextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              fullWidth
              label="Quantity"
              type="number"
              defaultValue={1}
              InputProps={{ startAdornment: <TagIcon sx={{ mr: 1 }} /> }}
            />
          </Grid>
        </Grid>

        <Typography variant="subtitle1" fontWeight="bold" mt={3} mb={1}>
          Material
        </Typography>
        <RadioGroup
          row
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        >
          <CustomRadio
            control={<Radio sx={{ color: 'white' }} />}
            label={<>
              Cotton <Chip label="Popular" size="small" color="warning" sx={{ ml: 1 }} />
            </>}
          />
          <CustomRadio
            control={<Radio sx={{ color: 'white' }} />}
            label={<>
              Polyester Blend 
            </>}
          />
          <CustomRadio
            control={<Radio sx={{ color: 'white' }} />}
            label={<>
              Cotton-Polyester Mix
            </>}
          />
          <CustomRadio
            control={<Radio sx={{ color: 'white' }} />}
            label={<>
              Organic Cotton  <Chip label="Premium" size="small" color="error" sx={{ ml: 1 }} />
            </>}
          />
        </RadioGroup>

        <Box mt={4}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              background: 'linear-gradient(to right, #f97316, #ef4444)',
              color: 'white',
              py: 1.5,
              fontWeight: 'bold',
              borderRadius: 2,
              '&:hover': {
                background: 'linear-gradient(to right, #fb923c, #f87171)',
              },
            }}
          >
            Place Order
          </Button>
        </Box>
      </StyledPaper>
    </Box>
    </>
  );
};

export default OrderForm;
