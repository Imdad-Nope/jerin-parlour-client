import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form';
import { Alert } from '@mui/material';
import useAuth from '../../../Hooks/useAuth/useAuth';


const MakeAdmin = () => {

    const [email, setEmail] = React.useState('');
    const [success, setSuccess] = React.useState(false)
    const { reset } = useForm({})
    const { token } = useAuth()

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://peaceful-ocean-02990.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true)
                    e.target.reset()
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <h1>Admin Area: </h1>
            <Grid xs={12} sx={{ mt: 5 }}>
                <form onSubmit={handleAdminSubmit}>
                    <TextField
                        sx={{ width: '35ch' }}
                        label="Email"
                        type='email'
                        onBlur={handleOnBlur}
                        variant="standard"
                    />
                    <Button type='submit' variant="contained">Make Admin</Button>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}

            </Grid>
        </div>
    );
};

export default MakeAdmin;