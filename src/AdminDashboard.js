import React from 'react';
import { Container, Grid, Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Navbar from './Navbar';
import AdminNavbar from './AdminNavbar';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';

const AdminDashboard = () => {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />
      
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#F5F4F2' }}>
        {/* Side Panel on the left */}
        <Box
          sx={{
            position: 'fixed', // Make the side panel fixed
            top: '64px', // Adjust based on the height of Navbar
            left: 0, // Align to the left side
            width: '15%', // 1/5 of the page width
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
              backgroundImage: `url('/bckgd.png')`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              minHeight: '200px',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
            }}
          >
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: '100%',
                mb: 4, 
                pt: 4,
              }}
            >
              <div />
            </Box>
          </Box>

          <Container maxWidth={false} sx={{ width: '100%', mt: 2, mb: 4, flexGrow: 1 }}>
            <Grid container spacing={3} sx={{ height: '100%' }}>
              {/* Placeholder for additional functionalities */}
              <Grid item xs={12} md={6} sx={{ height: '100%' }}>
                <Box 
                  sx={{ 
                    p: 3, 
                    bgcolor: 'white', 
                    borderRadius: 2,
                    border: '1px solid #2F78864A',
                    height: '100%',
                  }}
                >
                  <Typography variant="h5" sx={{ mb: 2 }}>Content Area</Typography>
                  {/* Here you can add more functionalities */}
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default AdminDashboard;