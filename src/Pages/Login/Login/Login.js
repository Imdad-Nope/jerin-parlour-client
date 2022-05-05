import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Grid, TextField, Typography, Box, Avatar } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';
import google from '../../../Image/Group 573.png';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import LoginIcon from '@mui/icons-material/Login';



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

    };

    const body = {
        background: 'teal',
        minHeight: '625px',
        overflow: "hidden"
    }

    const paperStyle = {
        padding: '20px',
        width: '320px',
        marginTop: '10%',
        background: '#fff0f0',
    }
    const avatar = {
        background: '#F14493',
        marginBottom: '30px'
    }
    const typo = {
        marginBottom: '10px'
    };
    const nav = {
        textDecoration: 'none',
        color: '#F14493',
    }
    return (
        <Grid container
            justify='center'
            alignItems='center'
            direction='column'
            style={body}
        >

            <Paper style={paperStyle} >
                <Grid align='center'>
                    <Avatar style={avatar}><LoginIcon></LoginIcon></Avatar>
                </Grid>
                <Typography variant='h6' align='left' color='#F14493'>Sign In</Typography>
                {<form onSubmit={handleLoginSubmit}>
                    <TextField
                        style={typo}
                        fullWidth
                        id="standard-basic"
                        label="Your Email"
                        type="email"
                        name='email'
                        onChange={handleOnChange}
                        variant="standard"
                        required
                    />

                    <TextField

                        fullWidth
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name='password'
                        onChange={handleOnChange}
                        variant="standard"
                        required
                    />

                    <Grid align='left' >
                        <Button sx={{ my: 2, bgcolor: '#F14493' }} variant='contained' type='submit'>Sign In</Button>
                    </Grid>
                    <Typography variant='subtitle1'> Don't have an account? <span>
                        <NavLink to="/register" style={nav}>Sign Up</NavLink>
                    </span>
                    </Typography>

                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Register is done successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>}
                {/* <p style={{ color: '#F14493', fontWeight: 'bold' }}>------------------- Or --------------------</p> */}
                <Fab variant="extended" onClick={handleGoogle} sx={{ mt: 4 }}>
                    <Box sx={{ mr: 2, mt: 1 }} >
                        <img
                            src={google} alt="" width='20px' />
                    </Box>
                    Continue with google
                </Fab>
            </Paper>
        </Grid>






    );
};

export default Login;