import React from 'react';
import { Box, Container, Grid, Paper, Typography, useTheme } from '@mui/material';
import facewash from '../../../Image/facewash.png';
import { makeStyles } from '@mui/styles';

const fixingItems = {
    display: 'flex',
    height: 400,
    marginTop: '20px'
    // border: '1px solid red'

}

const AppointmentBanner = () => {

    const theme = useTheme()
    const useStyles = makeStyles({
        responsive: {

            [theme.breakpoints.between('xs', 'sm')]: {
                width: 450
            },
            // [theme.breakpoints.down('md')]: {
            //     width: 860
            // },
        }
    });
    const { responsive } = useStyles()

    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#FEF9E7', marginTop: '70px' }} minWidth='500px'>
            <Container>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={6} md={6} style={{ alignItems: 'center', ...fixingItems }}>
                        <img
                            style={{ width: '80%' }}
                            src={facewash} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} style={{ textAlign: 'left', marginTop: '58px' }}>
                        <Box >
                            <Typography variant="h4" gutterBottom component="div" style={{ fontWeight: '500' }}>
                                Let us handle your
                                <br />
                                skin <span style={{ color: '#DE3163' }}>Professionally</span>
                            </Typography>
                            <Typography variant="body2" gutterBottom component="div" sx={{ mt: 2 }}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt dolore magnam distinctio facere optio, maxime illum qui veniam totam nulla asperiores eum sed rerum eos, nisi expedita adipisci minima!
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        mt: 10,
                                        width: 115,
                                        // height: 128,
                                        // border: '1px solid green'
                                    },
                                }}
                            >
                                <Grid>
                                    <Typography variant="h5" gutterBottom component="div" style={{ color: '#DE3163', fontWeight: 'bold' }}>
                                        500+
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                        <small > Happy Customer</small>
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography variant="h5" gutterBottom component="div" style={{ color: '#DE3163', fontWeight: 'bold' }}>
                                        16+
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div">
                                        <small > Total Customer</small>
                                    </Typography>
                                </Grid>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;