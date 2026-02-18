import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box, Typography, TextField, Button, Checkbox, FormControlLabel,
  Stack, InputAdornment, IconButton, Divider
} from '@mui/material';
import {
  Person, Email, LocationOn, Lock, Visibility, VisibilityOff, Facebook, Google
} from '@mui/icons-material';
import Navbar from '../landingpage/Navbar';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://13.235.135.226/auth/register', {
        name,
        email,
        city,
        password
      });

      alert(response.data.message || 'Registration successful');
      navigate('/'); 
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed';
      alert(message);
    }
  };

  return (
    <>
     <Box position="sticky" top={0} zIndex={10} >
        <Navbar />
      </Box>
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'linear-gradient(to right, #0f111a, #1c1b24)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        background: 'linear-gradient(to bottom right, #0f172a, #1f2937)',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 420,
          bgcolor: '#111827',
          p: 4,
          borderRadius: 2,
          boxShadow: 4,
          color: '#fff'
        }}
      >
        <Stack alignItems="center" spacing={1}>
          <Box sx={{ width: 48, height: 48, bgcolor: '#ff8c00', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h5">👑</Typography>
          </Box>
          <Typography variant="h6" sx={{ color: '#ffb300', fontWeight: 600 }}>LUXE</Typography>
          <Typography variant="caption" sx={{ color: '#ccc' }}>Premium Fashion</Typography>
        </Stack>

        <Typography variant="h6" fontWeight="bold" textAlign="center" mt={2} mb={1} fontSize="23px">Join LUXE</Typography>
        <Typography variant="body2" textAlign="center" color="#aaa" mb={3}>Create your account and discover premium fashion</Typography>

        <Stack spacing={2}>
          <CustomInput
            placeholder="Enter your full name"
            icon={<Person sx={{ color: '#ff8c00' }} />}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            placeholder="Enter your email address"
            icon={<Email sx={{ color: '#ff8c00' }} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            placeholder="Enter your city"
            icon={<LocationOn sx={{ color: '#ff8c00' }} />}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            fullWidth
            placeholder="Create a strong password"
            type={showPassword ? 'text' : 'password'}
            variant="filled"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: '#ff8c00' }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff sx={{ color: '#fff' }} /> : <Visibility sx={{ color: '#fff' }} />}
                  </IconButton>
                </InputAdornment>
              ),
              disableUnderline: true
            }}
            sx={{
              bgcolor: '#1f2937',
              input: { color: '#fff' }
            }}
          />

          <FormControlLabel
            control={<Checkbox sx={{ color: '#ff8c00' }} />}
            label={
              <Typography variant="body2" color="#aaa">
                I agree to the{' '}
                <span style={{ color: '#facc15' }}>Terms of Service</span> and{' '}
                <span style={{ color: '#facc15' }}>Privacy Policy</span>
              </Typography>
            }
          />

          <FormControlLabel
            control={<Checkbox sx={{ color: '#ff8c00' }} />}
            label={
              <Typography variant="body2" color="#aaa">
                Subscribe to our newsletter for exclusive offers and style updates
                <br />
                <span style={{ color: '#666' }}>
                  Get 20% off your first order when you subscribe!
                </span>
              </Typography>
            }
          />

          <Button
            fullWidth
            onClick={handleSignup}
            sx={{
              mt: 1,
              py: 1.2,
              bgcolor: '#ff8c00',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '15px',
              textTransform: 'none',
              '&:hover': { bgcolor: '#e07c00' }
            }}
          >
            Create Account
          </Button>
        </Stack>

        <Divider sx={{ my: 3, bgcolor: '#333' }} />
        <Stack direction="row" spacing={2}>
          <Button fullWidth variant="outlined" startIcon={<Google />} sx={{ color: '#fff', borderColor: '#555', textTransform: 'none', '&:hover': { borderColor: '#999' } }}>
            Google
          </Button>
          <Button fullWidth variant="outlined" startIcon={<Facebook />} sx={{ color: '#fff', borderColor: '#555', textTransform: 'none', '&:hover': { borderColor: '#999' } }}>
            Facebook
          </Button>
        </Stack>

        <Typography textAlign="center" mt={3} variant="body2" color="#aaa">
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#facc15', fontWeight: 'bold', textDecoration: 'none' }}>
            Sign in here
          </Link>
        </Typography>
      </Box>
    </Box>
    </>
  );
};

const CustomInput = ({ placeholder, icon, value, onChange }) => (
  <TextField
    fullWidth
    placeholder={placeholder}
    variant="filled"
    value={value}
    onChange={onChange}
    InputProps={{
      startAdornment: <InputAdornment position="start">{icon}</InputAdornment>,
      disableUnderline: true
    }}
    sx={{
      bgcolor: '#1f2937',
      input: { color: '#fff' }
    }}
  />
);

export default SignupPage;
