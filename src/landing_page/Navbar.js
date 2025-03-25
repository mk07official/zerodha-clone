import React from "react";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            style={{ width: "25%", marginLeft: "25%", padding: "10px" }}
            src="media/images/logo.svg"alt="logo"
          />
        </a>
        <div style={{marginRight:'120px'}} id="navbarSupportedContent">
          <ul class="navbar-nav mb-lg-0 " style={{fontWeight:'500'}}>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Products
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
