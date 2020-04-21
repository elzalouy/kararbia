import React, { Component } from "react";
import isAdmin from "../../middleware/admin";
import { toast } from "react-toastify";
import { AddNewAdmin, getUserByName } from "../../httpServices/user/user";
import { getToken } from "../../httpServices/localStorage";
import getWords from "../../utils/GetWords";
import handle from "../../middleware/errorHandle";

import "./user.css";
class AddAdmin extends Component {
  state = {
    searchedUsers: [],
    adminName: "",
    addAdminId: "",
    user: {},
    loading: false,
  };
  handleAddAdmin = handle(
    isAdmin(async () => {
      this.setState({ loading: true });
      const state = this.state;
      const result = await AddNewAdmin(state.addAdminId, getToken());
      if (result.error) {
        toast.warn(result.error.message);
        this.setState({ loading: false });
      } else window.location.reload();
    })
  );
  handleSelectAdmin = handle(
    isAdmin(async ({ currentTarget: e }) => {
      const state = this.state;
      state.addAdminId = e.id;
      state.user = state.searchedUsers.find((s) => s._id === e.id);
      this.setState({ state });
    })
  );
  handleSearchAdmin = handle(
    isAdmin(async ({ currentTarget: e }) => {
      const state = this.state;
      let result = await getUserByName(e.value);
      if (result.error) toast.warn(result.error.message);
      else state.searchedUsers = result.data;
      this.setState({ state });
    })
  );
  handleRemoveSelected = handle(() => {
    const state = this.state;
    state.user = {};
    state.addAdminId = "";
    this.setState({ state });
  });
  render() {
    let { words, lang } = getWords();
    return (
      <section
        className={
          lang === "eng"
            ? "modal fade mt-5 pt-5"
            : "modal fade mt-5 pt-5 text-right"
        }
        id="addadmin"
        dir={lang === "eng" ? "ltr" : "rtl"}
        style={{ opacity: 1, zIndex: 9999, transition: "all 0.9s" }}
      >
        <div className="modal-dialog">
          <div className="text-center w-100 add-icon-overflow">
            <i className="fa fa-car add-icon" aria-hidden="true"></i>
          </div>
          <div className="modal-content border-0 brd-0">
            <div
              className="modal-header border-0"
              dir={lang === "eng" ? "ltr" : "rtl"}
            >
              <h3 className="modal-title text-orange">{words["new admin"]}</h3>
            </div>
            <div className="modal-body border-0">
              {this.state.addAdminId.length === 0 ? (
                <React.Fragment>
                  <input
                    type="text"
                    placeholder="User Name"
                    onChange={this.handleSearchAdmin}
                    className="form-control brd-0"
                  />
                  {!this.state.searchedUsers ||
                    (this.state.searchedUsers.length === 0 && (
                      <React.Fragment>
                        <p>
                          <i
                            className="fa fa-question-circle"
                            aria-hidden="true"
                          ></i>
                          <mark className="text-warning bg-transparent">
                            {words["no admins"]}
                          </mark>
                        </p>
                      </React.Fragment>
                    ))}
                  <ul name="searchedUsers" className="w-100 p-0 m-0" id="">
                    {this.state.searchedUsers &&
                      this.state.searchedUsers.length > 0 &&
                      this.state.searchedUsers.map((item) => (
                        <li
                          key={item._id}
                          className="item cursor-pointer p-3 border border-1 w-100 "
                          style={{ listStyleType: "none" }}
                          id={item._id}
                          onClick={this.handleSelectAdmin}
                        >
                          {item.name}
                        </li>
                      ))}
                  </ul>
                </React.Fragment>
              ) : (
                <div className="selected shadow">
                  <p className="p-0 m-0">{this.state.user.name}</p>
                  <i
                    className="fa fa-times text-right cursor-pointer"
                    aria-hidden="true"
                    onClick={this.handleRemoveSelected}
                  ></i>
                </div>
              )}
            </div>
            <div className="modal-footer row justify-content-center border-0">
              <button
                className={this.state.loading ? "btn save loading" : "btn save"}
                disabled={this.state.loading ? true : false}
                onClick={this.handleAddAdmin}
              >
                {this.state.loading ? (
                  ""
                ) : (
                  <i
                    className="fa fa-check-circle p-0 m-0"
                    aria-hidden="true"
                  ></i>
                )}
              </button>
              <button
                type="button"
                className="btn p-0 m-0 close"
                data-dismiss="modal"
                disabled={this.state.loading ? true : false}
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

export default AddAdmin;
