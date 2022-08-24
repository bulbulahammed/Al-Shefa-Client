import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from "../../assets/images/chair.png";


const AppointmentBanner = ({date,setDate}) => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="Appointment banner" />
                <div>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                    <p className='text-secondary'>You have selected: {format(date,'PP')} </p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;