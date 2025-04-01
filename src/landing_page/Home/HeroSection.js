import React from 'react';
import { Link } from 'react-router-dom';

 function HeroSection(){
    return(
        <div className ='container p-5'>
            <div className ='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero-image' className='mb-4'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/Signup" className='p-2 btn btn-primary fs-5 mb-4' style={{width:"15%", margin:"0 auto"}}>Get Strated</Link>
            </div>
        </div>
    );
}
export default HeroSection;