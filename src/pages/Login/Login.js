import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(user){
        console.log(user);
    }

    return (
        <section className="">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mb-14 text-xl text-center">Login</h1>
                        <form>
                            <input
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email" />

                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"/>
                            <button
                                type="submit"
                                className="w-full text-center py-3 rounded bg-accent text-white hover:bg-green-dark focus:outline-none my-1"
                            >Log In</button>
                        </form>
                    </div>
                    <div>
                        <p>New to Al Shefa?</p>
                    </div>
                    {/* -----------------------Divider---------------------- */}
                    <div className="divider">OR</div>
                    <button 
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline w-full"
                    >Continue With Google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;