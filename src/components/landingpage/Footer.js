import React from 'react';
import {
  Box, Typography, Grid, TextField, Button,
  IconButton, Stack, Link
} from '@mui/material';
import {
  Email, LocalPhone, LocationOn,
  Facebook, Instagram, Twitter, YouTube
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: '#0b0f1a', 
        color: 'white', 
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 8 },
      }}
    >
      {/* Newsletter / VIP Club Section - remains centered */}
      <Box 
        textAlign="center" 
        px={{ xs: 3, sm: 4, md: 6 }}
        maxWidth="1200px"
        mx="auto"
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Join Our <span style={{ color: '#fbbf24' }}>VIP Club</span>
        </Typography>

        <Typography 
          variant="body1" 
          color="grey.400" 
          maxWidth="640px" 
          mx="auto" 
          lineHeight={1.6}
        >
          Be the first to know about new collections, exclusive sales, and styling tips.<br />
          Plus, get <strong>20% off</strong> your first order when you subscribe!
        </Typography>

        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={{ xs: 2, sm: 2.5 }} 
          mt={4}
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            variant="outlined"
            placeholder="Enter your email address"
            size="medium"
            fullWidth
            sx={{ 
              maxWidth: { sm: 380, md: 420 },
              '& .MuiOutlinedInput-root': {
                bgcolor: '#1f2937',
                color: 'white',
                borderRadius: 1.5,
                '& fieldset': { borderColor: '#374151' },
                '&:hover fieldset': { borderColor: '#4b5563' },
                '&.Mui-focused fieldset': { borderColor: '#fbbf24' },
              },
              '& .MuiInputBase-input::placeholder': { color: '#9ca3af', opacity: 1 },
            }}
          />
          <Button
            variant="contained"
            disableElevation
            sx={{ 
              bgcolor: '#fbbf24', 
              color: 'black', 
              px: 5, 
              py: 1.5,
              fontWeight: 700,
              borderRadius: 1.5,
              minWidth: { xs: '140px', sm: '160px' }
            }}
          >
            Subscribe
          </Button>
        </Stack>

        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 1.5, md: 4 }} 
          justifyContent="center" 
          mt={3}
        >
          <Typography variant="body2" color="grey.500">Exclusive previews</Typography>
          <Typography variant="body2" color="grey.500">Special discounts</Typography>
          <Typography variant="body2" color="grey.500">Style inspiration</Typography>
        </Stack>

        <Typography variant="caption" color="grey.600" mt={3} display="block">
          No spam, unsubscribe at any time. By subscribing, you agree to our{' '}
          <Link href="#" color="#fbbf24" underline="hover">Privacy Policy</Link>.
        </Typography>
      </Box>

      {/* ─────────────── Centered Links + Contact Section ─────────────── */}
      <Box 
        maxWidth="1200px"
        mx="auto"
        px={{ xs: 3, sm: 4, md: 6, lg: 8 }}
        mt={{ xs: 8, md: 10 }}
      >
        <Grid container spacing={{ xs: 5, sm: 4, md: 6 }} justifyContent="center">
          
          {/* Contact Info - takes more space on large screens but centered group */}
          <Grid item xs={12} sm={6} md={3} lg={2.5}>
            <Stack 
              spacing={1.5} 
              alignItems={{ xs: 'center', sm: 'flex-start' }}
              textAlign={{ xs: 'center', sm: 'left' }}
            >
              <Typography variant="body2" fontWeight={500}>
                <Email sx={{ mr: 1, fontSize: 18, verticalAlign: 'middle' }} />
                hello@luxefashion.com
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                <LocalPhone sx={{ mr: 1, fontSize: 18, verticalAlign: 'middle' }} />
                +1 (555) 123-4567
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                <LocationOn sx={{ mr: 1, fontSize: 18, verticalAlign: 'middle' }} />
                New York, NY 10001
              </Typography>
            </Stack>
          </Grid>

          {/* Shop */}
          <Grid item xs={6} sm={3} md={2} lg={1.875}>
            <Typography variant="subtitle2" fontWeight="bold" mb={2} align="center">
              Shop
            </Typography>
            <Stack spacing={1.2} alignItems="center">
              <FooterLink>New Arrivals</FooterLink>
              <FooterLink>Women's</FooterLink>
              <FooterLink>Men's</FooterLink>
              <FooterLink>Accessories</FooterLink>
              <FooterLink>Sale</FooterLink>
            </Stack>
          </Grid>

          {/* Company */}
          <Grid item xs={6} sm={3} md={2} lg={1.875}>
            <Typography variant="subtitle2" fontWeight="bold" mb={2} align="center">
              Company
            </Typography>
            <Stack spacing={1.2} alignItems="center">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Press</FooterLink>
              <FooterLink>Sustainability</FooterLink>
            </Stack>
          </Grid>

          {/* Support */}
          <Grid item xs={6} sm={3} md={2} lg={1.875}>
            <Typography variant="subtitle2" fontWeight="bold" mb={2} align="center">
              Support
            </Typography>
            <Stack spacing={1.2} alignItems="center">
              <FooterLink>Contact Us</FooterLink>
              <FooterLink>Size Guide</FooterLink>
              <FooterLink>Shipping & Returns</FooterLink>
              <FooterLink>FAQ</FooterLink>
            </Stack>
          </Grid>

          {/* Legal */}
          <Grid item xs={6} sm={3} md={2} lg={1.875}>
            <Typography variant="subtitle2" fontWeight="bold" mb={2} align="center">
              Legal
            </Typography>
            <Stack spacing={1.2} alignItems="center">
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
              <FooterLink>Cookie Policy</FooterLink>
            </Stack>
          </Grid>

        </Grid>
      </Box>

      {/* Bottom copyright + social */}
      <Box 
        mt={{ xs: 8, md: 10 }}
        pt={4}
        borderTop="1px solid #1f2937"
        textAlign="center"
      >
        <Typography variant="body2" color="grey.500">
          © {new Date().getFullYear()} LUXE Premium Fashion. All rights reserved.
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center" mt={1.5}>
          <IconButton size="small"><Facebook fontSize="small" sx={{ color: 'grey.400' }} /></IconButton>
          <IconButton size="small"><Instagram fontSize="small" sx={{ color: 'grey.400' }} /></IconButton>
          <IconButton size="small"><Twitter fontSize="small" sx={{ color: 'grey.400' }} /></IconButton>
          <IconButton size="small"><YouTube fontSize="small" sx={{ color: 'grey.400' }} /></IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

const FooterLink = ({ children }) => (
  <Typography 
    variant="body2" 
    color="grey.400" 
    sx={{ 
      cursor: 'pointer',
      transition: 'color 0.2s',
      '&:hover': { color: '#fbbf24' }
    }}
  >
    {children}
  </Typography>
);

export default Footer;