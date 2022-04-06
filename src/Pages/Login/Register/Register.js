import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, registerUser, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Please retype your password')
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, navigate, location)

    }
    return (
        <Container>
            <Grid columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mt: 8 }}>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Register
                </Typography>
                {<form onSubmit={handleRegisterSubmit}>
                    <TextField
                        sx={{ width: '40%', mt: 2 }}
                        id="standard-basic"
                        label="Your Name"
                        type="name"
                        name='name'
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <TextField
                        sx={{ width: '40%', mt: 2 }}
                        id="standard-basic"
                        label="Your Email"
                        type="email"
                        name='email'
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <TextField
                        sx={{ width: '40%', mt: 2 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name='password'
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <TextField
                        sx={{ width: '40%', mt: 2 }}
                        id="standard-basic"
                        label="Retype Your Password"
                        type="password"
                        name='password2'
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />
                    <Button variant='contained' type='submit' sx={{ width: '40%', mt: 2 }}>Register</Button>
                    <br />
                    <NavLink to="/login" style={{ textDecoration: 'none' }}>
                        <Button variant='text'>Already have an account? Please Login</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Register is done successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>}
            </Grid>
        </Container>
    );
};

export default Register;