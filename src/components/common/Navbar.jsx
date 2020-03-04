/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { authed } from "../../httpServices/auth/auth";
import { getUserByToken } from "../../httpServices/user/user";
import { Link } from "react-router-dom";
import getWords from "../../utils/GetWords.js";

class Navbar extends Component {
  state = { user: null, lang: "" };
  async componentDidMount() {
    const state = this.state;
    if (authed()) state.user = await getUserByToken();
    this.setState({ state });
  }
  setLanguage = ({ currentTarget: e }) => {
    const state = this.state;
    let lang = e.id;
    window.localStorage.setItem("lang", lang);
    state.lang = lang;
    this.setState({ state });
    window.location.reload();
  };
  render() {
    const { user } = this.state;
    let { words } = getWords();
    return (
      <React.Fragment>
        <header className="site-header wow fadeIn" data-wow-duration="1s">
          <div id="main-header" className="main-header">
            <div className="px-5 clearfix pt-2">
              <div className="logo">
                <a href="/"></a>
              </div>
              <div id="cssmenu" className="align-right">
                <ul>
                  <li className="active">
                    <a href="#">
                      <i className="fa fa-globe"></i>
                    </a>
                    <ul className="">
                      <li>
                        <Link to="#" onClick={this.setLanguage} id="eng">
                          English
                        </Link>
                      </li>
                      <li>
                        <Link to="#" onClick={this.setLanguage} id="arabic">
                          العربية
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {user && (
                    <li className="active">
                      <a href="#">{user.name}</a>
                      <ul>
                        <li>
                          <a href="/logout">{words["logout"]}</a>
                        </li>
                      </ul>
                    </li>
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
  }
}

export default Navbar;
