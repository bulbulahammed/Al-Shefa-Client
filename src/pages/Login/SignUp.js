import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from './../../firebase.init';
import useToken from './../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    //   Custom Hooks
    const [token] = useToken(user || gUser);
      
      const navigate = useNavigate();

    // Loading
    if(loading || gLoading || updating){
        return <Loading></Loading>
    }

    let signInError;
    // Error
    if(error || gError || UpdateError){
        signInError = <p className='text-red-500 text-2xs'>{error?.message || gError?.message || UpdateError?.message}</p>
    }

        //    google User
        if(token){
            console.log(token);
             navigate("/appointment");
        }
        const onSubmitForm = async data =>{
            console.log(data);
            await createUserWithEmailAndPassword(data.email,data.password);
            await updateProfile({ displayName: data.name });
            // console.log("Update Done");
            // navigate("/appointment");
        }
    return (
        <section className="">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-10 text-xl text-center">Sign Up</h1>
                        
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
                                <span className='label-text text-sm'>Password</span>
                            </label>
                            <input
                                type="password"
                                className="input input-bordered w-full max-w-xs"
                                name="password"
                                placeholder=""
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'You must enter A valid Password',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'This is not long enough to a Strong Password',
                                    },
                                    maxLength: {
                                        value: 32,
                                        message: 'This is too long',
                                    },
                                })} />
                                <label className="label">
                                    {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === "maxLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                                <p className='text-2xs mb-4'>Forgot Password?</p>
                                {signInError}
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded btn-accent text-white hover:bg-green-dark focus:outline-none my-1"
                            >Sign Up</button>
                        </form>
                        <p className="text-xs">Already Have An Account?<Link to="/login" className="text-secondary">Log In</Link></p>
                    {/* -----------------------Divider---------------------- */}
                    <div className="divider">OR</div>
                    <button 
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline w-full"
                    >Continue With Google</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;