import React, { useState } from 'react';
import { Alert, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Bookings from '../Booking/Bookings';
import facetreatment from '../../../Image/Facetreatment.png';
import hairstyle from '../../../Image/Hairstyle.png';
import skincare from '../../../Image/Skincare.png';

const bookings = [
    {
        name: "Face Treatment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio, natus commodi cum odit delectus?",
        price: 100,
        img: facetreatment
    },
    {
        name: "Hair Cleaning",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio, natus commodi cum odit delectus?",
        price: 100,
        img: hairstyle
    },
    {
        name: "Face Wash",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio, natus commodi cum odit delectus?",
        price: 100,
        img: skincare
    },
    {
        name: "Make Beauty",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio, natus commodi cum odit delectus?",
        price: 100,
        img: facetreatment
    },
    {
        name: "Hair Style",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio, natus commodi cum odit delectus?",
        price: 100,
        img: hairstyle
    },
    {
        name: "Make up",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti distinctio, natus commodi cum odit delectus?",
        price: 100,
        img: skincare
    },
]

const AvailableAppointments = ({ date }) => {
    const [success, setSuccess] = useState(false)
    return (
        // <Box sx={{ bgcolor: '#DDEAEE' }}>
        <Box sx={{ flexGrow: 1 }} minWidth='500px'>
            <Container>
                <Typography>{setSuccess}</Typography>
                <Typography variant="h4" gutterBottom component="div">
                    <span style={{ color: 'grey' }}>Available </span>
                    <span style={{ color: 'Olive' }}>Appointment </span>
                    <span style={{ background: 'yellowGreen' }}>{date.toLocaleDateString()}</span>
                </Typography>
                {success && <Alert severity="success">Appointment is taken successfully!</Alert>}

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
                    {
                        bookings.map(booking => <Bookings
                            booking={booking}
                            date={date}
                            setSuccess={setSuccess}
                        ></Bookings>)
                    }
                </Grid>
            </Container >
        </Box>
        // </Box>
    );
};

export default AvailableAppointments;