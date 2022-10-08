import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from './../../firebase.init';

const BookingModal = ({treatment,date,setTreatment,refetch}) => {
    const {_id,name, slots,price} = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date,"PP")

    const handleBooking = event=>{
        event.preventDefault();
        const  slot = event.target.slot.value;
        setTreatment(null);
        
        const booking ={
            treatmentId: _id,
            treatment: name,
            date:formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }

        fetch('http://localhost:5000/add-booking',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            // To Close the modal
            if(data.success){
               toast(`Appointment is set, ${formattedDate} at${slot}`) 
            }else{
                toast.error(`You already have an appointment on, ${data.booking?.date} at${data.booking?.slot}`) 
            }
            refetch();
            setTreatment(null);
        })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-5 justify-items-center'>
                        <input type="text" disabled value={format(date,'PP')} className="input input-bordered w-full max-w-xs"/>
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot,index)=>
                                <option key={index} 
                                value={slot}>{slot}
                                </option>)
                            }
                        </select>
                        <input name="name" type="text" disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />    
                        <input name="email" type="email" disabled value={user?.email || ""} className="input input-bordered w-full max-w-xs" />    
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />    
                        <input type="submit" value="Submit" className="input input-bordered w-full max-w-xs bg-gradient-to-r from-primary to-secondary text-white uppercase font-bold"/>    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;