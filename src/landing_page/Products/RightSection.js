import React from 'react';
function RightSection({imageurl,
    productname,
    productdescription,
    learnmore,}) {
    return ( 
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-6 p-5'>
                <h1 style={{fontWeight:'semi-bold'}}>{productname}</h1>
                <p className='text-muted'>{productdescription}</p>
                <div>
                <a href={learnmore} style={{textDecoration:'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className='col-6'>
                <img src={imageurl}  alt='console'/>
            </div>
        </div>
    </div>
     );
}

export default RightSection;