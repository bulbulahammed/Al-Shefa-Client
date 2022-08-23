import React from 'react';
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from './../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex  justify-center items-center lg:mt-56 mb-16 bg-cover sm:py-16 sm:px-7'>
            <div className='hidden lg:block flex-1'>
                <img className='mt-[-180px]' src={doctor} alt="doctor"/>
            </div>
            <div className='flex-1 pt-10'>
                <h3 className='text-primary font-bold text-xl'>Appointment</h3>
                <h2 className='text-4xl font-semibold text-white'>Make An Appointment Today</h2>
                <p className='text-base text-white my-5'>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;