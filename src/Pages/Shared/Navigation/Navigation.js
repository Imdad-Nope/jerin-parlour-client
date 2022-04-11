import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { makeStyles } from '@mui/styles';
import { createTheme, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

const Navigation = () => {
    const { user, logOut } = useAuth();

    const theme = useTheme()
    const useStyle = makeStyles({
        responsive: {

            [theme.breakpoints.down('sm')]: {
                width: 420
            },
            // [theme.breakpoints.down('md')]: {
            //     width: 860
            // },
        },
        navItems: {
            color: 'yellowGreen',
            textDecoration: 'none'
        },
        desktopNav: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        mobileNav: {
            [theme.breakpoints.down('sm')]: {
                display: 'none',

            }
        },
        logo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        mobileIcon: {
            color: '#64BBAF',
            textDecoration: 'none'
        }
    })

    const { navItems, desktopNav, mobileNav, logo, mobileIcon, responsive } = useStyle()

    const [state, setState] = React.useState(false);

    const list =
        <Box
            sx={{ width: 250 }}
            role="presentation">
            <List>
                <NavLink to="/home" className={mobileIcon}>
                    <Button color='inherit'>Home</Button>
                </NavLink>
                <Divider />
                <NavLink to="/supports" className={mobileIcon}>
                    <Button color='inherit'>Supprts</Button>
                </NavLink>
                <Divider />
                <NavLink to="/appointments" className={mobileIcon}>
                    <Button color='inherit'>Appointments</Button>
                </NavLink>
                <Divider />
                <NavLink to="/dashboard" className={mobileIcon}>
                    <Button color='inherit'>Dashboard</Button>
                </NavLink>
                <Divider />
                {
                    user?.email ? <Button onClick={logOut}>Logout</Button>
                        :
                        <NavLink to="/login" className={mobileIcon}>
                            <Button sx={{ color: '#F14493' }}>Login</Button>
                        </NavLink>}
            </List>

        </Box>

    return (
        <>
            <Box sx={{ flexGrow: 1 }} className={responsive} >
                <AppBar position="static" style={{ backgroundColor: '#FEF9E7' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={desktopNav}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon sx={{ color: '#F14493' }} />
                        </IconButton>
                        <Typography className={logo} variant="h6" component="div" sx={{ flexGrow: 1, color: '#F14493' }}>
                            Jerin Parlour
                        </Typography>
                        <Box className={mobileNav} >
                            <NavLink to="/home" className={navItems} >
                                <Button color='inherit'>Home</Button>
                            </NavLink>
                            <NavLink to="/supports" className={navItems} >
                                <Button color='inherit'>Supports</Button>
                            </NavLink>
                            <NavLink to="/appointments" className={navItems} >
                                <Button color='inherit'>Appointments</Button>
                            </NavLink>
                            <NavLink to="/dashboard" className={navItems}>
                                <Button color='inherit'>Dashboard</Button>
                            </NavLink>
                            {
                                user?.email ? <Button onClick={logOut}>Logout</Button>
                                    :
                                    <NavLink to="/login" className={navItems}>
                                        <Button sx={{ color: '#F14493' }}>Login</Button>
                                    </NavLink>
                            }
                        </Box>

                    </Toolbar>
                </AppBar>
            </Box >

            <div>

                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>

    );
};

export default Navigation;