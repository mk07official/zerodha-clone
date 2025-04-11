import React from "react";
function LeftSection({
  imageurl,
  productname,
  productdescription,
  trydemo,
  learnmore,
  googleplay,
  appstore,
}) {
  return (
    <div className='container'>
        <div className='row m-4 align-items-center'>
            <div className='col-6'>
                <img src={imageurl}  alt='kite'/>
            </div>
            <div className='col-6 p-5'>
                <h1 style={{fontWeight:'semi-bold'}}>{productname}</h1>
                <p className='text-muted'>{productdescription}</p>
                <div>
                <a href={trydemo} style={{textDecoration:'none'}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a href={learnmore} style={{marginLeft:'30px',textDecoration:'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className=''>
                <a href={googleplay}><img src='media/images/googlePlayBadge.svg' alt='googleplay' /></a>
                <a href={appstore} style={{marginLeft:'30px'}}><img src='media/images/appstoreBadge.svg' alt='appstore'/></a>
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default LeftSection;
