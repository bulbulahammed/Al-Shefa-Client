import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '')
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
                <button type="submit" disabled={!stripe}>
                Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;



/**
 * Steps of Payment method
 * 
 * Steps
 * 1.Install Stripe and React Stripe
 * 2.Create Stripe Account
 * 3.Get Publishable Key PK__
 * 4.Create Elements Wrapper using Publishable key
 * 5.Create Checkout Form using Card Element
 * 6.Get Card Element Info(Credit Card Info)
 * 7.Get Credit Card Info/Error ----> Display Card Error (If Any)
 * 8.Get client Secret from backend via payment intent Post API
 * 9.
 * 
 *  */ 