import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading';

const ManageDoctors = () => {
    const {data: doctors,isLoading} = useQuery(['doctors'],()=> fetch('http://localhost:5000/doctor',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    }).then(res =>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Doctor: {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctors;