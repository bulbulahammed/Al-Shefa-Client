import React from 'react';
import { Link } from 'react-router-dom';

const CheckUp = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 text-center'>
            <div className="shadow-2xl bg-base-100 mx-10">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <input type="text-area" placeholder="Write Your Message" className="input input-bordered" />
                    </div>
                    <div className="mt-6">
                    <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-primary to-secondary">Send</button>
                    </div>
                </div>
            </div>
            <div className='text-center lg:text-left mt-24'>
                <h3 className='text-lg text-secondary'>Need a Doctor for Check-up?</h3>
                <h2 className='text-4xl font-bold py-5'>Just Make an Appointment <br/>
                    and You’re Done!</h2>
                <div className='text-center lg:text-left'>
                    <Link to="/appointment">
                        <button className="btn btn-primary text-white font-bold uppercase bg-gradient-to-r from-primary to-secondary">Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckUp;