import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className=''>
            <h3 className='text-xl text-secondary text-center'>Available Appointment On: {format(date,'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><Service 
                        key={service._id}
                        service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;