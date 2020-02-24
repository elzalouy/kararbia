import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <React.Fragment>
      <div
        className="features-search-section page-heading wow fadeIn h-100 mb-0"
        data-wow-duration="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="heading-content-bg wow fadeIn"
                data-wow-delay="0.75s"
                data-wow-duration="1s"
              >
                <div className="row">
                  <div className="heading-content col-md-6">
                    <p>
                      <a href="index.html">Homepage</a> / <em> Login</em>
                    </p>
                    <h2>
                      Register <em>Now</em>
                    </h2>
                  </div>

                  <div className="col-md-4">
                    <div
                      className="search-content wow fadeIn"
                      data-wow-duration="0.75s"
                    >
                      <div className="search-heading">
                        <div className="icon">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </div>
                        <div className="text-content">
                          <h2>Register</h2>
                        </div>
                      </div>
                      <div className="search-form">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="input-select mb-3">
                              <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-transparent border border-white w-100 p-2 text-white"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-select mb-3">
                              <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-transparent border border-white w-100 p-2 text-white"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-select mb-3">
                              <input
                                type="phone"
                                placeholder="Your phone"
                                className="bg-transparent border border-white w-100 p-2 text-white"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-select mb-3">
                              <input
                                type="password"
                                placeholder="Your password"
                                className="bg-transparent border border-white w-100 p-2 text-white"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="secondary-button">
                              <Link to="#">
                                <i className="fa fa-user"></i> &nbsp; Register
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
