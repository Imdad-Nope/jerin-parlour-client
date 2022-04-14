import React from 'react';
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import woman from '../../../Image/woman.png';
import { makeStyles } from '@mui/styles';


const style = {
    background: '#FEF9E7',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    minWidth: '500px'
}

const Banner = () => {
    const theme = useTheme()
    const useStyles = makeStyles({
        responsive: {
            padding: theme.spacing(1),
            [theme.breakpoints.between('xs', 'sm')]: {
                // backgroundColor: theme.palette.secondary.main,
                width: '450px !important',
                margin: '0 auto'
            },
        }
    })
    const classes = useStyles()
    return (
        <Box sx={{ flexGrow: 1 }} style={style} >
            <Container className={classes.responsive}>
                <Grid container spacing={6} sx={{ alignItems: 'center' }} className={classes.responsive}>
                    <Grid item xs={12} md={6} className={classes.responsive}>
                        <Box className={classes.responsive}>
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
                    <Grid item xs={12} md={6} className={classes.responsive}>
                        <img
                            src={woman} alt="" width='420px' />
                    </Grid>
                </Grid>
            </Container >
        </Box >
    );
};

export default Banner;