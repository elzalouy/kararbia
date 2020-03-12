import React, { Component } from "react";
import getWords from "../../utils/GetWords";
import { getToken } from "../../httpServices/localStorage";
import { changePassword } from "../../httpServices/user/user";

class ChangePassword extends Component {
  state = {
    password: "",
    newPassword: "",
    confirmPassword: "",
    error: ""
  };
  handleChange = ({ currentTarget: e }) => {
    const state = this.state;
    state[e.name] = e.value;
    this.setState({ state });
  };
  handleSubmit = async () => {
    const state = this.state;
    if (state.newPassword === state.confirmPassword) {
      let result = await changePassword(
        { oldPassword: state.password, newPassword: state.newPassword },
        getToken()
      );
      if (result.error) state.error = result.error.message;
      else {
        window.location.reload();
      }
    } else {
      state.error = "the new password are confirmed with confirm password";
    }
    this.setState({ state });
  };
  render() {
    const { words, lang } = getWords();
    return (
      <section
        className={
          lang === "eng"
            ? "modal fade mt-5 pt-5"
            : "modal fade mt-5 pt-5 text-right"
        }
        id="changepassword"
        dir={lang === "eng" ? "ltr" : "rtl"}
        style={{ opacity: 1, zIndex: 9999, transition: "all 0.9s" }}
      >
        <div className="modal-dialog">
          <div className="modal-content border-0 brd-0">
            <div
              className="modal-header border-0"
              dir={lang === "eng" ? "ltr" : "rtl"}
            >
              <h3 className="modal-title text-orange">
                {words["change password"]}
              </h3>
            </div>
            <div className="modal-body border-0">
              <React.Fragment>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Your password"
                  onChange={this.handleChange}
                  className="form-control brd-0 mb-2"
                />
                <input
                  type="password"
                  name="newPassword"
                  value={this.state.newPassword}
                  placeholder="New password"
                  onChange={this.handleChange}
                  className="form-control brd-0 mb-2"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  placeholder="Confirm the new password"
                  onChange={this.handleChange}
                  className="form-control brd-0 mb-2"
                />
                {this.state.error && (
                  <p className="text-warning">
                    <i
                      class="fa fa-question-circle pr-2"
                      aria-hidden="true"
                    ></i>
                    {this.state.error}
                  </p>
                )}
              </React.Fragment>
            </div>
            <div className="modal-footer row justify-content-center border-0">
              <button className="btn save" onClick={this.handleSubmit}>
                <i
                  className="fa fa-check-circle p-0 m-0"
                  aria-hidden="true"
                ></i>
              </button>
              <button
                type="button"
                className="btn p-0 m-0 close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ChangePassword;
