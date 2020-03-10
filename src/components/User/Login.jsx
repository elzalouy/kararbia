/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Handle from "../../middleware/errorHandle";
import { login } from "../../httpServices/auth/auth";
import getWords from "../../utils/GetWords";
import { toast } from "react-toastify";
class Login extends Component {
  state = {
    user: { email: "", password: "" },
    error: ""
  };
  handleChange = Handle(({ currentTarget: e }) => {
    const state = this.state;
    state.user[e.name] = e.value;
    this.setState({ state });
  });
  handleSubmit = Handle(async () => {
    const state = this.state;
    const { error } = await login(state.user);
    if (!error) window.location.reload();
    if (error.key === "mobile") window.location = "/verifyMobile";
    else toast.warn(error.message);
    this.setState({ state });
  });
  render() {
    const { error } = this.state;
    let { lang, words } = getWords();
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
                  <div
                    className={lang === "eng" ? "row" : "row text-right"}
                    dir={lang === "eng" ? "ltr" : "rtl"}
                  >
                    <div className="heading-content col-md-6">
                      <p>
                        <a href="/home">{words["homepage"]}</a> /{" "}
                        <em> {words["login"]}</em>
                      </p>
                      <h2>
                        {words["login"]} <em>{words["now"]}</em>
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
                            <h2>{words["login"]}</h2>
                          </div>
                        </div>
                        <div className="search-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="input-select">
                                <input
                                  type="email"
                                  name="email"
                                  value={this.state.user.email}
                                  onChange={this.handleChange}
                                  placeholder={words["your email"]}
                                  className="bg-transparent border border-white w-100 mb-3 p-2 text-white"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-select mb-5">
                                <input
                                  type="password"
                                  name="password"
                                  value={this.state.user.password}
                                  onChange={this.handleChange}
                                  placeholder={words["your password"]}
                                  className="bg-transparent border border-white w-100 p-2 text-white"
                                />
                                {error && <p className="text-white">{error}</p>}
                                <div className="pt-2">
                                  <a
                                    href="/forgotPassword"
                                    className="text-white"
                                  >
                                    {words["forgot password"]}
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="secondary-button">
                                <a
                                  onClick={this.handleSubmit}
                                  className="cursor-pointer"
                                >
                                  <i className="fa fa-user"></i> &nbsp;{" "}
                                  {words["login"]}
                                </a>
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
  }
}

export default Login;
