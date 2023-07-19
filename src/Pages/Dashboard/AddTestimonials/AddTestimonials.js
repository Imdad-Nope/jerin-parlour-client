import { Alert, Button, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const AddTestimonials = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);


    const handleSubmit = e => {
        e.preventDefault()

        if (!image) {
            alert('Please take an image')
            return;
        }
        const formData = new FormData()

        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        formData.append('description', description);

        fetch('https://jerin-parlour-server.onrender.com/testimonials', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset('');
                    setSuccess('Files is uploaded successfully.');
                }

            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                Testimonials
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '40ch' }}
                    id="standard-basic"
                    label="Name"
                    type='name'
                    onChange={e => setName(e.target.value)}
                    required
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '40ch', mt: 2 }}
                    id="outlined-textarea"
                    label="Description"
                    placeholder="Placeholder"
                    multiline
                    rows={7}
                    type='description'
                    onChange={e => setDescription(e.target.value)}
                    required
                />
                <br />
                <TextField
                    sx={{ width: '40ch', my: 2 }}
                    id="standard-basic"
                    label="Email"
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    required
                    variant="standard" />
                <br />
                <label htmlFor="contained-button-file">
                    <Input
                        accept="image/*"
                        multiple type="file"
                        onChange={e => setImage(e.target.files[0])}
                    />
                    <br />
                    <Button variant="contained" type='submit'>
                        Upload
                    </Button>
                </label>
            </form>
            {success && <Alert severity="success">{success}</Alert>}

        </div>
    );
};

export default AddTestimonials;