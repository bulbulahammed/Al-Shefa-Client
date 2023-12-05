import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirm = ({deletingDoctor,refetch,setDeletingDoctor}) => {
    const {name,email} = deletingDoctor;
    const handleDelete = () =>{
        fetch(`https://al-shefa-server-bulbulahammed.vercel.app/doctor/${email}`,{
            method: 'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.deletedCount){
                toast.success(`Doctor: ${name} deleted.`)
                setDeletingDoctor(null);
                refetch();
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are You Sure Want To Delete Dr. {name} ?</h3>
                    <p className="py-4">Dr. {name} Will be Delete Permanently from Dashboard!</p>
                    <div className="modal-action">
                    <button onClick={()=>handleDelete()} className="btn btn-xs btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirm;