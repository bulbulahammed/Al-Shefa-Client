import React from 'react';
import appointmentBg from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from './../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section 
        style={{
            background:`url(${appointmentBg})`
        }}
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-180px]' src={doctor} alt="doctor"/>
            </div>
            <div className='flex-1  sm:py-20 sm:px-7 md:py-20 md:px-7'>
                <h3 className='text-xl text-secondary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white font-bold py-5'>Make an Appointment Today</h2>
                <p className='text-white pb-8 text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;