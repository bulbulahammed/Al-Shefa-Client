import React from 'react';

const Service = ({service}) => {
    const {name, slots} = service;
    return ( 
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-secondary font-bold">{name}</h2>
                <p>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try Another date.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "Spaces"  : "Space"} Available</p>
                <div class="card-actions justify-center">
                <button  disabled={slots.length === 0} className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-primary to-secondary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;