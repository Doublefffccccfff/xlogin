import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({ username: false, password: false });
  const [loginError, setLoginError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
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
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              error={errors.username}
              helperText={errors.username ? 'Username is required' : ''}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              error={errors.password}
              helperText={errors.password ? 'Password is required' : ''}
            />
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
