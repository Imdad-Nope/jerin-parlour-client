import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Facetreatment from '../../../Image/Facetreatment.png';
import Hairstyle from '../../../Image/Hairstyle.png';
import Skincare from '../../../Image/Skincare.png';
import Service from '../Service/Service';
import { Container, Paper, Typography } from '@mui/material';

const services = [
    {
        name: 'Anti Age Face Treatment',
        price: 59,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente, optio tempore voluptatibus molestiae cupiditate unde ipsam culpa modi autem. ',
        img: Facetreatment
    },
    {
        name: 'Hair Color And Styling',
        price: 80,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente, optio tempore voluptatibus molestiae cupiditate unde ipsam culpa modi autem. ',
        img: Hairstyle
    },
    {
        name: 'Sking Care Treatment',
        price: 110,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente, optio tempore voluptatibus molestiae cupiditate unde ipsam culpa modi autem. ',
        img: Skincare
    }
]

const Services = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant='h5' gutterBottom sx={{ my: 5, fontWeight: 'bold' }}>
                    Our Awesome <span style={{ color: 'red' }}>Services</span>
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Box >
        </Container>
    );
};

export default Services;