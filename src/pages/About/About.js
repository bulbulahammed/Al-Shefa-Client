import React from 'react';
import AboutBanner from './AboutBanner';
import AboutHero from './AboutHero';
import CheckUp from './CheckUp';
import CounterUp from './CounterUp';

const About = () => {
    return (
        <div>
            {/* Banner */}
            <AboutBanner></AboutBanner>
            {/* About Hero */}
            <AboutHero></AboutHero>
            {/* Counter Up */}
            <CounterUp></CounterUp>
            {/* Check up And Contact */}
            <CheckUp></CheckUp>
        </div>
    );
};

export default About;