import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import OurStory from "./OurStory";
import Stats from "./Stats";

export default function LandingPage() {
  return (
    <div>
      <Box position="sticky" top={0} zIndex={10} >
        <Navbar />
      </Box>
      <Box sx={{ py: 0.1, bgcolor: "#1f2937"}}>
        <HeroSection />
      </Box>
      <Stats />
      <Box sx={{ py: 0.11, bgcolor: "#1f2937"}}>
        <OurStory />
      </Box>
      <Box sx={{ py: 0.1,  bgcolor: "#1f2937"}}>
        <Footer />
      </Box>
    </div>
  );
}
