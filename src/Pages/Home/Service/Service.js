import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const verticalCenter = {
    display: 'flex',
    padding: '50px',
    // width: '100%'
    height: 400,
    // border: 'solid 1px red',

}

const Service = ({ service }) => {
    const { name, description, img, price } = service;
    return (

        <Grid item xs={4} sm={4} md={4} style={verticalCenter} >
            <Card sx={{ minWidth: 275, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} >
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: 80, margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant='h6' gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="body2" component="div" color='red'>
                        ${price}
                    </Typography>
                    <Typography variant='caption' color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid >
    );
};

export default Service;