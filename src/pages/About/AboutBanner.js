import React from 'react';
import Background from '../../assets/images/about-banner.jpg';

const AboutBanner = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${Background})` }}>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-green-500 my-20">About Us</h1>
            </div>
        </div>
        </div>
    );
};

export default AboutBanner;