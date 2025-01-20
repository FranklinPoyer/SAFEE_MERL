import React, { useState } from 'react';
import { Box, Stack, Typography, Button, TextField, Select, MenuItem, FormControl, InputLabel, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import AdminNavbar from '../AdminNavbar';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';

const CreateUser = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    role: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend to create a new user
    console.log('New User Data:', newUser);
    // Reset form after submission
    setNewUser({ username: '', email: '', role: '' });
  };

  return (
    <div>
      {/* Navbar at the top */}
      <AdminNavbar />
      
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F5F4F2' }}>
        {/* Side Panel on the left */}
        <Box
          sx={{
            position: 'fixed', // Make the side panel fixed
            top: '64px', // Adjust based on the height of Navbar
            left: 0, // Align to the left side
            width: '15%', // 1/5 of the page width
            minWidth: '150px',
            height: 'calc(100vh - 64px)', // Full viewport height minus Navbar height
            bgcolor: '#002368', // Matching the color theme
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            p: 2,
            pb: 2, 
            zIndex: (theme) => theme.zIndex.drawer + 1, // Ensure it's above other content
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>Admin Tools</Typography>
          <Divider sx={{ bgcolor: 'white', mb: 2 }} />
          <List>
            <ListItem button component={Link} to="/admin/dashboard">
              <ListItemIcon>
                <DashboardIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText sx={{color: '#add8e6'}} primary="Dashboard" />
            </ListItem>
            <ListItem button component={Link} to="/admin/CreateUser">
              <ListItemIcon>
                <PersonAddIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText sx={{color: '#add8e6'}} primary="Create User" />
            </ListItem>
            <ListItem button component={Link} to="/admin/manageusers">
              <ListItemIcon>
                <GroupIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText sx={{color: '#add8e6'}} primary="Manage Users" />
            </ListItem>
            <ListItem button component={Link} to="/admin/settings">
              <ListItemIcon>
                <SettingsIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText sx={{color: '#add8e6'}} primary="Settings" />
            </ListItem>
          </List>
        </Box>

        {/* Main Content on the right */}
        <Box sx={{ 
          flexGrow: 1, 
          p: 4, 
          ml: '15%', // Match the width of the sidebar to push content to the right
          mt: '64px', // Adjust to avoid overlap with Navbar
          height: 'calc(100vh - 64px)', // Adjust for Navbar height
          overflowY: 'auto', // Allow scrolling if content exceeds viewport height
        }}>
          <AdminNavbar />
          <Box 
            sx={{ 
            p: 3, 
            bgcolor: 'white', 
            borderRadius: 0,
            border: '1px solid #2F78864A',
            width: '90%',
            ml: 2, 
            mt: 0,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>Create New User</Typography>
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField 
                  name="username" 
                  label="Username" 
                  value={newUser.username} 
                  onChange={handleInputChange} 
                  fullWidth 
                  required 
                />
                <TextField 
                  name="email" 
                  label="Email" 
                  value={newUser.email} 
                  onChange={handleInputChange} 
                  fullWidth
                  type="email"
                />
                <FormControl fullWidth>
                  <InputLabel id="role-select-label">Role</InputLabel>
                  <Select
                    labelId="role-select-label"
                    name="role"
                    value={newUser.role}
                    onChange={handleInputChange}
                    label="Role"
                    required
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="editor">Editor</MenuItem>
                    <MenuItem value="viewer">Viewer</MenuItem>
                  </Select>
                </FormControl>
                <Button 
                  type="submit" 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#0A358C', 
                    ':hover': { bgcolor: '#3A7BD5' },
                    borderRadius: '5px',
                    textTransform: 'capitalize'
                  }}
                >
                  Create User
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CreateUser;