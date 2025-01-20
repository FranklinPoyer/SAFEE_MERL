import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import { Twitter, LinkedIn, Wifi } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#002368',
        backgroundPosition: 'center',
        minHeight: '250px', // Increased height to accommodate all content
        display: 'flex',
        flexDirection: 'column',
        padding: 4,
        color: 'white',
      }}
    >
      {/* Row 1 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        {/* Left - Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '30px' }}>
          <img src="/blue_logo.png" alt="Logo" style={{ height: 70 }} />
        </Box>

        {/* Right - To the Top Button */}
        <Button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          sx={{
            backgroundColor: 'white',
            color: '#002368',
            '&:hover': { backgroundColor: '#cce0ff' },
            padding: '8px 20px',
            marginRight: '40px',
            fontSize: '16px',
          }}
        >
          To the top
        </Button>
      </Box>

      {/* Row 2 - Thin Light Blue Line */}
      <Box sx={{ borderBottom: '2px solid #cce0ff', width: '95%', marginLeft: 'auto', marginRight: 'auto', mb: 4 }} />

      {/* Row 3 */}
      <Box sx={{ display: 'flex', mb: 2, ml: 5 }}>
  {/* Left - Text Items in Two Columns */}
        <Box sx={{ display: 'flex', flexDirection: 'column', mr: 5 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>About</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>Employment Outcomes</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>Impact</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 5 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>Training Youths</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>Financial Access</Typography>
        </Box>

        {/* Right - Social Media Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '120px', ml: 'auto', mr: 5 }}>
            <Twitter sx={{ color: 'white', fontSize: 25 }} />
            <LinkedIn sx={{ color: 'white', fontSize: 25 }} />
            <Wifi sx={{ color: 'white', fontSize: 25 }} />
        </Box>
        </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
        © 2025 KFT. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
