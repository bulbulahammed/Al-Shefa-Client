import React from 'react';
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import treatment from "../../assets/images/treatment.png";
import whitening from "../../assets/images/whitening.png";
import Service from './Service';

 
const Services = () => {
    const services =[
       {
         _id:1,
         name:"Fluoride Treatment",
         description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         img:fluoride,
        },
       {
         _id:2,
         name:"Cavity Filling",
         description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         img:cavity,
        },
       {
         _id:3,
         name:"Teeth Whitening",
         description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
         img:whitening,
        },

    ]
    return (
        <div className='text-center'>
            <div className="">
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl py-3'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =><Service 
                        key={service._id} 
                        service={service}>
                        </Service>)
                }
            </div>
            <div className="hero my-16">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="lg:w-1/3 sm:w-full rounded-lg shadow-2xl" alt="Treatment img"/>
                    <div className='ml-24 text-left'>
                        <h1 className="text-5xl font-bold text-accent text-start">Exceptional Dental Care, on Your Terms.</h1>
                        <p class="py-6 text-start text-base text-black">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn btn-primary text-white uppercase mt-10">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;