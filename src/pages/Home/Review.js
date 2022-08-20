import React from 'react';

const Review = ({review}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.review}</p>
                <div class="card-actions justify-end flex">
                    <div flex-1>
                        <img src={review.img} alt="review img"/>
                    </div>
                    <div className='flex-1'>
                        <h2>{review.name}</h2>
                        <h4>{review.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;