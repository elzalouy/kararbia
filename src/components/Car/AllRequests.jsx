import React, { Component } from "react";
import getWords from "../../utils/GetWords";
import { getDate } from "../../utils/formatDate";
import sortBy from "../../utils/sortBy";
import {
  httpGetAllRequests,
  httpDeleteRequest,
  httpDeleteList,
} from "../../httpServices/car/request";
import { toast } from "react-toastify";
const _ = require("lodash");
class AllRequests extends Component {
  state = {
    requests: [],
    sortBy: "name",
    asc: "asc",
    checked: [],
  };
  async componentDidMount() {
    const state = this.state;
    let reuslt = await httpGetAllRequests();
    if (reuslt.error) toast.warn(reuslt.error.message);
    state.requests = reuslt.data;
    this.setState({ state });
  }
  handleSortItems = ({ currentTarget: e }) => {
    const state = this.state;
    state.asc = state.asc === "asc" ? "desc" : "asc";
    state.sortBy = e.id;
    this.setState({ state });
  };
  handleDeleteItem = async ({ currentTarget: e }) => {
    const result = await httpDeleteRequest(e.id);
    if (result.error) toast.warn(result.error.message);
    else {
      const state = this.state;
      _.remove(state.requests, (s) => s._id === e.id);
      this.setState({ state });
    }
  };
  handleDeleteList = async () => {
    const result = await httpDeleteList(this.state.checked);
    if (result.error) toast.warn(result.error.message);
    else {
      const state = this.state;
      _.remove(state.requests, (s) => state.checked.includes(s._id));
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
    let heads = [
      { key: "name", value: "User Name" },
      // { key: "phone", value: "Phone" },
      { key: "email", value: "Email" },
      { key: "date", value: "Date" },
      { key: "car_id", value: "Request" },
      { key: "select", value: "Select" },
    ];
    const { lang, words } = getWords();
    const state = this.state;
    const requests = sortBy(state.requests, state.sortBy, state.asc);
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
                        <p className={lang === "eng" ? "" : "text-right"}>
                          <a href="/home">{words["homepage"]} </a> /{" "}
                          <em> {words["cars"]}</em> /{" "}
                          <em> {words["car requests"]}</em>
                        </p>
                        <div
                          className="row"
                          dir={lang === "eng" ? "ltr" : "rtl"}
                        >
                          <h2 className="pt-2 text-right">
                            {words["car requests"]}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {requests && requests.length > 0 ? (
              <React.Fragment>
                <table className="table-hover table-striped overflow-hidden shadow">
                  <thead>
                    <tr>
                      {heads &&
                        heads.length > 0 &&
                        heads.map((item) => (
                          <th key={item.key}>
                            {item.value}{" "}
                            {item.key !== "car_id" && item.key !== "select" && (
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
                    {requests.map((item) => {
                      let date = getDate(item.date);
                      return (
                        <tr key={requests.indexOf(item)}>
                          <td className="pl-2">{item.name} </td>
                          {/* <td>{item.phone}</td> */}
                          <td>{item.email}</td>
                          <td> {`${date.year}/${date.month}/${date.day}`}</td>
                          <td className="py-1">
                            <a
                              href={`/car/${item.car_id}`}
                              className="btn add-icon pt-0"
                              target="blank"
                            >
                              <i className="fa fa-car" aria-hidden="true"></i>
                            </a>
                            <button
                              className="btn add-icon bg-danger pt-0 mx-1"
                              onClick={this.handleDeleteItem}
                              id={item._id}
                            >
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
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
                  <h4 className="mt-4 gray">No Requests now</h4>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AllRequests;
