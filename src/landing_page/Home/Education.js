import React from 'react';
 function Education(){
    return(
        <div className='container mt-3' >
        <div className='row d-flex align-items-center text-center text-md-start'>
            <div className='col-6 d-flex justify-content-center'>
                <img style={{width:'70%'}} src='media/images/education.svg'/>
            </div>
            <div className='col-6 text-muted' style={{paddingRight:'150px'}}>
                
                <h2>Free and open market education
                </h2><br></br>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                
                <div>
                <a href='' style={{textDecoration:'none'}} className='fw-semibold '>
                Varsity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>

                <p className='pt-4'>
                TradingQ&A, the most active trading and investment community in India for all your market related queries.
                </p>
                <a href='' style={{textDecoration:'none'}} className=' fw-semibold'>
                TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </div>               
            </div>
        </div>
        </div>
    
    );
}
export default Education;