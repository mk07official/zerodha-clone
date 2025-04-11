import React from "react";
import HeroSection from "./HeroSection";
import Universe from "./Universe";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
function Productpage() {
  return (
    <>
      <HeroSection />
      <LeftSection
        imageurl="media/images/kite.png"
        productname="Kite"
        productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <RightSection 
       imageurl="media/images/console.png"
       productname="Console"
       productdescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
       learnmore=""/>
      <LeftSection
        imageurl="media/images/coin.png"
        productname="Coin"
        productdescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        trydemo=""
        learnmore=""
        googleplay=""
        appstore=""
      />
      <RightSection
      imageurl="media/images/varsity.png"
      productname="Varsity mobile"
      productdescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
      learnmore=""/>
     
      <Universe />
    </>
  );
}

export default Productpage;
