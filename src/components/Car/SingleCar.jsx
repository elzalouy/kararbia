/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords.js";
import { Component } from "react";
import { getCarById } from "../../httpServices/car/car.js";
import { toast } from "react-toastify";
import Gallary from "../common/Gallary/Gallary.jsx";
import KeyValueItem from "./KeyValueItem.jsx";
import RequestCar from "./RequestCar.jsx";
import { httpRequestCar } from "../../httpServices/car/request";
class SingleCar extends Component {
  state = { car: {}, loading: false };
  async componentDidMount() {
    try {
      const state = this.state;
      const id = this.props.match.params.id;
      const { error, data } = await getCarById(id);
      if (error) window.location = "/404";
      else {
        state.car = data;
        this.setState({ state });
      }
    } catch (ex) {
      toast.warn(ex);
    }
  }
  handleRequestCar = async () => {
    this.setState({ loading: true });
    const state = this.state;
    const result = await httpRequestCar(state.car._id);
    if (result.error) {
      toast.warn(result.error.message);
      this.setState({ loading: false });
    } else {
      toast.warn("We sent a request to the admins.");
      this.setState({ loading: false });
    }
  };
  render() {
    let { lang, words } = getWords();
    const { car } = this.state;
    return (
      <React.Fragment>
        <div className="bg-gray">
          <div className="page-heading wow fadeIn" data-wow-duration="0.5s">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div
                    className="heading-content-bg wow fadeIn"
                    data-wow-delay="0.75s"
                    data-wow-duration="1s"
                  >
                    <div className="row">
                      <div className="heading-content col-md-12">
                        <p className={lang === "eng" ? "" : "text-right"}>
                          <a href="/home">{words["homepage"]}</a> /{" "}
                          <em> {words["car"]}</em> /{" "}
                          <em> {words["details"]}</em>
                        </p>
                        <h2 className={lang === "eng" ? "" : "text-right"}>
                          {lang === "eng" ? (
                            <React.Fragment>
                              {words["car"]} <em>{words["details"]}</em>
                            </React.Fragment>
                          ) : (
                            <React.Fragment>
                              <em>{words["details"]}</em> {words["car"]}
                            </React.Fragment>
                          )}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {car && (
            <React.Fragment>
              <div
                className="recent-car single-car wow fadeIn"
                data-wow-delay="0.5s"
                data-wow-duration="1s"
              >
                <div className="container">
                  <div className="recent-car-content brd-2">
                    <div className="row">
                      <div className="col-md-6">
                        <Gallary images={car.images} />
                      </div>
                      <div className="col-md-6">
                        <div className="car-details">
                          <h4>
                            {car.name} - {car.model}
                          </h4>
                          <span>${car.price}</span>
                          <p>{car.short_desc}</p>
                          <div className="row w-100">
                            <ul className="car-info col-md-6">
                              <li>
                                <i
                                  className="flaticon flaticon-road"
                                  aria-hidden="true"
                                ></i>
                                <p>{car.kilometers}</p>
                              </li>
                              <li>
                                <i
                                  className="flaticon flaticon-speed"
                                  aria-hidden="true"
                                ></i>
                                <p>{car.speed}</p>
                              </li>
                              <li>
                                <i className="fas fa-shield-alt f-18"></i>
                                <p>{car.status}</p>
                              </li>
                              <li>
                                <i className="fas fa-gas-pump f-18"></i>
                                <p>{car.fuel_type}</p>
                              </li>
                            </ul>
                            <ul className="car-info col-md-6">
                              <li>
                                <i className="fas fa-palette f-18"></i>
                                <p>{car.color}</p>
                              </li>
                              <li>
                                <i className="flaticon flaticon-shift"></i>
                                <p>{car.transmission}</p>
                              </li>
                              <li>
                                <i className="flaticon flaticon-car"></i>
                                <p>{car.doors}</p>
                              </li>
                              <li>
                                <i className="fa fa-car f-18"></i>
                                <p>{car.body_type}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="similar-info">
                          <div className="primary-button cursor-pointer">
                            <a
                              type="button"
                              data-toggle="modal"
                              data-target=".requestCar"
                            >
                              {words["request"]}{" "}
                              <i className="fa fa-dollar"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="pb-5">
                <div className="more-details">
                  <div className="container">
                    <div className="row m-0 justify-content-center align-items-center">
                      <KeyValueItem
                        items={car && car.extra_features && car.extra_features}
                      />
                    </div>
                  </div>
                </div>
              </section>
              <RequestCar
                loading={this.state.loading}
                handleRequestCar={this.handleRequestCar}
              />
            </React.Fragment>
          )}
          {!car && (
            <React.Fragment>
              <div className="col text-center">
                <i className="fa fa-car gray icon-no-car"></i>
                <h4 className="mt-4 gray">No items now</h4>
              </div>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default SingleCar;
