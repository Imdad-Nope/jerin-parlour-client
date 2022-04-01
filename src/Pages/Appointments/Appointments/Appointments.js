import React, { useState } from 'react';
import Calendar from '../../Shared/Calendar/Calendar';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation />
            <Calendar date={date} setDate={setDate} />
            <AvailableAppointments date={date}
            />
        </div>
    );
};

export default Appointments;