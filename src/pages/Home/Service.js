import React from 'react';

const Service = ({service}) => {
    return (
          <div className="card lg:mx-w-lg bg-base-100 shadow-xl my-16">
                <figure className="px-10 pt-10">
                    <img className="lg:w-1/2 sm:w-full rounded-lg shadow-2xl"  src={service.img} alt="Service"/>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{service.name}</h2>
                    <p>I{service.description}</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
    );
};

export default Service;