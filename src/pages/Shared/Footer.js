import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from "../../assets/images/footer.png";

const Footer = () => {
    return (
    <footer className="px-12 bg-cover bg-center"
    style={{
        background: `url(${footerBg})`,
        backgroundSize:"cover",
    }}>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div>
            <h4 className='uppercase font-bold text-lg text-gray-500 mb-5 mt-16'>Services</h4>
            <div className='flex flex-col text-gray-500'>
                <Link className='text-base py-2' to="/">Emergency Checkup</Link>
                <Link className='text-base py-2' to="/">Monthly Checkup</Link>
                <Link className='text-base py-2' to="/">Weekly Checkup</Link>
                <Link className='text-base py-2' to="/">Deep Checkup</Link>
            </div>
        </div>
        <div>
            <h4 className='uppercase font-bold text-lg text-gray-500 mb-5 mt-16'>Oral Health</h4>
            <div className='flex flex-col text-gray-500'>
                <Link className='text-base py-2' to="/">Fluoride Treatment</Link>
                <Link className='text-base py-2' to="/">Cavity Filling</Link>
                <Link className='text-base py-2' to="/">Teeth Whitening</Link>
            </div>
        </div>
        <div>
            <h4 className='uppercase font-bold text-lg text-gray-500 mb-5 mt-16'>Our Address</h4>
            <div className='flex flex-col text-gray-500'>
                <p className='text-base py-2'>OUR ADDRESS
New York - 101010 Hudson</p>
            </div>
        </div>
    </div>
    <div className='text-center text-black font-base py-11'>
            <p>Copyright {new Date().getUTCFullYear()} All Rights Reserved</p>
    </div>
    </footer>
    );
};

export default Footer;