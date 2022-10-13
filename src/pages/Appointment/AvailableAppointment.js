import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    
    const { data: services, isLoading,refetch} = useQuery(['available', formattedDate], () => fetch(`https://server-alshefa.onrender.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }


    // useEffect(() => {
    //     fetch(`https://server-alshefa.onrender.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    return (
        <div className=''>
            <h3 className='text-xl text-secondary text-center'>Available Appointment On: {format(date,'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service=><Service 
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        ></Service>)
                }
            </div>
            {
                treatment && <BookingModal 
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}
                refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;