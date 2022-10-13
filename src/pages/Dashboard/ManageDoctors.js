import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import DeleteConfirm from './DeleteConfirm';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState();
    const {data: doctors,isLoading,refetch} = useQuery(['doctors'],()=> fetch('https://server-alshefa.onrender.com/doctor',{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
    }).then(res =>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                   {/* Table Head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* Table Row */}
                        {
                            doctors.map((doctor,index)=><DoctorRow
                            key={index}
                            doctor={doctor}
                            index={index}
                            refetch={refetch}
                            setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
              deletingDoctor && 
              <DeleteConfirm
              deletingDoctor={deletingDoctor}
              refetch={refetch}
              setDeletingDoctor={setDeletingDoctor}
              ></DeleteConfirm>
            }
        </div>
    );
};

export default ManageDoctors;