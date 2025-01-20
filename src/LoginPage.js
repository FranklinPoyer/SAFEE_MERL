import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    // Perform validation or API call if needed
    navigate('/home'); // Redirect to /home
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #002368, #0052cc)',
        padding: 3,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={credentials.username}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{
            backgroundColor: '#002368',
            ':hover': { backgroundColor: '#001d57' },
            padding: 1.5,
            fontWeight: 'bold',
          }}
        >
          Log In
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
