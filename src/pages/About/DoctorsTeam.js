import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';
import Doctor from './Doctor';

const DoctorsTeam = () => {
    const { data: doctors, isLoading, refetch } = useQuery(['users'], () => fetch('https://server-alshefa.onrender.com/doctor'
    , {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    const DisplayDoctor = doctors.slice(0,4);

    return (
        <div className='text-center py-24'>
            <h3 className='text-gray-500 text-lg font-bold uppercase'>Doctors Team</h3>
            <h2 className='text-4xl font-bold'>Out Dedicated Doctor Team</h2>
            {/* Show Doctor */}
            <div  className='grid lg:grid-cols-4 gap-4 text-center pt-16'>
                {
                    DisplayDoctor.map(doctor =><Doctor key={doctor._id} doctor={doctor}/>)
                }
            </div>
        </div>
    );
};

export default DoctorsTeam;