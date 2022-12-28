import React from 'react';
import CountUp from 'react-countup';
import exp from '../../assets/images/count-1.png';
import specialist from '../../assets/images/count-2.png';
import department from '../../assets/images/count-3.png';
import patient from '../../assets/images/count-4.png';
import counterBg from '../../assets/images/counter-bg.png';

const CounterUp = () => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 my-24' style={{ backgroundImage: `url(${counterBg})` }}>
            <div className='text-center'>
                <div className='flex justify-evenly'>
                    <img src={exp} alt="Year Of Experience"/>
                </div>
                <p className='pb-3 text-gray-500 text-base'>Years Of Experience</p>
                <h2 className='text-5xl font-bold'>
                    <CountUp end={71} duration={5} />
                </h2>
            </div>
            <div className='text-center'>
                <div className='flex justify-evenly'>
                    <img src={specialist} alt="Year Of Experience"/>
                </div>
                <p className='pb-3 text-gray-500 text-base'>Medical Specialist</p>
                <h2 className='text-5xl font-bold'>
                    <CountUp end={1725} duration={5} />
                </h2>
            </div>
            <div className='text-center'>
                <div className='flex justify-evenly'>
                    <img src={department} alt="Year Of Experience"/>
                </div>
                <p className='pb-3 text-gray-500 text-base'>Department</p>
                <h2 className='text-5xl font-bold'>
                    <CountUp end={352} duration={5} /> 
                </h2>
            </div>
            <div className='text-center'>
                <div className='flex justify-evenly'>
                    <img src={patient} alt="Year Of Experience"/>
                </div>
                <p className='pb-3 text-gray-500 text-base'>Happy Patients</p>
                <h2 className='text-5xl font-bold'>
                    <CountUp end={147570} duration={5} />
                </h2>
            </div>
        </div>
    );
};

export default CounterUp;