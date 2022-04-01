import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Calendar = ({ date, setDate }) => {

    return (
        <Box sx={{ flexGrow: 1, }} >
            <Grid container spacing={2} >
                <Grid item xs={12} >

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                </Grid>
            </Grid>
        </Box>

    );
};

export default Calendar;