import react from 'react';
function OpenAccount(){
    return (
        <div className ='container mt-5 mb-5'>
            <div className ='row text-center text-muted'>
                <h1 className='mt-4 pb-4'>Open a Zerodha account</h1>
                <p className='pb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-4' style={{width:"15%", margin:"0 auto"}}>Sign up for free</button>
            </div> 
        </div>
    );
}
export default OpenAccount;