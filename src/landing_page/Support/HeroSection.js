import React from 'react';
function HeroSection() {
    return ( 
        <section className='container-fluid' id="supporthero">
            <div className="d-flex justify-content-between align-items-center " id="supportwrapper" style={{paddingInlineEnd:'90px',paddingInlineStart:'50px'}} >
                    <h4>Support Portal</h4>
                    <a href='/'>Track Ticket</a>
            </div>
            <div className="row p-5 mb-4" >
                    <div className='col-6' id="ticketsearch">
                        <h2>Search for an answer or browse help topics to create a ticket</h2>
                        <input placeholder='Eg: how to active F&O , why my order is getting rejected....' /> <br/><br/>
                        <span><a href=''>Track account opening,</a></span>
                        <span><a href=''>Track segment activation,</a></span>
                        <span><a href=''>Intraday margins,</a></span>
                        <span><a href=''>Kite user manual,</a></span>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-5'>
                    <h2>Featured</h2>
                    <ol id='featuredsection'>
                        <li><a href=''>1.Change in expiry day of NSE derivative contracts from<br/> April 04, 2025 [Withheld]</a></li>
                        <li><a href=''>2.Surveillance measure on scrips - April 2025</a></li>
                    </ol> 
                    </div>
            </div>
        </section>
     );
}

export default HeroSection;