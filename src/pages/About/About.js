import React from 'react';
import AboutBanner from './AboutBanner';
import AboutHero from './AboutHero';
import CheckUp from './CheckUp';
import CounterUp from './CounterUp';
import DoctorsTeam from './DoctorsTeam';

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
            {/* Doctors Team */}
            <DoctorsTeam></DoctorsTeam>
        </div>
    );
};

export default About;