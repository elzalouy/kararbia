/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
const Navbar = () => {
  return (
    <React.Fragment>
      <header className="site-header wow fadeIn" data-wow-duration="1s">
        <div id="main-header" className="main-header">
          <div className="container clearfix pt-2">
            <div className="logo">
              <a href="/"></a>
            </div>
            <div id="cssmenu">
              <ul>
                <li>
                  <a href="/home">Homepage</a>
                </li>
                <li className="active">
                  <a href="/cars">Car Listing</a>
                </li>
                <li className="active">
                  <a href="/blogs">Blog</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/home">Contact Us</a>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/register">Register</a>
                </li>
                <li>
                  <a href="#search">
                    <i className="fa fa-search"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Navbar;
