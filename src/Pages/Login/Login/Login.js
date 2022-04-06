import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState('');
    const { user, authError, isLoading, loginUser, signInWithGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault()
    }

    const handleGoogle = () => {
        signInWithGoogle(location, navigate)

    }
    return (
        <Container>
            <Grid columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mt: 8 }}>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Login
                </Typography>
                {<form onSubmit={handleLoginSubmit}>
                    <TextField
                        sx={{ width: '40%', mt: 2 }}
                        id="standard-basic"
                        label="Your Email"
                        type="email"
                        name='email'
                        onChange={handleOnChange}
                        variant="standard" />
                    <br />
                    <TextField
                        sx={{ width: '40%', mt: 2 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name='password'
                        onChange={handleOnChange}
                        variant="standard" />
                    <br />
                    <Button variant='contained' type='submit' sx={{ width: '40%', mt: 2 }}>Login</Button>
                    <br />
                    <NavLink to="/register" style={{ textDecoration: 'none' }}>
                        <Button variant='text'>Don't have an account? Please Register</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Register is done successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>}
                <p>----------------------</p>
                <Button onClick={handleGoogle}>Google Sign In</Button>
            </Grid>
        </Container>
    );
};

export default Login;