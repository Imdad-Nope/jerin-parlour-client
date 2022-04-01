import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import woman from '../../../Image/woman.png';
import { Button, Container, Typography } from '@mui/material';
import { height } from '@mui/system';


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
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#FEF9E7' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} style={{ textAlign: 'left', ...verticalCenter }}>
                        <Box>
                            <Typography variant="h3" gutterBottom component="div" style={{ fontWeight: 'bold' }}>
                                BEAUTY SALON<br /> FOR EVERY WOMAN
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div" sx={{ my: 3 }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, vero quibusdam voluptates enim laborum voluptatum assumenda, distinctio officia nihil mollitia voluptate nostrum molestias obcaecati similique.
                            </Typography>
                            <Button variant="contained">Get An Appointment</Button>
                        </Box>
                    </Grid >
                    <Grid item xs={12} md={6} style={{ marginTop: '40px' }}>
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