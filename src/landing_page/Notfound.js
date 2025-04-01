import React from 'react';

function Notfound(){
    return (
        <div className ='container m-5 mb-5' style={{paddingLeft:'200px'}}>
            <div className ='row text-muted'>
                <h1 className='mt-4 '>404 error,</h1>
                <p className='pb-4 '>Sorry, The page you are looking for does not exist.</p>
            </div> 
        </div>
    );
}
export default Notfound;