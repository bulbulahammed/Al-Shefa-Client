import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name, slots,price} = service;
    return ( 
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-secondary font-bold text-xl">{name}</h2>
                <p>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try Another date.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? "Spaces"  : "Space"} Available</p>
                <p className='small'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <label 
                        htmlFor="booking-modal"
                        disabled={slots.length === 0} 
                        onClick={()=>setTreatment(service)}
                        className="btn btn-primary btn-sm text-white font-bold uppercase bg-gradient-to-r from-primary to-secondary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;