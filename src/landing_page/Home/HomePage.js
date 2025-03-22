import React from 'react';
import Education from './Education';
import HeroSection from './HeroSection';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Stats from './Stats';
import Award from './Award';
import Footer from '../footer';
import Navbar from '../Navbar';
 function Homepage(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <Award/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>
        </>
    );
}
export default Homepage;