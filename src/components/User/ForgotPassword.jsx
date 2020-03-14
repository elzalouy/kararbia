import React, { Component } from "react";
import getWords from "../../utils/GetWords";
import { forgotPassword } from "../../httpServices/user/user";
import { toast } from "react-toastify";
class ForgotPassword extends Component {
  state = { email: "" };
  handleChange = ({ currentTarget: e }) => {
    const state = this.state;
    state.email = e.value;
    this.setState({ state });
  };
  handleSubmit = async () => {
    const state = this.state;
    let result = await forgotPassword(state.email);
    if (result.error) toast.warn(result.error.message);
    else toast.warn(result.data);
  };
  render() {
    let { lang, words } = getWords();
    return (
      <section
        className={
          lang === "eng"
            ? "modal fade mt-5 pt-5"
            : "modal fade mt-5 pt-5 text-right"
        }
        id="forgotPassword"
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
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Your email"
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

export default ForgotPassword;
