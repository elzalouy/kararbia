import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ address, phone, email }) => {
  return (
    <React.Fragment>
      <header id="this-is-top" className="b-topBar" data-aos="fade-down">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-6">
              <div className="b-topBar__addr">
                <span className="fa fa-map-marker"></span>
                {address}
              </div>
            </div>
            <div className="col-md-2 col-xs-6">
              <div className="b-topBar__tel">
                <span className="fa fa-phone"></span>
                {phone}
              </div>
            </div>

            <div className="col-md-4 col-xs-6">
              <nav className="b-topBar__nav">
                <ul>
                  <li>
                    <Link to="$">Register</Link>
                  </li>
                  <li>
                    <Link to="$">Sign in</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-2 p-0  col-xs-6">
              <div className="b-topBar__tel">
                <span className="fa fa-envelope"></span>
                {email}
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="b-nav">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-xs-4">
              <div className="b-nav__logo " data-aos="fade-right">
                <h3>
                  <Link to="/">
                    Kar<span>Arabia</span>
                  </Link>
                </h3>
                <h2>
                  <a href="home.html">Find your dream</a>
                </h2>
              </div>
            </div>
            <div className="col-sm-9 col-xs-8">
              <div className="b-nav__list" data-aos="fade-right">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#nav"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse navbar-main-slide"
                  id="nav"
                >
                  <ul className="navbar-nav-menu">
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="$" id="services">
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="$" to="topfeatured">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
