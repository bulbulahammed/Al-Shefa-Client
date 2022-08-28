import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const BookingModal = ({treatment,date,setTreatment}) => {
    const {_id,name, slots} = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date,"PP")

    const handleBooking = event=>{
        event.preventDefault();
        const  slot = event.target.slot.value;
        setTreatment(null);
        console.log(_id,slot,name);
        const booking ={
            treatmentId: _id,
            treatment: name,
            date:formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }
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