import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import doctor4 from '../../../../Image/doctor4.jpg';
import doctor2 from '../../../../Image/doctor2.png'
import doctor3 from '../../../../Image/doctor3.jpg';
import doctor1 from '../../../../Image/doctor1.jpg';



const Doctors = () => {
    const style = {
        minWidth: '500px'
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }} style={style}>
                <Container>
                    <Grid container sx={{ mt: 2, alignItems: "center", justifyContent: 'center' }}>
                        <Grid item xs={12} sm={6} md={6} >
                            <img src={doctor4} alt="" width='80%' height='auto' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ textAlign: 'justify' }}>
                            <Typography variant="h5" gutterBottom component="div" sx={{ textAlign: 'center', color: 'red' }}>
                                Doctor Henna Bekar
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima laudantium exercitationem deserunt fuga suscipit porro quo eos neque, rerum totam numquam et molestiae voluptates, ea possimus officiis iusto atque similique? Asperiores unde consequuntur, quibusdam necessitatibus nobis dolore alias non est doloribus corporis similique aperiam neque vero vitae saepe laudantium?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima laudantium exercitationem deserunt fuga suscipit porro quo eos neque, rerum totam numquam et molestiae voluptates, ea possimus officiis iusto atque similique? Asperiores unde consequuntur, quibusdam necessitatibus nobis dolore alias non est doloribus corporis similique aperiam neque vero vitae saepe laudantium?
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ textAlign: 'justify' }}>
                            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', color: 'red' }}>
                                Doctor John
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima laudantium exercitationem deserunt fuga suscipit porro quo eos neque, rerum totam numquam et molestiae voluptates, ea possimus officiis iusto atque similique? Asperiores unde consequuntur, quibusdam necessitatibus nobis dolore alias non est doloribus corporis similique aperiam neque vero vitae saepe laudantium?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima laudantium exercitationem deserunt fuga suscipit porro quo eos neque, rerum totam numquam et molestiae voluptates, ea possimus officiis iusto atque similique? Asperiores unde consequuntur, quibusdam necessitatibus nobis dolore alias non est doloribus corporis similique aperiam neque vero vitae saepe laudantium?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <img src={doctor2} alt="" width='80%' height='auto' />
                        </Grid>
                    </Grid>
                    <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <img src={doctor3} alt="" width='70%' height='auto' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} sx={{ textAlign: 'justify' }}>
                            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', color: 'red' }}>
                                Doctor Bella
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima laudantium exercitationem deserunt fuga suscipit porro quo eos neque, rerum totam numquam et molestiae voluptates, ea possimus officiis iusto atque similique? Asperiores unde consequuntur, quibusdam necessitatibus nobis dolore alias non est doloribus corporis similique aperiam neque vero vitae saepe laudantium?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima laudantium exercitationem deserunt fuga suscipit porro quo eos neque, rerum totam numquam et molestiae voluptates, ea possimus officiis iusto atque similique? Asperiores unde consequuntur, quibusdam necessitatibus nobis dolore alias non est doloribus corporis similique aperiam neque vero vitae saepe laudantium?
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} sm={6} md={6} sx={{ textAlign: 'justify' }}>
                            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', color: 'red' }}>
                                Doctor Beauty
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima laudantium exercitationem deserunt fuga suscipit porro quo eos neque, rerum totam numquam et molestiae voluptates, ea possimus officiis iusto atque similique? Asperiores unde consequuntur, quibusdam necessitatibus nobis dolore alias non est doloribus corporis similique aperiam neque vero vitae saepe laudantium?
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero minima laudantium exercitationem deserunt fuga suscipit porro quo eos neque, rerum totam numquam et molestiae voluptates, ea possimus officiis iusto atque similique? Asperiores unde consequuntur, quibusdam necessitatibus nobis dolore alias non est doloribus corporis similique aperiam neque vero vitae saepe laudantium?
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <img src={doctor1} alt="" width='70%' height='auto' />
                        </Grid>
                    </Grid>

                </Container>





            </Box>
        </>
    );
};

export default Doctors;