import React, { Component } from "react";
import isAdmin from "../../middleware/admin";
import { toast } from "react-toastify";
import { getAdmins, removeAdmin } from "../../httpServices/user/user";
import { getToken } from "../../httpServices/localStorage";
import getWords from "../../utils/GetWords";

class RemoveAdmin extends Component {
  state = {
    admins: [],
    searchedAdmins: [],
    removeAdminId: "",
    adminName: "",
    user: {}
  };
  async componentDidMount() {
    const state = this.state;
    const result = await getAdmins(getToken());
    if (result.error) return null;
    else state.admins = state.searchedAdmins = result.data;
    this.setState({ state });
  }
  handleRemoveAdmin = isAdmin(async () => {
    const state = this.state;
    const result = await removeAdmin(state.removeAdminId, getToken());
    if (result.error) toast.warn(result.error.message);
    else window.location.reload();
  });
  handleSelectAdmin = isAdmin(async ({ currentTarget: e }) => {
    const state = this.state;
    state.removeAdminId = e.id;
    state.user = state.searchedAdmins.find(s => s._id === e.id);
    this.setState({ state });
  });
  handleSearchAdmin = isAdmin(async ({ currentTarget: e }) => {
    const state = this.state;
    let searched = state.searchedAdmins.filter(s => s.name.includes(e.value));
    state.searchedAdmins = searched;
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
        dir={lang === "eng" ? "ltr" : "rtl"}
        id="removeadmin"
        style={{ opacity: 1, zIndex: 9999, transition: "all 0.9s" }}
      >
        <div className="modal-dialog">
          <div className="modal-content border-0 brd-0">
            <div
              className="modal-header border-0"
              dir={lang === "eng" ? "ltr" : "rtl"}
            >
              <h3 className="modal-title text-orange">
                {words["remove admin"]}
              </h3>
            </div>
            <div className="modal-body border-0">
              {this.state.removeAdminId.length === 0 ? (
                <React.Fragment>
                  <input
                    type="text"
                    placeholder="User Name"
                    onChange={this.handleSearchAdmin}
                    className="form-control brd-0"
                  />
                  {!this.state.admins ||
                    (this.state.admins.length === 0 && (
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
                  <ul name="searchedAdmins" id="">
                    {this.state.searchedAdmins &&
                      this.state.searchedAdmins.length > 0 &&
                      this.state.searchedAdmins.map(item => (
                        <li
                          key={item._id}
                          className="item cursor-pointer p-3 shadow w-100 "
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
                  ></i>
                </div>
              )}
            </div>
            <div className="modal-footer row justify-content-center border-0">
              <button className="btn save" onClick={this.handleRemoveAdmin}>
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

export default RemoveAdmin;
