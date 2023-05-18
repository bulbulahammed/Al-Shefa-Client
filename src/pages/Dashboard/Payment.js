import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51IeJLsIAaC3TIFJNwJ36AiZ3PVdC0gWWoRAPIgw1g7qZl3h9TsZcxBCm5pFgupkWPsU2a31pmKUTiyEIvVAcIzB200fRNeclmj');


const Payment = () => {
    const {id} = useParams();
    const url = `https://al-shefa-server-production.up.railway.app/booking/${id}`;
    const {data: appointment,isLoading} = useQuery(['booking',id], ()=> fetch(url    , {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='font-bold'>Hello, {appointment.patientName}</p>
                    <h2 className="card-title text-green-500">Treatment : <span>{appointment.treatment}</span></h2>
                    <p>Your Appointment On : <span className='text-orange-500'>{appointment.date}</span> at <span  className='text-orange-500'>{appointment.slot}</span></p>
                    <p>Please Pay : ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;