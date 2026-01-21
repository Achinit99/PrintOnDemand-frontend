import React from 'react';
import Navbar from '../landingpage/Navbar';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box sx={{ mt: 2 }}>{children}</Box>
    </>
  );
};

export default MainLayout;
