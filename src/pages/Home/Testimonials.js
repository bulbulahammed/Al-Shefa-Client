import React from 'react';
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from './Review';

const Testimonials = () => {
    const reviews =[
        {
            _id:1,
            name:"Wilson Wong",
            img:people1,
            location:"Sydney",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id:2,
            name:"Kelvin Klein",
            img:people2,
            location:"California",
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            _id:3,
            name:"Jackie Chan",
            location:"New York",
            img:people3,
            review:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
    return (
        <section className='my-32 mx-12'>
            <div className="flex justify-between mb-3">
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h4 className='text-4xl text-accent'>What Our Patients Say</h4>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="quote"/>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map((review,index)=><Review
                    key={index}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;