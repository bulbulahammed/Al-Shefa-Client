import React from 'react';

const About = () => {
    return (
            <div className="hero" style={{ backgroundImage: `url("../../assets/images/about-banner.jpg")` }}>
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-green-500">About Us</h1>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
    );
};

export default About;