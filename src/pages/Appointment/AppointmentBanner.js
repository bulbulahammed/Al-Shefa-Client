import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from "../../assets/images/chair.png";


const AppointmentBanner = () => {
    const [date,setDate] = useState(new Date())
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="Appointment banner" />
                <div>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                    <p>You have selected: {format(date,'PP')} </p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;