import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import AdminNavbar from '../AdminNavbar';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const ManageUsers = () => {
  // State to hold users data
  const [users, setUsers] = useState([]);

  // Mock function to fetch users (replace with actual API call)
  useEffect(() => {
    // This would typically be an API call to fetch users
    const fetchUsers = async () => {
      // Mock data for demonstration
      const mockUsers = [
        { id: 1, username: 'user1', email: 'user1@example.com', role: 'Admin' },
        { id: 2, username: 'user2', email: 'user2@example.com', role: 'Editor' },
        { id: 3, username: 'user3', email: 'user3@example.com', role: 'Viewer' },
      ];
      setUsers(mockUsers);
    };
    fetchUsers();
  }, []);

  // Mock function to delete a user (replace with actual API call)
  const handleDeleteUser = (id) => {
    // This would typically call an API to delete the user
    console.log('Deleting user with id:', id);
    setUsers(users.filter(user => user.id !== id));
  };

  // Mock function to edit a user (replace with actual logic)
  const handleEditUser = (user) => {
    console.log('Editing user:', user);
    // Here you might open a modal or navigate to an edit page
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
          <Typography variant="h6" sx={{ mb: 1, textAlign: 'center' }}>Admin Tools</Typography>
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
            mt: '0px', // Reduce the margin-top to a smaller value
            height: 'calc(100vh - 64px)', // Adjust for Navbar height    overflowY: 'auto', // Allow scrolling if content exceeds viewport height  
        }}>
          <Box 
            sx={{ 
              p: 3, 
              bgcolor: 'white', 
              borderRadius: 2,
              border: '1px solid #2F78864A',
              width: '100%',
              mx: 'auto', 
              mt: 0,
            }}
          >
            <Typography variant="h6" sx={{ mb: 1, textAlign: 'center' }}>Manage Users</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 600 }} aria-label="manage users table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell component="th" scope="row">{user.id}</TableCell>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleEditUser(user)} aria-label="edit">
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteUser(user.id)} aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ManageUsers;
