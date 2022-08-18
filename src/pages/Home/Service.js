import React from 'react';

const Service = ({service}) => {
    return (
          <div class="card lg:mx-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={service.img} alt="Service" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{service.name}</h2>
                    <p>I{service.description}</p>
                    <div class="card-actions">
                    </div>
                </div>
            </div>
    );
};

export default Service;