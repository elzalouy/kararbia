import React, { Component } from "react";
import { authed } from "../../httpServices/auth/auth";
import { setToken, removeToken } from "../../httpServices/localStorage";
import Reloader from "../common/preloader";
class EmailConfirm extends Component {
  componentDidMount() {
    const token = this.props.match.params.token;
    console.log(this.props);
    if (token) {
      setToken(token);
      if (!authed()) removeToken();
    }
    window.location.replace("/home");
    window.location.reload();
  }
  render() {
    return (
      <React.Fragment>
        <Reloader />
      </React.Fragment>
    );
  }
}

export default EmailConfirm;
