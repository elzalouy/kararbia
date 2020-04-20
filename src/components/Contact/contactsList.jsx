/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import getWords from "../../utils/GetWords";
import { getDate } from "../../utils/formatDate";
import {
  deleteContact,
  getContacts,
  deleteContactList,
} from "../../httpServices/contact/contact";
import { toast } from "react-toastify";
import _ from "lodash";
import sortBy from "../../utils/sortBy";
import ContactItem from "./contactItem";
class ContactsList extends Component {
  state = { contacts: [], asc: true, sortBy: "date", checked: [] };
  async componentDidMount() {
    const state = this.state;
    let reuslt = await getContacts();
    if (reuslt.error) toast.warn("There are no contacts now");
    state.contacts = reuslt.data;
    this.setState({ state });
  }
  handleSortItems = ({ currentTarget: e }) => {
    const state = this.state;
    state.asc = state.asc === "asc" ? "desc" : "asc";
    state.sortBy = e.id;
    this.setState({ state });
  };
  handleDeleteItem = async ({ currentTarget: e }) => {
    const result = await deleteContact(e.id);
    if (result.error) toast.warn(result.error.message);
    else {
      const state = this.state;
      _.remove(state.contacts, (s) => s._id === e.id);
      this.setState({ state });
    }
  };
  handleDeleteList = async () => {
    const result = await deleteContactList(this.state.checked);
    if (result.error) toast.warn(result.error.message);
    else {
      const state = this.state;
      _.remove(state.contacts, (s) => state.checked.includes(s._id));
      state.checked = [];
      this.setState({ state });
    }
  };
  handleCheckBox = async ({ currentTarget: e }) => {
    const state = this.state;
    e.checked
      ? state.checked.push(e.value)
      : _.remove(state.checked, (s) => s === e.value);
    this.setState({ state });
  };
  render() {
    const state = this.state;
    const { words, lang } = getWords();
    let heads = [
      { key: "name", value: "User Name" },
      { key: "email", value: "Email" },
      { key: "date", value: "Date" },
      { key: "mesage", value: "Contact Message" },
      { key: "select", value: "Select" },
    ];
    const contacts = sortBy(state.contacts, state.sortBy, state.asc);
    return (
      <React.Fragment>
        <div className="bg-gray pb-5">
          <div
            className="page-heading align-right wow fadeIn"
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
                      <div className="heading-content  col-md-12">
                        <p>
                          <a href="/home">{words["homepage"]} </a> /{" "}
                          <em> {words["contact"]}</em> /{" "}
                          <em> {words["requests"]}</em>
                        </p>
                        <div
                          className="row"
                          dir={lang === "eng" ? "ltr" : "rtl"}
                        >
                          <h2 className="pt-2">{words["contacts"]}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {contacts && contacts.length > 0 ? (
              <React.Fragment>
                <table className="table-hover table-striped overflow-hidden shadow table-responsive-lg">
                  <thead>
                    <tr>
                      {heads &&
                        heads.length > 0 &&
                        heads.map((item) => (
                          <th key={item.key} className="text-center">
                            {item.value}{" "}
                            {item.key !== "message" &&
                              item.key !== "select" && (
                                <i
                                  className="btn fa fa-sort cursor-pointer"
                                  aria-hidden="true"
                                  id={item.key}
                                  onClick={this.handleSortItems}
                                ></i>
                              )}
                          </th>
                        ))}
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((item) => {
                      let date = getDate(item.date);
                      return (
                        <tr key={contacts.indexOf(item)}>
                          <td className="pl-2 text-center">{item.name} </td>
                          <td className="text-center">{item.email}</td>
                          <td className="text-center">
                            {`${date.year}/${date.month}/${date.day}`}
                          </td>
                          <td className="py-1 text-center">
                            <button
                              className="btn add-icon pt-0"
                              type="button"
                              data-toggle="modal"
                              data-target="#ContactItem"
                            >
                              <i class="fa fa-envelope" aria-hidden="true"></i>
                            </button>
                            <button
                              className="btn add-icon bg-danger pt-0 mx-1"
                              onClick={this.handleDeleteItem}
                              id={item._id}
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <ContactItem item={item} />
                          </td>
                          <td className="text-center">
                            <input
                              id={item._id}
                              className="checkbox"
                              type="checkbox"
                              value={item._id}
                              checked={
                                state.checked.includes(item._id) ? true : false
                              }
                              onChange={this.handleCheckBox}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {state.checked.length > 0 && (
                  <div className="row">
                    <div className="col text-center mt-4">
                      <button
                        className="btn add-icon bg-danger pt-0"
                        onClick={this.handleDeleteList}
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="col text-center">
                  <i className="fa fa-car gray icon-no-car"></i>
                  <h4 className="mt-4 gray">No Contacts now</h4>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactsList;
