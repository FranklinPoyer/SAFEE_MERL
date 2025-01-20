import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  TextField, 
  Menu, 
  MenuItem, 
  Box, 
  Typography,
  Tooltip, 
} from '@mui/material';
import { 
  Search, 
  Language 
} from '@mui/icons-material'; 

const AdminNavbar = () => {
  // State for language menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: "#F5F4F2", 
        zIndex: (theme) => theme.zIndex.drawer + 1, 
        height: "64px", // Reduce height of the navbar
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "50px", px: 2 }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ height: 40 }} // Reduced logo size for compact navbar
          />
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#01256D',
              ml: 2, // Adjusted spacing to match the compact size
              fontWeight: 'bold',
            }}
          >
            Admin
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, maxWidth: 300, ml: 2 }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "white",
              borderRadius: "20px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
            InputProps={{
              endAdornment: (
                <Search sx={{ ml: 1, color: "gray" }} />
              ),
            }}
          />
        </Box>

        {/* Language Button */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Language">
            <IconButton sx={{ color: "#87827e" }} onClick={handleMenuOpen}>
              <Language />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: "40px" }} // Adjusted to position the menu correctly
          >
            <MenuItem onClick={handleMenuClose}>English</MenuItem>
            {/* Add other languages as needed */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
