import React from 'react';

const Doctor = ({doctor}) => {
    return (
<div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={doctor.img} alt="Doctor" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title uppercase">{doctor.name}</h2>
    <p>{doctor.specialty}</p>
  </div>
</div>
    );
};

export default Doctor;