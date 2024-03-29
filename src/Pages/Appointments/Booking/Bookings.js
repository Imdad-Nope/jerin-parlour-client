import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import './Booking.css'

const Bookings = ({ booking, date, setSuccess }) => {


    const { user } = useAuth()
    const initialInfo = { patientName: user.displayName, email: user.email, phoneNumber: '', age: '' }
    const [appointment, setAppointment] = useState(initialInfo)
    const { name, description, price, img } = booking;
    const { reset } = useForm({})

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAppoints = { ...appointment };
        newAppoints[field] = value;
        setAppointment(newAppoints);
        console.log(newAppoints)
    }

    const handleSubmit = e => {
        const services = {
            serviceName: name,
            date: date.toLocaleDateString(),
            ...appointment
        }

        fetch("https://jerin-parlour-server.onrender.com/appoint", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                    e.target.reset()
                }
                handleClose()
            })


        e.preventDefault()
    }

    const style = {
        textDecoration: 'none',
        backgroundColor: '#FEF9E7',
        color: 'salmon',
        fontSize: 16
    }

    return (

        <Grid item xs={4} sm={4} md={4} sx={{ mt: 4 }}>
            <Paper sx={{ minWidth: 275, padding: '15px', borderRadius: '15px' }} >
                <Box style={{ display: 'flex', marginLeft: '30px', marginBottom: '25px', justifyContent: 'space-between' }}>
                    <img
                        style={{ width: '25%', }}
                        src={img} alt="" />

                    <Box>
                        <div>
                            <Button className='ok sponsor' variant='outlined' style={style} onClick={handleClickOpen}>
                                Appointment
                            </Button>


                            <Dialog open={open} >
                                <form onSubmit={handleSubmit}>
                                    <DialogTitle>Take Your Appointment</DialogTitle>
                                    <DialogContent>
                                        <TextField

                                            sx={{

                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'light'
                                                        ? 'rgba(255, 0, 0, 0.1)'
                                                        : 'rgb(255 132 132 / 25%)',
                                            }}
                                            // autoFocus
                                            margin="dense"
                                            placeholder={date.toLocaleDateString()}
                                            variant="standard"
                                            fullWidth
                                            disabled
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            placeholder='Name'
                                            label="Your Name"
                                            name='patientName'
                                            defaultValue={user.displayName}
                                            onBlur={handleOnBlur}
                                            color="warning"
                                            fullWidth
                                            variant="standard"
                                            required
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            name='email'
                                            placeholder="Your Email"
                                            label="Email"
                                            defaultValue={user.email}
                                            onBlur={handleOnBlur}
                                            color="warning"
                                            fullWidth
                                            variant="standard"
                                            required
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            name='age'
                                            placeholder='Your Age'
                                            label="Your Age"
                                            defaultValue=''
                                            onBlur={handleOnBlur}
                                            color="warning"
                                            fullWidth
                                            variant="standard"
                                            required
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            name='phoneNumber'
                                            placeholder='Your Phone Number'
                                            label="Phone Number"
                                            defaultValue=''
                                            onBlur={handleOnBlur}
                                            color="warning"
                                            fullWidth
                                            variant="standard"
                                            required
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose}>Cancel</Button>
                                        <Button type='submit'>Submit</Button>
                                    </DialogActions>
                                </form>
                            </Dialog>

                        </div>

                        {/* <Button variant='text' sx={{ color: 'green', bgcolor: '#F9CCEE', padding: '7px' }}>Appoint</Button> */}

                    </Box>

                </Box >
                <Box style={{ textAlign: 'left', marginLeft: '30px', color: 'teal' }}>
                    <Typography variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {description}
                    </Typography>
                </Box>

            </Paper >
        </Grid >
    );
};

export default Bookings;