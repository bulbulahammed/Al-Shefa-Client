import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const imgStorageKey = "217c7fe015a3f8046407326d976c0197";
    const onSubmitForm = async data =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image',image)
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url,{
            method: 'POST',
            body: formData,
        })
        .then(res =>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty:data.specialty,
                    img: img,
                }
                // Send it to Database
                fetch('https://al-shefa-server.up.railway.app/doctor',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
    
                    },
                    body: JSON.stringify(doctor),
                })
                .then(res => res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success("Doctor Added Successfully");
                        reset();
                    }
                    else{
                        toast.error("Failed To Add !");
                    }
                })
                
            }
        })
    }
    
    const { data: services, isLoading } = useQuery(['users'], () => fetch('https://al-shefa-server.up.railway.app/service/',
        {
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
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                {/*----------- Label For Password ------------*/}
                <label className='label'>
                    <span className='label-text text-sm'>Name</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    name="name"
                    placeholder="Type Your Name"
                    {...register('name', {
                        required: {
                        value: true,
                        message: "You must enter Doctor's Name",
                        }
                    })} 
                />
                {/* Error Message */}
                <label className="label">
                    {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>

                {/* Label for Email Input */}
                <label className='label'>
                    <span className='label-text text-sm'>Email</span>
                </label>
                {/*Doctor's Email Input */}
                <input
                    type="email"
                    className="input input-bordered w-full max-w-xs"
                    name="email"
                    placeholder="Type Your Email"
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
                    })} 
                />

                {/*Email input  Error Message */}
                <label className="label">
                    {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === "maxLength" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                </label>
                                
                {/*Select Doctor's Specialty */}
                <label className='label'>
                    <span className='label-text text-sm'>Specialty</span>
                </label>
                <select 
                    {...register('specialty')} 
                    className="select select-bordered w-full max-w-xs">
                        {
                            services.map(service => 
                            <option
                            key={service._id}
                            value={service.name}
                            >
                             {service.name}</option>)
                        }
                </select>

                {/*Label for  Doctors Photo */}
                <label className='label'>
                    <span className='label-text text-sm'>Photo</span>
                </label>
                {/* Doctor's photo Input */}
                <input
                    type="file"
                    className="input input-bordered w-full max-w-xs"
                    name="image"
                    placeholder=""
                    {...register('image', {
                        required: 
                            {
                                value: true,
                                message: "Image is Required",
                            }
                    })}
                />
                {/* Error Message for Doctor's phot input */}
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