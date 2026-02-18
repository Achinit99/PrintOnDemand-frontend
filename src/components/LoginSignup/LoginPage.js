import React, { useEffect, useState } from 'react';
import Navbar from '../landingpage/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Box, Button, Checkbox, Divider, FormControlLabel,
  IconButton, InputAdornment, TextField, Typography, Stack, Paper
} from '@mui/material';
import {
  Email, Lock, Visibility, VisibilityOff,
  Facebook, Google
} from '@mui/icons-material';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [action,setAction] = useState("Signup Page");
  const navigate = useNavigate();
  const handleLogin = async () => {
  try {
    const response = await axios.post('http://13.235.135.226/auth/login', {
      email,
      password,
    });

    if (response.status === 200 && response.data.token) {
      alert(response.data.message); 
   
      navigate('/collections');
    } else {
      alert(response.data.message || 'Login failed. Invalid credentials.');
    }
  } catch (error) {
    const message =
      error.response?.data?.message || 'Login failed. Please check your credentials.';
    alert(message);
  }
};

  return (
    <>
    <Box position="sticky" top={0} zIndex={10} >
        <Navbar />
    </Box>
        <Paper
          elevation={6}
          sx={{
            borderRadius: 2,
          }}
        >
        </Paper>
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'linear-gradient(to bottom, #0f172a, #1f2937)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom right, #0f172a, #1f2937)',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
          backgroundColor: '#111827',
          color: '#fff',
        }}
      >
        <Stack alignItems="center" spacing={1} mb={3}>
          <Box sx={{ bgcolor: '#f59e0b', px: 1.5, py: 0.5, borderRadius: 1 }}>
            <Typography fontWeight="bold" color="black">👑</Typography>
          </Box>
          <Typography fontWeight="bold" fontSize={18} color="#f59e0b">LUXE</Typography>
          <Typography fontSize={12} color="gray">Premium Fashion</Typography>
        </Stack>

        <Typography variant="h6" fontWeight="bold" textAlign="center" fontSize="25px">
          Welcome Back
        </Typography>
        <Typography variant="body2" textAlign="center" color="gray" mb={3}>
          Sign in to your account to continue your style journey
        </Typography>

        <Typography variant="body2" fontWeight="medium" mb={0.5}>
          <Email sx={{ fontSize: 18, mr: 1, color: '#fbbf24' }} />
          Email Address
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter your email address"
          variant="filled"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            disableUnderline: true,
            sx: { bgcolor: '#1f2937', color: '#fff' },
          }}
          sx={{ mb: 2 }}
        />

        <Typography variant="body2" fontWeight="medium" mb={0.5}>
          <Lock sx={{ fontSize: 18, mr: 1, color: '#fbbf24' }} />
          Password
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter your password"
          variant="filled"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            disableUnderline: true,
            sx: { bgcolor: '#1f2937', color: '#fff' },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ color: '#fff' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mb: 1 }}
        />

        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <FormControlLabel
            control={<Checkbox size="small" sx={{ color: 'gray' }} />}
            label={<Typography variant="body2" color="gray">Remember me</Typography>}
          />
          <Typography variant="body2" color="#fbbf24" sx={{ cursor: 'pointer' }}>
            Forgot password?
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={handleLogin}
          fullWidth
          sx={{
            bgcolor: '#ff8c00',
            color: 'white',
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '15px',
            mb: 4,
            '&:hover': { bgcolor: '#fb923c' },
            
          }}
        >
          Sign In →
        </Button>

        <Divider sx={{ borderColor: '#374151', mb: 2 }}>OR CONTINUE WITH</Divider>
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <Button
            fullWidth
            startIcon={<Google />}
            variant="outlined"
            sx={{
              borderColor: '#4b5563',
              color: '#fff',
              textTransform: 'none',
              '&:hover': { borderColor: '#6b7280' },
            }}
          >
            Google
          </Button>
          <Button
            fullWidth
            startIcon={<Facebook />}
            variant="outlined"
            sx={{
              borderColor: '#4b5563',
              color: '#fff',
              textTransform: 'none',
              '&:hover': { borderColor: '#6b7280' },
            }}
          >
            Facebook
          </Button>
        </Stack>

        <Typography variant="body2" color="gray" textAlign="center">
          Don’t have an account?{' '}
          <Link to="/signup" style={{ color: '#facc15', fontWeight: 'bold', textDecoration: 'none' }}>
          Create one now
          </Link>
        </Typography>
      </Paper>
    </Box>
    </>
  );
};

export default LoginPage;
