import React from 'react';
import Hero from '../components/Hero';
import MotionMetrics from '../components/MotionMetrics';
import LogoTicker from '../components/LogoTicker';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <MotionMetrics />
            <LogoTicker />
            <Services />
            <Portfolio />
            <Testimonials />
            <About />
            <Contact />
        </>
    );
};

export default Home;
