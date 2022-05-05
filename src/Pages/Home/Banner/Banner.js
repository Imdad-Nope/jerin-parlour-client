import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import woman from '../../../Image/woman.png';
import './Banner.css';

const Banner = () => {
    const style = {
        background: '#FEF9E7',
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        minWidth: '500px'
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={style} >
            <Container >
                <Grid container spacing={6} sx={{ alignItems: 'center' }} >
                    <Grid container item xs={12} md={6} >
                        <Grid container item xs={12} sm={12} >
                            <Box >
                                <Typography variant="h3" gutterBottom component="div" sx={{ fontWeight: 600 }}>
                                    BEAUTY SALON <br /> FOR EVERY WOMAN
                                </Typography>
                                <Typography variant="body2" gutterBottom sx={{ my: 2 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                    quasi quidem quibusdam.
                                </Typography>
                                <Button variant="contained" sx={{ background: '#F14493' }}>Get Appointment</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} md={6} sx={{ mt: 4, padding: 5 }}>
                        <Grid container xs={12} sm={12}>
                            <img
                                src={woman} alt="" width='420px' height='auto' />
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    );
};

export default Banner;