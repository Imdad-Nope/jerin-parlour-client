import React from 'react';
import { Grid } from '@mui/material';
import Calendar from '../../Shared/Calendar/Calendar';
import Appointment from '../Appointment/Appointment';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Calendar
                    date={date}
                    setDate={setDate}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Appointment
                    date={date}
                />
            </Grid>

        </Grid>
    );
};

export default DashboardHome;