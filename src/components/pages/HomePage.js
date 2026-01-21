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
  IconButton,
} from "@mui/material";
import { Share, Download } from "@mui/icons-material";
import Navbar from '../landingpage/Navbar';
import TextTab from "./TextTab";
import LogoTab from './LogoTab';
import DesignTab from "./DesignTab";
import { ModelViewer } from "../../ModelViewer";

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/collections');
    }
  }, []);

  const handleNext = () => {
    navigate('/order');
  };

  const [tab, setTab] = React.useState(0);

  // ඔයාට ඕනේ colors මේ තැනින් වෙනස් කරගන්න
  const [shirtColor, setShirtColor] = React.useState("#9c3a3aff");
  const [textColor, setTextColor] = React.useState("#ebe8e8ff");
  const [textValue, setTextValue] = React.useState("My Text");

  const handleTabChange = (e, newValue) => {
    setTab(newValue);
  };

  const colorOptions = ["#000", "#fff", "#666", "#e53935", "#1976d2", "#2e7d32"];

  const renderColorCircles = (onClickHandler) => {
    return colorOptions.map((color, index) => (
      <Box
        key={index}
        onClick={() => onClickHandler(color)}
        sx={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          bgcolor: color,
          border: "3px solid white",
          boxShadow: 2,
          mx: 1.2,
          cursor: "pointer",
          transition: "all 0.2s",
          '&:hover': { transform: 'scale(1.15)' }
        }}
      />
    ));
  };

  return (
    <>
      <Navbar />

      <Box sx={{ p: { xs: 3, md: 6, lg: 10 }, bgcolor: '#f8fafc', minHeight: "100vh" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          Create Your Custom Design
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 5, color: 'text.secondary' }}>
          Design beautiful custom t-shirts with our intuitive editor
        </Typography>

        {/* හැමෝටම එකට පෙන්නන previews 4 */}
        <Grid container spacing={3} justifyContent="center">
          {/* Box 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <PreviewBox title="Front View" color={shirtColor} textValue={textValue} textColor={textColor} />
          </Grid>

          {/* Box 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <PreviewBox title="Back View" color="#1e293b" textValue={textValue} textColor={textColor} />
          </Grid>

          {/* Box 3 */}
          <Grid item xs={12} sm={6} md={3}>
            <PreviewBox title="Left Side" color={shirtColor} textValue={textValue} textColor={textColor} />
          </Grid>

          {/* Box 4 */}
          <Grid item xs={12} sm={6} md={3}>
            <PreviewBox title="Right Side" color={shirtColor} textValue={textValue} textColor={textColor} />
          </Grid>
        </Grid>

        {/* Customize Area */}
        <Box sx={{ mt: 8 }}>
          <Paper
            elevation={6}
            sx={{
              maxWidth: 600,
              mx: "auto",
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              backgroundColor: 'white',
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
              Customize Your Design
            </Typography>

            <Tabs
              value={tab}
              onChange={handleTabChange}
              variant="fullWidth"
              sx={{ mb: 4 }}
            >
              <Tab label="Colors" />
              <Tab label="Text" />
              <Tab label="Logo" />
              <Tab label="Design" />
            </Tabs>

            {tab === 0 && (
              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                  Shirt Color
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={2} mb={4}>
                  {renderColorCircles(setShirtColor)}
                </Box>

                <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                  Text Color
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={2}>
                  {renderColorCircles(setTextColor)}
                </Box>
              </Box>
            )}

            {tab === 1 && <TextTab setTextValue={setTextValue} setTextColor={setTextColor} />}
            {tab === 2 && <LogoTab />}
            {tab === 3 && <DesignTab />}
          </Paper>
        </Box>

        {/* Next Button */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 8,
              py: 1.8,
              fontSize: '1.1rem',
              backgroundColor: '#ff6600',
              '&:hover': { backgroundColor: '#e65c00' },
            }}
            onClick={handleNext}
          >
            Next → Go to Order
          </Button>
        </Box>
      </Box>
    </>
  );
}

// Reusable small preview component
function PreviewBox({ title, color, textValue, textColor }) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        borderRadius: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      <Box
        sx={{
          width: "100%",
          aspectRatio: "1 / 1.2",         // ලස්සනට ගැලපෙන ratio එකක්
          bgcolor: "#f1f5f9",
          borderRadius: 2,
          overflow: "hidden",
          border: "1px solid #e2e8f0",
        }}
      >
        <ModelViewer
          shirtColor={color}
          textValue={textValue}
          textColor={textColor}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
    </Paper>
  );
}