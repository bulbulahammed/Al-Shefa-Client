import React from 'react';
import { useForm } from "react-hook-form";
const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmitForm = async data =>{
        console.log("data",data);
    }
    return (
        <div>
            <h2>Add Doctor Page</h2>
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
                                        message: 'You must enter your Name',
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
                                        message: 'You must enter your email address',
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'This is not long enough to be an email',
                                    },
                                    maxLength: {
                                        value: 120,
                                        message: 'This is too long',
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'This needs to be a valid email address',
                                    },
                                })} />
                                {/* Error Message */}
                                <label className="label">
                                    {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    {errors.email?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    {errors.email?.type === "maxLength" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                    {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>

                            {/*----------- Label For Password ------------*/}
                            <label className='label'>
                                <span className='label-text text-sm'>Specialty</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full max-w-xs"
                                name="specialty"
                                placeholder=""
                                {...register('specialty', {
                                    required: {
                                        value: true,
                                        message: 'You must enter specialty',
                                    },
                                    minLength: {
                                        value: 2,
                                        message: 'This is not long enough to a be a Specialty',
                                    },
                                    maxLength: {
                                        value: 32,
                                        message: 'This is too long',
                                    },
                                })} />
                                <label className="label">
                                    {errors.specialty?.type === "required" && <span className="label-text-alt text-red-500">{errors.specialty.specialty}</span>}
                                    {errors.specialty?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.specialty.message}</span>}
                                    {errors.specialty?.type === "maxLength" && <span className="label-text-alt text-red-500">{errors.specialty.message}</span>}
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