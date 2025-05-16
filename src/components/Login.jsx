import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@mui/material';

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({ username: false, password: false });
    const [loginError, setLoginError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        setErrors(prev => ({ ...prev, [name]: false }));
        setLoginError(false);

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {
            username: formData.username.trim() === '',
            password: formData.password.trim() === '',
        };
        setErrors(newErrors);

        if (!newErrors.username && !newErrors.password) {
            if (formData.username === 'user' && formData.password === 'password') {
                setIsLoggedIn(true);
            } else {
                setLoginError(true);
            }
        }
    };
    useEffect(() => {
        console.log('Updated username:', formData.username);
    }, [formData.username]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                Login Page
            </Typography>

            {isLoggedIn ? (
                <Typography variant="h6">Welcome, user!</Typography>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={2} width="250px">
                        {loginError && (
                            <Typography color="error" fontSize="0.9rem">
                                Invalid username or password
                            </Typography>
                        )}

                        <label htmlFor="username">Username:</label>
                        <input
                            id="username"
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            style={{
                                padding: '8px',
                                borderColor: errors.username ? 'red' : '#ccc',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderRadius: '4px'
                            }}
                        />
                        {errors.username && (
                            <Typography color="error" fontSize="0.8rem">
                                Username is required
                            </Typography>
                        )}

                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            style={{
                                padding: '8px',
                                borderColor: errors.password ? 'red' : '#ccc',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderRadius: '4px'
                            }}
                        />
                        {errors.password && (
                            <Typography color="error" fontSize="0.8rem">
                                Password is required
                            </Typography>
                        )}

                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Box>
                </form>
            )}
        </Box>
    );
};

export default LoginPage;
