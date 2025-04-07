import React from "react";
function HeroSection() {
  return (
    <div className="container">
      <div className="row text-center pt-5 pb-5 ">
        <h1 className="mt-5 fs-1">Charges</h1>
        <p className="text-muted fs-3">List of all charges and taxes</p>
      </div>
      <div className="row text-center"  id="pricinglabel">
        {/* Card 1 */}
        <div className="col-4">
          <img src="media/images/pricing-eq.svg" />
          <p className=" ">
          Free equity delivery
          </p>
          <p className="text-muted fs-5 fw-normal">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>

        {/* Card 2 */}
        <div className="col-4" style={{ color: "orange" }}>
          <img src="media/images/other-trades.svg" />
          <p className=" ">Intraday and F&O trades</p>
          <p className="text-muted fs-5 fw-normal">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>

        {/* Card 3 */}
        <div className="col-4">
          <img src="media/images/pricing-eq.svg" />
          <p className=" ">
          Free direct MF
          </p>
          <p className="text-muted fs-5 fw-normal">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
