import React, { useState } from 'react';
import { Alert, Button, Container, FormControl, Grid, OutlinedInput, TextField, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import { useForm } from 'react-hook-form';


const SendMessages = () => {

    const [messages, setMessages] = useState({})

    const { reset } = useForm({})

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newMessages = { ...messages };
        newMessages[field] = value;
        setMessages(newMessages)
        console.log(newMessages);
    }

    const handleSubmit = e => {
        fetch(`http://localhost:5000/addMessages`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(messages)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Send Messages Successfully.')
                    e.target.reset()
                }

            })

        e.preventDefault()
    }
    return (
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#FEF9E7', marginTop: '80px', marginBottom: '100px', padding: '30px' }} >
            <Container >
                <Grid item xs={12} sx={{ mt: 10 }} >

                    <Typography style={{ fontWeight: 700 }} variant="h4" gutterBottom component="div">
                        <span style={{ color: '#F14493' }}> Let us support your</span> <br /> <span style={{ color: '#F14493' }}>patients,  professionally</span>.
                    </Typography>

                </Grid>
                <Grid item xs={12} style={{ marginTop: '5%' }}>

                    <form onSubmit={handleSubmit} >
                        <TextField
                            sx={{ m: 1, width: '40ch', bgcolor: 'white' }}
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            name='first name'
                            onBlur={handleOnBlur}
                            required

                        />
                        <TextField
                            sx={{ m: 1, width: '40ch', bgcolor: 'white' }}
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            name='last name'
                            onBlur={handleOnBlur}
                            required
                        />
                        <br />
                        <TextField
                            sx={{ m: 1, width: '40ch', bgcolor: 'white' }}
                            id="outlined-basic"
                            label="Email Address"
                            variant="outlined"
                            name='email'
                            onBlur={handleOnBlur}
                            required

                        />
                        <TextField
                            sx={{ m: 1, width: '40ch', bgcolor: 'white' }}
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                            name='phone number'
                            onBlur={handleOnBlur}
                            required

                        />
                        <br />
                        <TextField
                            sx={{ mt: 2, width: '64%', bgcolor: 'white' }}
                            id="outlined-textarea"
                            label="Your Message"
                            placeholder="Placeholder"
                            multiline
                            rows={7}
                            name='description'
                            onBlur={handleOnBlur}
                            required

                        />
                        <br />
                        <Button
                            sx={{ mt: 1, bgcolor: '#F14493' }}
                            type='submit' variant="contained">Send Messages</Button>

                    </form>
                </Grid>
            </Container>
        </Box>
    );
};

export default SendMessages;