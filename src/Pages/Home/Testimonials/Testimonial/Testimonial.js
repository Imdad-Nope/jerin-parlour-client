import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Patients from '../Patients/Patients';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('https://peaceful-ocean-02990.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (

        <Box sx={{ flexGrow: 1 }} minWidth='500px'>
            <Container>
                <Typography variant='h4' gutterBottom sx={{ my: 5, fontWeight: 'bold', color: 'yellowGreen' }}>
                    Testimonials: {testimonials.length}
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        testimonials.map(testimonial => <Patients
                            key={testimonial._id}
                            testimonial={testimonial}
                        ></Patients>)
                    }
                </Grid>
            </Container>
        </Box >

    );
};

export default Testimonial;