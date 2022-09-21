import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmitForm = async data =>{
        console.log("data",data);
    }
    const { data: services, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/service/'
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
    return (
        <div className=''>
            <h2>Add Doctor</h2>
            <h2>Total services: {services.length}</h2>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                            {/*----------- Label For Password ------------*/}
                            <label className='label'>
                                <span className='label-text text-sm'>Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                name="name"
                                placeholder=""
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: "You must enter Doctor's Name",
                                    }
                                })} />
                                {/* Error Message */}
                            <label className="label">
                                {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                            <label className='label'>
                                <span className='label-text text-sm'>Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full max-w-xs"
                                name="email"
                                placeholder=""
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: "You must enter Doctor's email address",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'This is not long enough to be an email',
                                    },
                                    maxLength: {
                                        value: 120,
                                        message: 'This is too long',
                                    },
                                })} />
                                {/* Error Message */}
                                <label className="label">
                                    {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    {errors.email?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    {errors.email?.type === "maxLength" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                                
                                {/* Doctor's Specialty */}
                            <label className='label'>
                                <span className='label-text text-sm'>Specialty</span>
                            </label>
                            <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                                {
                                    services.map(service => <option
                                    key={service._id}
                                    value="service.name"
                                    >{service.name}</option>)
                                }
                            </select>
                            {/* Doctors Photo */}
                            <label className='label'>
                                <span className='label-text text-sm'>Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                name="name"
                                placeholder=""
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: "You must enter Doctor's Name",
                                    }
                                })} />
                                {/* Error Message */}
                            <label className="label">
                                {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                            <button
                                type="submit"
                                className="w-full max-w-xs text-center py-3 rounded btn-accent text-white hover:bg-green-dark focus:outline-none my-1"
                            >Add</button>
                        </form>
        </div>
    );
};

export default AddDoctor;