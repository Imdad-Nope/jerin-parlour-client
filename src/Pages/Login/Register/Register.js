import React, { useState } from 'react';
import { Alert, Avatar, Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';
import HowToRegIcon from '@mui/icons-material/HowToReg';

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

    const body = {
        minHeight: '625px',
        background: '#b18cc1',

    }

    const paperStyle = {
        width: '320px',
        padding: '20px',
        background: '#fff0f0',
        marginTop: '10%'
    }
    const avatar = {
        background: '#F14493'
    };
    const nav = {
        textDecoration: 'none',
        color: '#F14493'
    };
    const typo = {
        marginBottom: '10px'
    };
    return (

        <Grid
            container
            justify='center'
            alignItems='center'
            direction='column'
            style={body}
        >
            <Paper align='center' style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatar}><HowToRegIcon></HowToRegIcon></Avatar>
                    <Typography variant="h6" gutterBottom component="div" sx={{ color: '#F14493' }}>
                        Please create an account</Typography>
                </Grid>
                {<form onSubmit={handleRegisterSubmit}>
                    <TextField
                        style={typo}
                        fullWidth
                        id="standard-basic"
                        label="Your Name"
                        type="name"
                        name='name'
                        onBlur={handleOnBlur}
                        variant="standard"
                        required
                    />

                    <TextField
                        style={typo}
                        fullWidth
                        id="standard-basic"
                        label="Your Email"
                        type="email"
                        name='email'
                        onBlur={handleOnBlur}
                        variant="standard"
                        required
                    />

                    <TextField
                        style={typo}
                        fullWidth
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name='password'
                        onBlur={handleOnBlur}
                        variant="standard"
                        required
                    />

                    <TextField

                        fullWidth
                        id="standard-basic"
                        label="Retype Your Password"
                        type="password"
                        name='password2'
                        onBlur={handleOnBlur}
                        variant="standard"
                        required
                    />

                    <Grid align='left'>
                        <Button variant='contained' type='submit' sx={{ my: 2, bgcolor: '#F14493' }}>Sign Up</Button>
                    </Grid>

                    <Typography variant='subtitle1'>
                        Already have an account? <span>
                            <NavLink to="/login" style={nav}>
                                Sign In
                            </NavLink>
                        </span>
                    </Typography>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Register is done successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>}
            </Paper>
        </Grid>


    );
};

export default Register;