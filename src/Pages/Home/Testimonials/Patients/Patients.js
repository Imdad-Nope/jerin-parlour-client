import React from 'react';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Patients = ({ testimonial }) => {
    const { name, image, description } = testimonial;

    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, padding: '15px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} >
                <CardMedia
                    component="img"
                    image={`data:image/jpeg;base64,${image}`} alt="green iguana"
                />
                <CardContent>
                    <Typography variant='h6' gutterBottom>
                        {name}
                    </Typography>

                    <Typography variant='caption' color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Patients;