import { Grid } from '@mui/material';
import React from 'react';
import Doctors from '../Doctors/Doctors/Doctors';

const Supports = () => {


    return (
        <Grid sx={{ mt: 2, bgcolor: 'green' }}>
            <Grid >
                <h1>Honorable Doctors</h1>
                <Doctors></Doctors>
            </Grid>
        </Grid>


    );
};

export default Supports;