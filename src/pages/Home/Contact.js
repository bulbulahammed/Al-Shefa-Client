import React from 'react';
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <div className='text-center py-16' style={{
            background: `url(${appointment})`
        }}>
            <div className='mb-20'>
                <h3 className='text-xl font-bold text-primary'>Contact Us</h3>
                <h2 className='text-4xl text-white'>Stay Connected With Us</h2>
            </div>
            <div>
                <form className='mb-10'>
                    <div>
                        <input type="email" name="email" placeholder='Email Address' className='bg-white py-3 pl-8 pr-56 placeholder-gray-500 rounded hover:outline-none outline-none focus:outline-none my-3'/>
                    </div>
                    <div>
                        <input type="text" name="subject" placeholder='Subject' className='bg-white py-3 pl-8 pr-56 placeholder-gray-500 rounded hover:outline-none outline-none focus:outline-none my-3'/>
                    </div>
                    <div>
                        <input type="text" name="message" placeholder='Your Message' className='bg-white py-16 pl-8 pr-56 placeholder-gray-500 rounded hover:outline-none outline-none focus:outline-none my-3'/>
                    </div>
                </form>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;