import React from "react";
import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div
      className="container  "
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="row">
        <h2
          className="text-center text-muted"
          style={{ fontWeight: "500", marginBottom: "40px" }}
        >
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h2>
      </div>
      <div
        className="row mt-5 border-top "
        style={{ fontSize: "16px", paddingLeft: "90px",paddingRight:'90px',paddingTop:'100px',marginLeft: "120px",marginRight:'120px' }}
      >
        <div className="col-6">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <br />
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <br />
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
            <br />
          </p>
        </div>
        <div className="col-6">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <br />
          <p>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              Rainmatter,{" "}
            </Link>
            our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <br />
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              saying about us.
            </Link>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
