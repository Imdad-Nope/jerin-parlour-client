import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';
const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#FEF9E7' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'blue' }}>
                        Jerin Parlour
                    </Typography>
                    <Box>
                        <NavLink to="/home" style={{ textDecoration: 'none' }}>
                            <Button>Home</Button>
                        </NavLink>
                        <NavLink to="/supports" style={{ textDecoration: 'none' }}>
                            <Button>Support</Button>
                        </NavLink>
                        <NavLink to="/appointments" style={{ textDecoration: 'none' }}>
                            <Button>Appointments</Button>
                        </NavLink>
                        <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                            <Button>Dashboard</Button>
                        </NavLink>
                    </Box>

                    {
                        user?.email ? <Button onClick={logOut}>Logout</Button>
                            :
                            <NavLink to="/login" style={{ textDecoration: 'none' }}>
                                <Button sx={{ color: '#F14493' }}>Login</Button>
                            </NavLink>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;