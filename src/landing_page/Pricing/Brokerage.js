import React from 'react';
import { Link } from 'react-router-dom';
function Brokerage() {
    return ( 
        <div className ='container mt-5 mb-5'>
            <div className ='row text-center text-muted'>
                <h1 className='mt-4 pb-4'>Open a Zerodha account</h1>
                <p className='pb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to='/Signup'className='p-2 btn btn-primary fs-5 mb-4' style={{width:"15%", margin:"0 auto"}}>Sign up for free</Link>
            </div>
            <div className='container p-5'>
            <div className='row '>
                <div className='col-5' style={{paddingLeft:'65px',paddingRight:'40px',marginTop:'30px'}}>
                    <h3>Unbeatable pricing </h3><br></br>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/' style={{textDecoration:'none'}}>see more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7' style={{paddingRight:'50px',marginTop:'30px'}}>
                    <div className="container">
                        <div className="row text-center d-flex justify-content-center align-items-center">
                        {/* Card 1 */}
                        <div className="col">
                        <img style={{width:'50%'}} src='media/images/pricing-eq.svg' alt='pricing'/>
                        <p className="text-muted">Free account <br></br>opening</p>
                        </div>

                        {/* Card 2 */}
                        <div className="col">
                        <img style={{width:'50%'}} src='media/images/pricing-eq.svg' alt='pricing'/>
                        <p className="text-muted">Free equity delivery<br></br> and direct mutual funds</p>
                        </div>

                        {/* Card 3 */}
                        <div className="col" style={{color:'orange'}}>
                        <img style={{width:'50%'}} src='media/images/other-trades.svg' alt='traders'/>
                        <p className="text-muted">Intraday and F&O</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
        </div>
        
     );
}

export default Brokerage;