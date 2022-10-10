import React from 'react';
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from '../Shared/PrimaryButton';

const AboutHero = () => {
    return (
        <div className="hero my-16">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="lg:w-1/3 sm:w-full rounded-lg shadow-2xl" alt="Treatment img"/>
                <div className='ml-24 text-left'>
                    <h3 className='text-xl'>OUR MEDICAL</h3>
                    <h2 className="text-5xl font-bold text-accent text-start mt-0 sm:mt-10">We're setting Standards in Research what's more, Clinical Care.</h2>
                    <p className="py-6 text-start text-base text-black">We provide the most full medical services, so every person could have the portunity o receive qualitative medical help.
                    Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of uality training and experience.</p>
                    <PrimaryButton>Know More</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;