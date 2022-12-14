import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='mb-11'>{review.review}</p>
                <div className="flex items-center">
                    <div flex-1>
                        <div className="avatar">
                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                            <img src={review.img} alt="review img"/>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-semibold text-accent text-xl'>{review.name}</h2>
                        <h4 className='text-base text-black'>{review.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;