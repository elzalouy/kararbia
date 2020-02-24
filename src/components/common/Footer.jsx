import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-item">
              <div className="about-us">
                <h2>About Us</h2>
                <p>
                  Irony actually meditation, occupy mumblecore wayfarers organic
                  pickled 90's. Intelligentsia as actually +1 meh photo booth.
                </p>
                <ul>
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-behance"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-dribbble"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-item">
              <div className="what-offer">
                <h2>What We Offer ?</h2>
                <ul>
                  <li>
                    <Link to="#">Rent a car now</Link>
                  </li>
                  <li>
                    <Link to="#">Search for sale</Link>
                  </li>
                  <li>
                    <Link to="#">Try search form</Link>
                  </li>
                  <li>
                    <Link to="#">Best daily dealers</Link>
                  </li>
                  <li>
                    <Link to="#">Weekly lucky person</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-item">
              <div className="need-help">
                <h2>Need Help ?</h2>
                <ul>
                  <li>
                    <Link to="#">Modern wheels</Link>
                  </li>
                  <li>
                    <Link to="#">Awesome spoilers</Link>
                  </li>
                  <li>
                    <Link to="#">Dynamic Enetrior</Link>
                  </li>
                  <li>
                    <Link to="#">Save accidents </Link>
                  </li>
                  <li>
                    <Link to="#">Recorded Racing</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-item">
              <div className="our-gallery">
                <h2>Our Gallery</h2>
                <ul>
                  <li>
                    <Link to="#">
                      <img src="http://placehold.it/70x70" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="http://placehold.it/70x70" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="http://placehold.it/70x70" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="http://placehold.it/70x70" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="http://placehold.it/70x70" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="http://placehold.it/70x70" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-item">
              <div className="quick-search">
                <h2>Quick Search</h2>
                <input
                  type="text"
                  className="footer-search"
                  name="s"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="sub-footer">
              <p>
                Copyright 2019. All rights reserved by:{" "}
                <Link to="#">Cocotemplates</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
