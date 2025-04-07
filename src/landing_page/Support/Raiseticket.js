import React from 'react';
import { Link } from 'react-router-dom';
function Raiseticket() {
    return ( 
        <div className ='container mb-5 '>
            <div className ='row'>
                <h3 className=' text-muted mt-5 px-5'>To create a ticket, select a relevant topic</h3>
                <div className='container'>
                    <div className='row ' >
                        <div className='col-4  p-5'>
                            <h5 ><i class="fa fa-plus-circle" aria-hidden="true" ></i>
                            Account Opening</h5>
                                <Link to="/"  style={{textDecoration:'none'}}>Resident individual</Link><br/>
                                <Link to="/"  style={{textDecoration:'none'}}>Minor</Link><br/>
                                <Link to="/"  style={{textDecoration:'none'}}>Non Resident Indian (NRI)</Link><br/>
                                <Link to="/"  style={{textDecoration:'none'}}>Company, Partnership, HUF and LLP</Link><br/>
                                <Link to="/"  style={{textDecoration:'none'}}>Glossary</Link><br/>
                        </div>
                        <div className='col-4  p-5'>
                            <h5>Your Zerodha Account</h5>
                            <Link to="/"  style={{textDecoration:'none'}}>Your Profile</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Account modification</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Client Master Report (CMR) and Depository Participant (DP)</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Nomination</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Transfer and conversion of securities</Link><br/>
                        </div>
                        <div className='col-4  p-5'>
                            <h5> Kite</h5>
                            <Link to="/"  style={{textDecoration:'none'}}>IPO</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Trading FAQs</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Margin Trading Facility (MTF) and Margins</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Charts and orders</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Alerts and Nudges</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>General</Link><br/>
                        </div>
                    </div>
                </div>
                    <div className='row'>
                        <div className='col-4 p-5'>
                            <h5>Funds</h5>
                            <Link to="/"  style={{textDecoration:'none'}}>Add money</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Withdraw money</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Add bank accounts</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>eMandates</Link><br/>
                        </div>
                        <div className='col-4 p-5'>
                            <h5>Console</h5>
                            <Link to="/"  style={{textDecoration:'none'}}>Portfolio</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Corporate actions</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Funds statement</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Reports</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Profile</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Segments</Link><br/>
                        </div>
                        <div className='col-4 p-5'>
                            <h5>Coin</h5>
                            <Link to="/"  style={{textDecoration:'none'}}>Understanding mutual funds and Coin</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Coin app</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Coin web</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>Transactions and reports</Link><br/>
                            <Link to="/"  style={{textDecoration:'none'}}>National Pension Scheme (NPS)</Link><br/>                                          
                        </div>
                    </div>
              </div>
        </div>
     );
}

export default Raiseticket;