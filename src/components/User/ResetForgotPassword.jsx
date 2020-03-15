/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import getWords from "../../utils/GetWords";
import { resetForgotPassword } from "../../httpServices/user/user";
import { validateNewPassword } from "../../httpServices/user/userSchema";
import { toast } from "react-toastify";
import handle from "../../middleware/errorHandle";

class ResetForgotPassword extends Component {
  state = { newPassword: "", confirmPassword: "", error: "" };
  componentDidMount() {}
  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    state[e.name] = e.value;
    this.setState({ state });
  });
  handleSubmit = handle(async () => {
    const token = this.props.match.params.token;
    const state = this.state;
    if (state.newPassword !== state.confirmPassword) {
      state.error = "Password are not confirmed";
    } else {
      let result = await validateNewPassword({
        newPassword: state.newPassword,
        confirmPassword: state.confirmPassword
      });
      if (result) state.error = result.message;
      else {
        result = await resetForgotPassword(state.newPassword, token);
        if (result.error) toast.warn(result.error.message);
        else {
          window.location.replace("/login");
        }
      }
    }
    this.setState({ state });
  });
  render() {
    const { words, lang } = getWords();
    const { error } = this.state;
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
                        <em> {words["reset forgot password"]}</em>
                      </p>
                      <h2>
                        {words["reset forgot"]} <em>{words["password"]}</em>
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
                            <h2>{words["reset forgot password"]}</h2>
                          </div>
                        </div>
                        <div className="search-form">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="input-select mb-5">
                                <input
                                  type="password"
                                  name="newPassword"
                                  value={this.state.newPassword}
                                  onChange={this.handleChange}
                                  placeholder={words["new password"]}
                                  className="bg-transparent border border-white w-100 p-2 text-white"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-select mb-5">
                                <input
                                  type="password"
                                  name="confirmPassword"
                                  value={this.state.confirmPassword}
                                  onChange={this.handleChange}
                                  placeholder={words["confirm passworod"]}
                                  className="bg-transparent border border-white w-100 p-2 text-white"
                                />
                                {error && <p className="text-white">{error}</p>}
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

export default ResetForgotPassword;
