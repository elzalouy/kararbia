/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { authed, admin } from "../../httpServices/auth/auth";
import { getUserByToken } from "../../httpServices/user/user";
import { Link } from "react-router-dom";
import getWords from "../../utils/GetWords.js";
import handle from "../../middleware/errorHandle";
import { toast } from "react-toastify";
import logo from "../../images/Logofinal.png";
import "./common.css";
class Navbar extends Component {
  state = { user: null, lang: "", searchWord: "" };
  async componentDidMount() {
    try {
      const state = this.state;
      if (authed()) state.user = await getUserByToken();
      this.setState({ state });
    } catch (ex) {
      toast.warn(ex);
    }
  }
  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    state[e.name] = e.value;
    this.setState({ state });
  });
  setLanguage = handle(({ currentTarget: e }) => {
    const state = this.state;
    let lang = e.id;
    window.localStorage.setItem("lang", lang);
    state.lang = lang;
    this.setState({ state });
    window.location.reload();
  });

  render() {
    const { user } = this.state;
    const { words } = getWords();
    return (
      <React.Fragment>
        <React.Fragment>
          <header
            className="site-header wow fadeIn fixed-top"
            data-wow-duration="1s"
          >
            <div id="main-header" className="main-header">
              <div className="px-5 clearfix">
                <a className="logo" href="/">
                  <img src={logo} className="w-100 h-100" alt="" />
                </a>
                <div id="cssmenu" className="align-right">
                  <ul>
                    <li className="active">
                      <a>
                        <i className="fa fa-globe"></i>
                      </a>
                      <ul className="">
                        <li>
                          <Link to="" onClick={this.setLanguage} id="eng">
                            English
                          </Link>
                        </li>
                        <li>
                          <Link to="" onClick={this.setLanguage} id="arabic">
                            العربية
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {user && (
                      <React.Fragment>
                        <li className="active">
                          <a href="#">{user.name}</a>
                          <ul>
                            {admin() && (
                              <React.Fragment>
                                <li className="active">
                                  <a>{words["admin panel"]}</a>
                                  <ul>
                                    <li>
                                      <a
                                        type="button"
                                        data-toggle="modal"
                                        data-target="#addadmin"
                                        aria-hidden="false"
                                      >
                                        {words["new admin"]}
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        type="button"
                                        data-toggle="modal"
                                        data-target="#removeadmin"
                                        aria-hidden="false"
                                      >
                                        {words["remove admin"]}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/CarRequests">
                                        {words["car requests"]}
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/contactList">
                                        {words["contacts"]}
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                              </React.Fragment>
                            )}
                            <li className="active">
                              <a
                                type="button"
                                data-toggle="modal"
                                data-target="#changepassword"
                                aria-hidden="false"
                              >
                                {words["change password"]}
                              </a>
                            </li>
                            <li>
                              <a href="/logout">{words["logout"]}</a>
                            </li>
                          </ul>
                        </li>
                      </React.Fragment>
                    )}
                    <li>
                      <a href="/home">{words["homepage"]}</a>
                    </li>
                    <li className="active">
                      <a href="/cars">{words["car listing"]}</a>
                    </li>
                    <li>
                      <a href="/blogs">{words["blogs"]}</a>
                    </li>
                    <li>
                      <a href="/about">{words["about us"]}</a>
                    </li>
                    <li>
                      <a href="/contact">{words["contact us"]}</a>
                    </li>
                    <li>
                      <a>{words["our services"]}</a>
                      <ul>
                        <li>
                          <a>{words["loan car"]}</a>
                        </li>
                        <li>
                          <a>EMI calculator</a>
                        </li>
                        <li>
                          <a>{words["ask question"]}</a>
                        </li>
                        {!user && (
                          <React.Fragment>
                            <li>
                              <a href="/login">{words["login"]}</a>
                            </li>
                            <li>
                              <a href="/register">{words["register"]}</a>
                            </li>
                          </React.Fragment>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default Navbar;
