import React from 'react';

function Awards(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img style={{width:'80',marginLeft:'50px',paddingBottom:'10px'}} src='media/images/largestbroker.svg' alt='largestbroker'/>
                </div>
                <div className='col-6 p-5 mt-4'>
                        <h1>Largest stock broker in india</h1>
                        <p className='mb-5'>
                            2+ million Zerodha client contribute to over 15% of all retail order volumes in india daily by trading and investing in:
                        </p>
                        <br></br>
                        <div className='row'>
                            <div className='col'>
                            <ul>
                            <li>
                                <p>
                                    Future and Options
                                </p>
                            </li>
                            <li>
                                <p>
                                    Commodity Derivatives
                                </p>
                            </li>
                            <li>
                                <p>
                                    Currency Derivatives
                                </p>
                            </li>
                        </ul>        
                            </div>
                            <div className='col'>
                            <ul>
                            <li>
                                <p>
                                    Stocks and IPO's
                                </p>
                            </li>
                            <li>
                                <p>
                                    Direct mutual funds
                                </p>
                            </li>
                            <li>
                                <p>
                                    Bonds and Govt.securities
                                </p>
                            </li>
                        </ul>       
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;