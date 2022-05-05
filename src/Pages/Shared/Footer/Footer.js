import React from 'react';
import Box from '@mui/material/Box';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';


const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#F14493', padding: '15px' }} minWidth='500px'>
            <Container>
                <Grid container spacing={{ xs: 2, sm: 6, md: 4 }}>
                    <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexWrap: 'wrap', mt: 6 }}>
                        <AddLocationAltIcon style={{ color: 'white', marginRight: '20px' }}></AddLocationAltIcon>

                        <Typography variant="body2" display="block" gutterBottom component="div" sx={{ color: 'white', textAlign: 'left' }}>
                            H#0000 (0th Floor), #000,
                            <br />
                            Moakhali, Dhaka, Bangladesh
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={3} sx={{ mt: 4, color: 'white', textAlign: 'left' }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Company
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            About
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Projects
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Our Team
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Temrs and Conditon
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Submit Listing
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ mt: 4, color: 'white', textAlign: 'left' }}>
                        <Typography variant="h6" gutterBottom component="div">
                            Quick Links
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Quick Links
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Rentals
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Sales
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="overline" display="block" gutterBottom>
                            Our Blog
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ mt: 4, textAlign: 'left', color: 'white' }}>
                        <Typography variant="h6" gutterBottom component="div">
                            About Us
                        </Typography>
                        <Typography sx={{ color: '#D3D3D3' }} variant="overline" display="block" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptates quidem corrupti a doloribus?
                        </Typography>
                        <FacebookIcon sx={{ m: 1 }}></FacebookIcon>
                        <InstagramIcon sx={{ m: 1 }}></InstagramIcon>
                        <LinkedInIcon sx={{ m: 1 }}></LinkedInIcon>
                        <YouTubeIcon sx={{ m: 1 }}></YouTubeIcon>
                    </Grid>

                </Grid>
            </Container>
        </Box >

    );
};

export default Footer;