import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div
      className="container"
      style={{ paddingTop: "", paddingBottom: "100px" }}
    >
      <div className="row">
        <h2
          className="text-center  text-muted"
          style={{ fontSize: "50px", marginBottom: "40px" }}
        >
          People
        </h2>
      </div>
      <div
        className="row mt-5 mb-5 "
        style={{ fontSize: "15px", marginLeft: "150px", marginRight: "150px" }}
      >
        <div className="col-6 text-center">
          <img src="media/images/nithinkamath.jpg" alt="nithinkamtha" style={{borderRadius:'100%',width:'60%',paddingBottom:'20px'}}/>
          <h4>Nithin kamath</h4>
          <h5 className="text-muted">Founder, CEO</h5>
        </div>
        <div className="col-6" style={{paddingTop:'30px'}}>
          <p>
          Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <br/>
          <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p><br/>
          <p>
          Playing basketball is his zen.
          </p><br/>
          <p >
          Connect on <Link to="/" style={{textDecoration:'none'}}>Homepage</Link>/<Link to="/" style={{textDecoration:'none'}}>TradingQnA</Link>/<Link to="/" style={{textDecoration:'none'}}>Twitter</Link>/
          </p>
        </div>
      </div>
      <div className="row text-center " style={{marginLeft:'150px',padding:'20px',marginTop:'50px'}}>
        <div className="col-3">
          <img src="media/images/nikhil.jpg" alt="nithinkamtha" style={{borderRadius:'100%',width:'80%',paddingBottom:'20px'}}/>
          <h4>Nikhil kamath</h4>
          <h5 className="text-muted fs-6">Co-founder & CFO</h5>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
        <img src="media/images/Kailash.jpg" alt="nithinkamtha" style={{borderRadius:'100%',width:'80%',paddingBottom:'20px'}}/>
          <h4>Dr. Kailash Nadh</h4>
          <h5 className="text-muted fs-6">CTO</h5>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
        <img src="media/images/venu.jpg" alt="nithinkamtha" style={{borderRadius:'100%',width:'80%',paddingBottom:'20px'}}/>
          <h4>Venu Madhav </h4>
          <h5 className="text-muted fs-6">COO</h5>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row text-center " style={{marginLeft:'150px',padding:'20px',marginTop:'35px'}}>
        <div className="col-3">
          <img src="media/images/hanan.jpg" alt="nithinkamtha" style={{borderRadius:'100%',width:'80%',paddingBottom:'20px'}}/>
          <h4>Hanan Delvi</h4>
          <h5 className="text-muted fs-6">CCO</h5>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
        <img src="media/images/seema.jpg" alt="nithinkamtha" style={{borderRadius:'100%',width:'80%',paddingBottom:'20px'}}/>
          <h4>Seema Patil</h4>
          <h5 className="text-muted fs-6">Director</h5>
        </div>
        <div className="col-1"></div>
        <div className="col-3">
        <img src="media/images/karthik.jpg" alt="nithinkamtha" style={{borderRadius:'100%',width:'80%',paddingBottom:'20px'}}/>
          <h4>Karthik Rangappa</h4>
          <h5 className="text-muted fs-6">Chief of Education</h5>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Team;
