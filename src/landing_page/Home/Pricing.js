import React from 'react';
 function Pricing(){
    return(
        <div className='container p-5'>
            <div className='row '>
                <div className='col-5' style={{paddingLeft:'65px',paddingRight:'40px'}}>
                    <h3>Unbeatable pricing </h3><br></br>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:'none'}}>see more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-7' style={{paddingRight:'50px'}}>
                    <div className="container">
                        <div className="row text-center d-flex justify-content-center align-items-center">
                        {/* Card 1 */}
                        <div className="col">
                        <img style={{width:'50%'}} src='media/images/pricing-eq.svg'/>
                        <p className="text-muted">Free account <br></br>opening</p>
                        </div>

                        {/* Card 2 */}
                        <div className="col">
                        <img style={{width:'50%'}} src='media/images/pricing-eq.svg'/>
                        <p className="text-muted">Free equity delivery<br></br> and direct mutual funds</p>
                        </div>

                        {/* Card 3 */}
                        <div className="col" style={{color:'orange'}}>
                        <img style={{width:'50%'}} src='media/images/other-trades.svg'/>
                        <p className="text-muted">Intraday and F&O</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;