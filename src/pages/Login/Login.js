import { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import auth from './../../firebase.init';
import useToken from './../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect (()=>{
        if(token){
            navigate(from, {replace: true});
        }
        
    },[token,from, navigate])

      // Loading
      if(loading || gLoading){
        return <Loading></Loading>
    }

    // Error
    if(error || gError){
        signInError = <p className='text-red-500 text-2xs'>{error?.message || gError?.message}</p>
    }

    //    google User

    const onSubmitForm = data =>{
        signInWithEmailAndPassword(data.email,data.password);
    }

    return (
        <section className="">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-10 text-xl text-center">Login</h1>
                        
                        <form onSubmit={handleSubmit(onSubmitForm)}>
                            {/*----------- Label For Password ------------*/}
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
                            >Log In</button>
                        </form>
                        <p className="text-xs">New to Al Shefa?<Link to="/signup" className="text-secondary">Create New Account</Link></p>
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

export default Login;
