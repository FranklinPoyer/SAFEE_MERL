import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  TextField, 
  Menu, 
  MenuItem, 
  Box, 
  Tooltip, 
} from '@mui/material';
import { 
  Search, 
  Language 
} from '@mui/icons-material'; 

const Navbar = () => {
  // State for language menu
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#F5F4F2", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Section*/}
        <Box sx={{ display: "flex", alignItems: "center", marginLeft: "40px" }}>
          <img 
            src="/logo.png" 
            alt="Logo" 
            style={{ height: 50 }}
          /> 
        </Box>

        {/* Search Bar */}
        <Box sx={{ flexGrow: 1, maxWidth: 300, display: "flex", alignItems: "left" }}> 
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
                <Search sx={{ marginLeft: 1, color: "gray" }} />
              ),
            }}
          />
        </Box>

        {/* Buttons Section (Simplified) */}
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
            sx={{ mt: "40px" }}
          >
            <MenuItem onClick={handleMenuClose}>English</MenuItem>
            {/* Add other languages as needed */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;