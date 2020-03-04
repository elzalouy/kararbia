/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { validateRegister } from "../../httpServices/user/userSchema";
import { addNewUser } from "../../httpServices/user/user";
import { toast } from "react-toastify";
import Handle from "../../middleware/errorHandle";
import getWords from "../../utils/GetWords";
class Register extends Component {
  state = {
    user: {
      email: "",
      name: "",
      phone: "",
      password: "",
      confirmPassword: ""
    },
    error: {
      email: null,
      name: null,
      phone: null,
      password: null,
      confirmPassword: null
    }
  };

  handleChange = Handle(({ currentTarget: e }) => {
    const state = this.state;
    state.user[e.name] = e.value;
    this.setState({ state });
  });

  handleSubmit = Handle(async () => {
    const state = this.state;
    const error = await validateRegister(state.user);
    if (error) {
      state.error[error.key] = error.message;
      if (state.user.password !== state.user.confirmPassword)
        state.error.confirmPassword = "Password are not confirmed";
    } else {
      state.error = {
        email: null,
        name: null,
        phone: null,
        password: null,
        confirmPassword: null
      };
      const result = await addNewUser(state.user);
      if (result.error)
        toast.info(result.error.message, {
          autoClose: true,
          delay: 500
        });
      else {
        //not working yet
        toast.info(result.data, {
          autoClose: true,
          delay: 500
        });
        window.location = "/home";
      }
    }
    this.setState({ state });
  });

  render() {
    let { words } = getWords();
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
                        <a href="/home">{words["homepage"]}</a> /{" "}
                        <em> {words["register"]}</em>
                      </p>
                      <h2>
                        {words["register"]} <em>{words["now"]}</em>
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
                            <h2>{words["register"]}</h2>
                          </div>
                        </div>
                        <div className="search-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="input-select mb-3">
                                <input
                                  type="text"
                                  placeholder={words["your name"]}
                                  className="bg-transparent border border-white w-100 p-2 text-white"
                                  name="name"
                                  value={this.state.user.name}
                                  onChange={this.handleChange}
                                />
                                {this.state.error.name && (
                                  <p className="text-warning">
                                    {this.state.error.name}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-select mb-3">
                                <input
                                  type="email"
                                  name="email"
                                  value={this.state.user.email}
                                  placeholder={words["your email"]}
                                  onChange={this.handleChange}
                                  className="bg-transparent border border-white w-100 p-2 text-white"
                                />
                                {this.state.error.email && (
                                  <p className="text-warning">
                                    {this.state.error.email}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-select mb-3">
                                <input
                                  type="phone"
                                  name="phone"
                                  value={this.state.user.phone}
                                  onChange={this.handleChange}
                                  placeholder={words["your phone"]}
                                  className="bg-transparent border border-white w-100 p-2 text-white"
                                />
                                {this.state.error.phone && (
                                  <p className="text-warning">
                                    {this.state.error.phone}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-select mb-3">
                                <input
                                  type="password"
                                  placeholder={words["your password"]}
                                  name="password"
                                  value={this.state.user.password}
                                  onChange={this.handleChange}
                                  className="bg-transparent border border-white w-100 p-2 text-white"
                                />
                                {this.state.error.password && (
                                  <p className="text-warning">
                                    {this.state.error.password}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-select mb-3">
                                <input
                                  type="password"
                                  placeholder={words["confirm passworod"]}
                                  name="confirmPassword"
                                  value={this.state.user.confirmPassword}
                                  onChange={this.handleChange}
                                  className="bg-transparent border border-white w-100 p-2 text-white"
                                />
                                {this.state.error.confirmPassword && (
                                  <p className="text-warning">
                                    {this.state.error.confirmPassword}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="secondary-button">
                                <a href="#" onClick={this.handleSubmit}>
                                  <i className="fa fa-user"></i> &nbsp;{" "}
                                  {words["register"]}
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
export default Register;
