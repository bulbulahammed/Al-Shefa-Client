import React from 'react';
import Contact from '../Home/Contact';
import ContactBanner from './ContactBanner';

const ContactPage = () => {
    return (
        <div>
            {/* Contact Banner */}
            <ContactBanner></ContactBanner>
            {/* Contact Form */}
            <Contact/>
        </div>
    );
};

export default ContactPage;