import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date,setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}/>
            <AvailableAppointment date={date}/>
        </div>
    );
};

export default Appointment;