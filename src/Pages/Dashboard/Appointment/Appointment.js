import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/useAuth/useAuth';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Appointment = ({ date }) => {

    const [appointment, setAppointment] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        const url = `https://peaceful-ocean-02990.herokuapp.com/appointments?email=${user.email}&date=${date}`
        fetch(url)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [date])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete your appointment?')
        if (proceed) {
            const url = `https://peaceful-ocean-02990.herokuapp.com/appointments/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingAppointments = appointment.filter(appoint => appoint._id !== id)
                        setAppointment(remainingAppointments)
                    }
                })
        }
    }

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell >Service</StyledTableCell>
                            <StyledTableCell >Age</StyledTableCell>
                            <StyledTableCell >Pay With</StyledTableCell>
                            <StyledTableCell >Status</StyledTableCell>
                            <StyledTableCell >Remove Data</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointment.map((row) => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell component="th" scope="row">
                                    {row.patientName}
                                </StyledTableCell>
                                <StyledTableCell>{row.serviceName}</StyledTableCell>
                                <StyledTableCell>{row.age}</StyledTableCell>
                                <StyledTableCell>{"pay"}</StyledTableCell>
                                <StyledTableCell>{"pending"}</StyledTableCell>
                                <StyledTableCell><Button onClick={() => handleDelete(row._id)}>Remove</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Appointment;