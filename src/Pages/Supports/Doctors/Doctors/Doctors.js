import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor1 from '../../../../Image/doctor1.jpg'
import { createTheme } from '@mui/material';

const Doctors = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                mobile: 0,
                tablet: 640,
                laptop: 1024,
                desktop: 1200,
            },
        },
    });
    const { values } = theme();
    return (

        <Box sx={{ flexGrow: 1 }} className={values} >
            <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }} className={values}>
                <Grid item xs={12} sm={5}>
                    <img src={doctor1} alt="" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni error eos blanditiis sunt expedita ipsum earum autem placeat dolor.</h1>
                </Grid>
                <Grid container spacing={2} sx={{ justifyContent: 'flex-end' }} className={values}>
                    <Grid item xs={12} sm={4}>
                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, laudantium temporibus! Omnis obcaecati suscipit eum deserunt nam similique quibusdam.</h1>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <img src={doctor1} alt="" />
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Doctors;