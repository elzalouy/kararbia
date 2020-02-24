import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
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
                      Login <em>Now</em>
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
                          <h2>Login</h2>
                        </div>
                      </div>
                      <div className="search-form">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="input-select">
                              <input
                                type="text"
                                placeholder="User Name"
                                className="bg-transparent border border-white w-100 mb-5 p-2 text-white"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-select mb-5">
                              <input
                                type="password"
                                placeholder="Password"
                                className="bg-transparent border border-white w-100 p-2 text-white"
                              />
                              <Link to="/forgotPassword" className="text-white">
                                Forgot Password?
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-6"></div>
                          <div className="col-md-6">
                            <div className="input-select"></div>
                          </div>
                          <div className="col-md-12">
                            <div className="secondary-button">
                              <Link to="#">
                                <i className="fa fa-user"></i> &nbsp; Login
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

export default Login;
