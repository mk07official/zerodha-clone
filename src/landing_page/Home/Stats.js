import React from 'react';
 function stats(){
    return(
        <div className='container ' >
            <div className='row m-4 pl-4'>
                <div className='col-5 pr-5' style={{paddingLeft:'70px'}}>
                    <h2 className="fw-semibold text-muted">Trust with confidence</h2><br></br>

                    <h4 className="fw-semibold text-muted">Customer-first always</h4>
                    <p className="text-muted ">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p><br></br>
                    <h4 className="fw-semibold text-muted">No spam or gimmicks</h4>
                    <p className="text-muted ">No gimmicks, spam, "gamification", or annoying push  notifications. High quality apps that you use at your pace, the way you like.</p><br></br>

                    <h4 className="fw-semibold text-muted">The Zerodha universe</h4>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p><br></br>

                    <h4 className="fw-semibold text-muted">Do better with money</h4>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 pl-4 '>
                    <img style={{width:'75%',marginLeft:'60px',marginTop:'40px'}} src='media/images/image.png' alt="#"/>
                    <div className='text-center'>
                    <a href='#' style={{textDecoration:'none'}} className='px-3 fw-semibold'>
                    Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <a href='#' style={{textDecoration:'none'}} className='px-4 fw-semibold'>
                    Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>               
                </div>
                <div className='press-logo-container'>
                    <img className='mt-5 p-4' style={{width:'60%'}} src='media/images/presslogos.png' alt='presslogo'/>
                </div>
            </div>
        </div>
    );
}
export default stats;