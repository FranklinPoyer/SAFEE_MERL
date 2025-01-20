import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, TextField, Checkbox, FormControlLabel, Link } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Firebase auth methods
import app from './firebase/firebaseConfig'; // Firebase configuration

const LoginPage2 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error messages

        const auth = getAuth(app);

        try {
            // Sign in user with Firebase Authentication
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // Optionally store user info if "Remember Me" is checked
            if (rememberMe) {
                localStorage.setItem('user', JSON.stringify(userCredential.user));
            }

            // Navigate to home page on successful login
            navigate('/home');
        } catch (err) {
            // Handle errors and show appropriate messages
            if (err.code === 'auth/wrong-password') {
                setError('Incorrect password. Please try again.');
            } else if (err.code === 'auth/user-not-found') {
                setError('No account found with this email address.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'radial-gradient(circle, #4A90E2, rgba(74, 144, 226, 0.5))',
            }}
        >
            <Box 
                sx={{
                    display: 'flex',
                    bgcolor: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    width: '90%',
                    maxWidth: '800px', 
                }}
            >
                <Box 
                    sx={{
                        bgcolor: '#002368',
                        color: 'white',
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        width: '40%',
                    }}
                >
                    <Box 
                        component="img" 
                        src="blue_logo.png" 
                        alt="Logo" 
                        sx={{ width: '250px', mb: 2 }} 
                    />
                    <Typography variant="body1">
                        Don't have an account? <Link href="#" sx={{ color: 'white', textDecoration: 'underline' }}>Register</Link>
                    </Typography>
                </Box>
                <Box sx={{ p: 4, width: '60%' }}>
                    <Typography variant="h4" sx={{ color: '#002368', mb: 3 }}>
                        Log In
                    </Typography>
                    {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ mb: 3 }}>
                            <TextField 
                                fullWidth 
                                label="Email" 
                                variant="outlined" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder="name@example.com"
                            />
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <TextField 
                                fullWidth 
                                type="password" 
                                label="Password" 
                                variant="outlined" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <FormControlLabel 
                                control={
                                    <Checkbox 
                                        checked={rememberMe}
                                        onChange={() => setRememberMe(!rememberMe)}
                                    />
                                }
                                label="Remember Me"
                            />
                        </Box>
                        <Button 
                            type="submit" 
                            fullWidth 
                            variant="contained"
                            size='large'
                            sx={{ bgcolor: '#0A358C', ':hover': { bgcolor: '#3A7BD5' }, mb: 2, borderRadius: '40px' }}
                        >
                            LOG IN
                        </Button>
                        <Box sx={{ textAlign: 'right' }}>
                            <Link href="#" sx={{ color: '#4A90E2', ':hover': { textDecoration: 'underline' } }}>
                                Forgot Password?
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage2;
