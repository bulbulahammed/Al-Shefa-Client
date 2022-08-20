import React from 'react';
import chair from "../../assets/images/chair.png";
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
    <div className="hero min-h-screen px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={chair} className="lg:w-1/2 sm:w-full rounded-lg shadow-2xl" alt="Hero img" />
            <div>
                <h1 className="text-5xl font-bold">Your new smile start here.</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <PrimaryButton>Get Start</PrimaryButton>
            </div>
        </div>
    </div>
    );
};

export default Banner;