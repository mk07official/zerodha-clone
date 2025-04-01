import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom bg-light">
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img
            style={{ width: "25%", marginLeft: "15%", padding: "10px" }}
            src="media/images/logo.svg"alt="logo"
          />
        </Link>
        <div style={{marginRight:'100px'}} id="navbarSupportedContent">
          <ul class="navbar-nav mb-lg-0 " style={{fontWeight:'500'}}>
            <li class="nav-item">
              <Link class="nav-link " aria-current="page" to="/Signup">
                Signup
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="/About">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Products">
                Products
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="/Pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link" to="/Support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
