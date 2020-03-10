/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import getWords from "../../utils/GetWords";
import phoneimg from "../../images/phoneimg.svg";
import smsimg from "../../images/sms.svg";
import { mobileConfirm, mobileCheckCode } from "../../httpServices/user/user";
import { toast } from "react-toastify";
import CountryCodes from "../common/CountryCodes";
class VerifyMobile extends Component {
  state = {
    error: "",
    phone: "",
    channel: "",
    code: "",
    status: "send",
    confirmCode: ""
  };
  componentDidMount() {
    const state = this.state;
    if (window.localStorage.getItem("phone")) state.status = "confirm";
    this.setState({ state });
  }
  handleChange = ({ currentTarget: e }) => {
    const state = this.state;
    state[e.name] = e.value;
    this.setState({ state });
  };
  handleChangeChannel = ({ currentTarget: e }) => {
    const state = this.state;
    state.channel = e.id;
    this.setState({ state });
  };
  handleSubmitSend = async () => {
    const state = this.state;
    let phone = `+${state.code}${state.phone}`;
    let channel = state.channel;
    let result = await mobileConfirm(phone, channel);
    if (result.error) toast.warn(result.error.message);
    else {
      state.status = "confirm";
      window.localStorage.setItem("phone", phone);
      window.localStorage.setItem("status", state.status);
      window.localStorage.setItem("channel", state.channel);
      window.localStorage.setItem("sid", result.data.sid);
      this.setState({ state });
      toast.warn("The code had sent successfully.");
    }
  };
  handleResendCode = () => {
    window.localStorage.removeItem("status");
    window.localStorage.removeItem("phone");
    window.localStorage.removeItem("channel");
    window.localStorage.removeItem("sid");
    const state = this.state;
    state.status = "send";
    this.setState({ state });
  };
  handleSubmitConfirm = async () => {
    const state = this.state;
    const result = await mobileCheckCode(state.confirmCode);
    if (result.error) toast.warn(result.error.message);
    else {
      window.localStorage.removeItem("phone");
      window.localStorage.removeItem("status");
      window.location = "/";
    }
  };
  render() {
    let { words, lang } = getWords();
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
                        <a href="/home">{words["login"]}</a> /{" "}
                        <em> {words["verify mobile"]}</em>
                      </p>
                      <h2>
                        {words["verify"]} <em>{words["mobile"]}</em>
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
                            <h2>
                              {this.state.status === "send"
                                ? words["mobile"]
                                : words["confirm code"]}
                            </h2>
                          </div>
                        </div>
                        <div className="search-form">
                          <div className="row">
                            {this.state.status === "send" && (
                              <div className="col-4 p-0 m-0">
                                <CountryCodes />
                              </div>
                            )}
                            <div
                              className={
                                this.state.status === "send"
                                  ? "col-8 px-1"
                                  : "col p-2"
                              }
                            >
                              {this.state.status === "send" ? (
                                <input
                                  type="phone"
                                  name="phone"
                                  value={this.state.phone}
                                  onChange={this.handleChange}
                                  placeholder={words["your phone"]}
                                  className="bg-transparent border border-white w-100 p-2 h-auto text-white"
                                />
                              ) : (
                                <React.Fragment>
                                  <input
                                    type="text"
                                    name="confirmCode"
                                    value={this.state.confirmCode}
                                    placeholder={words["code"]}
                                    max={6}
                                    min={6}
                                    onChange={this.handleChange}
                                    className="bg-transparent border border-white w-100 p-2 h-auto text-white"
                                  />
                                  <p className="text-white">
                                    {
                                      words[
                                        "we have sent you a verification code"
                                      ]
                                    }
                                  </p>
                                  <p
                                    className="cursor-pointer text-warning"
                                    onClick={this.handleResendCode}
                                  >
                                    {words["resend code"]}
                                  </p>
                                </React.Fragment>
                              )}
                            </div>
                            {this.state.status === "send" && (
                              <React.Fragment>
                                <div className="col-6 text-center">
                                  <div
                                    className={
                                      this.state.channel === "call"
                                        ? "btn circled_button cursor-pointer p-2 m-2 active"
                                        : "btn circled_button cursor-pointer p-2 m-2"
                                    }
                                    onClick={this.handleChangeChannel}
                                    name="channel"
                                    id="call"
                                  >
                                    <img
                                      src={phoneimg}
                                      className="w-50 h-50"
                                      alt=""
                                    />
                                    <p className="text-white m-0">
                                      {words["phone call"]}
                                    </p>
                                  </div>
                                </div>
                                <div className="col-6 text-center ">
                                  <div
                                    id="sms"
                                    name="channel"
                                    onClick={this.handleChangeChannel}
                                    className={
                                      this.state.channel === "sms"
                                        ? "btn circled_button cursor-pointer p-2 m-2 active"
                                        : "btn circled_button cursor-pointer p-2 m-2"
                                    }
                                  >
                                    <img
                                      src={smsimg}
                                      className="w-50 h-50 m-0"
                                      alt=""
                                    />
                                    <p className="text-white m-0">
                                      {words["sms"]}
                                    </p>
                                  </div>
                                </div>
                              </React.Fragment>
                            )}
                            <div className="col-md-12">
                              <div className="secondary-button cursor-pointer">
                                <a
                                  onClick={
                                    this.state.status === "send"
                                      ? this.handleSubmitSend
                                      : this.handleSubmitConfirm
                                  }
                                >
                                  {this.state.status === "send"
                                    ? words["send"]
                                    : words["confirm"]}
                                  <i
                                    className="fa px-2 fa-paper-plane"
                                    aria-hidden="true"
                                  ></i>
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

export default VerifyMobile;
