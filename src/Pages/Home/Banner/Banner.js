import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import woman from '../../../Image/woman.png';
import { Button, Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    padding: '50px',
    // width: '100%'
    height: 500,
    // border: 'solid 1px red'

    // #DCD85A
}

const Banner = () => {
    // const theme = useTheme()
    // const useStyle = makeStyles({
    //     responsive: {
    //         [theme.breakpoints.up('sm')]: {

    //         }
    //     }
    // });
    // const { responsive } = useStyle()
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#FEF9E7' }} >
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} md={6} style={{ textAlign: 'left', ...verticalCenter }}>
                        <Box>
                            <Typography variant="h3" gutterBottom component="div" style={{ fontWeight: 'bold' }}>
                                BEAUTY SALON<br /> FOR EVERY WOMAN
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div" sx={{ my: 3 }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, vero quibusdam voluptates enim laborum voluptatum assumenda, distinctio officia nihil mollitia voluptate nostrum molestias obcaecati similique.
                            </Typography>
                            <NavLink to="/appointments" style={{ textDecoration: 'none' }}>
                                <Button variant="contained">Get An Appointment</Button>
                            </NavLink>
                        </Box>
                    </Grid >
                    <Grid item xs={12} sm={6} md={6} style={{ marginTop: '40px' }}>
                        <img
                            style={{ width: 410 }}
                            src={woman} alt="" />
                    </Grid>
                </Grid >
            </Container>
        </Box >
    );
};

export default Banner;