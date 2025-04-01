import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
    return ( 
        <div className ='container p-5 mb-5'>
            <div className ='row text-center text-muted'>
                
                <h1 className='mt-5 ' style={{fontSize:'45px'}}>Zerodha Products</h1>
                <p  style={{fontSize:'25px'}}>Sleek, modern, and intuitive trading platforms</p>
                <p style={{fontSize:'18px'}}>Check out our <Link to="/" className='p-1' style={{textDecoration:'none'}}>investment offerings →</Link></p>
            </div>
        </div>
     );
}

export default HeroSection;