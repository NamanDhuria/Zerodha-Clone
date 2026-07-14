import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#ffffff" }}>

        <div className="container p-2">
          <Link className="navbar-brand" to={"/"}>
            <img
              src="media/image/logo.svg"
              alt="logo"
              style={{ width: "25%" }}
            />
          </Link>

          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          <form className="d-flex" role="search">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="" to={"/signup"}
                  style={{padding:"10px", textDecorationColor:"#666666"}}>
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/about"}
                  style={{padding:"10px", textDecorationColor:"#666666"}}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="" to={"/product"}
                  style={{padding:"10px", textDecorationColor:"#666666"}}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="" to={"/pricing"}
                  style={{padding:"10px", textDecorationColor:"#666666"}}>
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="" to={"/support"}
                  style={{padding:"10px", textDecorationColor:"#666666"}}>
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
