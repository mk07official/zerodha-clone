import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col">
          <h1 className="text-muted">The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div
            className="container text-center text-muted"
            style={{ marginTop: "20px", padding: "90px" }}
          >
            <div className="row">
              <div className="col">
                <img
                  src="media/images/zerodhaFundhouse.png"
                  alt=""
                  style={{ width: "70%", paddingBottom: "20px" }}
                />
                <p>
                  Our asset management venture that is creating simple and
                  transparent index funds to help you save for your goals.
                </p>
              </div>
              <div className="col">
                <img
                  src="media/images/sensibullLogo.svg"
                  alt=""
                  style={{ width: "80%", paddingBottom: "20px" }}
                />
                <p>
                  Options trading platform that lets you create strategies,
                  analyze positions, and examine data points like open interest,
                  FII/DII, and more.
                </p>
              </div>
              <div className="col">
                <img
                  src="media/images/tijori.svg"
                  alt=""
                  style={{ width: "60%", paddingBottom: "20px" }}
                />
                <p>
                  Investment research platform that offers detailed insights on
                  stocks, sectors, supply chains, and more.
                </p>
              </div>
            </div>
          </div>
          <div
            className="container text-center text-muted"
            style={{ padding: "90px", marginTop: "-100px" }}
          >
            <div className="row">
              <div className="col">
                <img
                  src="media/images/streak-logo.png"
                  alt=""
                  style={{ width: "60%", paddingBottom: "20px" }}
                />
                <p>
                  Systematic trading platform that allows you to create and
                  backtest strategies without coding.
                </p>
              </div>
              <div className="col">
                <img
                  src="media/images/smallcase-logo.png"
                  alt=""
                  style={{ width: "70%", paddingBottom: "20px" }}
                />
                <p>
                  Thematic investing platform that helps you invest in
                  diversified baskets of stocks on ETFs.
                </p>
              </div>
              <div className="col">
                <img
                  src="media/images/ditto-logo.png"
                  alt=""
                  style={{ width: "50%", paddingBottom: "20px" }}
                />
                <p>
                  Personalized advice on life and health insurance. No spam and
                  no mis-selling. Sign up for free.
                </p>
              </div>
            </div>
            <Link to="/Signup" className='p-2 btn btn-primary fs-5 mb-4' style={{width:"15%", margin:"60px"}}>Sign for free</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
