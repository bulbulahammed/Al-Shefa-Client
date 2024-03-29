import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing,setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret,setClientSecret] = useState("");


    const {_id,price,patient,patientName} = appointment;

    useEffect( ()=>{
        fetch("https://al-shefa-server-bulbulahammed.vercel.app/create-payment-intent",{
            method:'POST',
            headers: {
                'content-type':'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret);
            }
        });
        
    },[price])

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
        setSuccess("");
        setProcessing(true);

        // Confirm Payment
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: patient,
                },
              },
            },
          );
          if(intentError){
            setCardError(intentError?.message);
            setProcessing(false);
          }else{
            setCardError("");
            setTransactionId(paymentIntent.id)
            setSuccess("Congrats! Your Payment Is Completed");
            // Store payment on Database
            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id,
                
            }
            fetch(`https://al-shefa-server-bulbulahammed.vercel.app/booking/${_id}`,{
                method:'PATCH',
                headers: {
                    'content-type':'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data =>{
                setProcessing(false);
            })
          }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                            invalid: {
                            color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing?(<Loading/>):(<button className='btn btn-xs btn-success text-white' type="submit" disabled={!stripe || !clientSecret}>
                Pay
                </button>)}
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && 
                <div>
                    <p  className='text-green-500'>{success}</p>
                    <p className='text-orange-500'>Your transactionId: {transactionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;
