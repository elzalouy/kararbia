/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { admin } from "../../httpServices/auth/auth";
import getWords from "../../utils/GetWords";
import { deleteCar, getCarsByQuery } from "../../httpServices/car/car";
import { toast } from "react-toastify";
import Pagination from "../common/pagination";
import { paginate } from "../../utils/paginate";
import CarSearch from "./CarSearch";
import handle from "../../middleware/errorHandle";
const _ = require("lodash");
const queryString = require("query-string");
class CarList extends Component {
  state = {
    cars: [],
    filtered: [],
    currentPage: 1,
    pageSize: 4,
    search_word: "",
    model: "",
    brand: "",
    minprice: "",
    maxprice: "",
    fuel_type: "",
    transmission: "",
    body_type: "",
  };

  async componentDidMount() {
    try {
      const state = this.state;
      let result = await getCarsByQuery(0, "-date");
      if (result.error) toast.warn(result.error.message);
      else {
        state.cars = result.data;
        state.filtered = result.data;
        let params = queryString.parse(this.props.location.search);
        state.brand = params.brand ? params.brand : state.brand;
        state.model = params.model ? params.model : state.model;
        state.minprice = params.minprice ? params.minprice : state.minprice;
        state.maxprice = params.maxprice ? params.maxprice : state.maxprice;
        this.setState({ state });
        await this.handleSearch();
      }
    } catch (ex) {
      toast.warn(ex);
    }
  }

  handleChangePage = handle((page) => {
    this.setState({ currentPage: page });
  });

  getPagedData = () => {
    const { pageSize, currentPage, filtered: cars } = this.state;
    let Filtered = [];
    Filtered = paginate(cars, currentPage, pageSize);
    return { totalCount: cars ? cars.length : 0, all: Filtered };
  };

  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    state[e.name] = e.value;
    this.setState({ state });
  });

  handleSearch = handle(() => {
    const state = this.state;

    let price = state.cars.map((item) => {
      return item.price;
    });
    price = _.uniq(price);
    price = _.sortBy(price);
    state.minprice = state.minprice.length === 0 ? 0 : state.minprice;
    state.maxprice =
      state.maxprice.length === 0 ? price[price.length - 1] : state.maxprice;
    state.filtered = _.filter(state.cars, (s) => {
      if (
        (toString(s.name).includes(state.search_word, 0) ||
          toString(s.long_desc).includes(state.search_word, 0) ||
          s.short_desc.includes(state.search_word, 0)) &&
        s.model.includes(state.model, 0) &&
        s.name.includes(state.brand, 0) &&
        s.price >= state.minprice &&
        s.price <= state.maxprice &&
        s.fuel_type.includes(state.fuel_type, 0) &&
        s.transmission.includes(state.transmission, 0) &&
        s.body_type.includes(state.body_type, 0)
      )
        return s;
    });
    this.setState({ state });
  });
  handleDeleteCar = handle(async ({ currentTarget: e }) => {
    let result = window.confirm("Are you sure? Delete this car!");
    if (result) {
      result = await deleteCar(e.id);
      if (result.error) toast.warn(result.error.message);
      else {
        window.location.reload();
      }
    }
  });
  render() {
    const { all: cars } = this.getPagedData();
    let { words, lang } = getWords();
    return (
      <React.Fragment>
        <div
          className="page-heading align-right wow fadeIn"
          data-wow-duration="0.5s"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="heading-content-bg wow fadeIn"
                  data-wow-delay="0.75s"
                  data-wow-duration="1s"
                >
                  <div className="row">
                    <div className="heading-content  col-lg-12">
                      <p
                        className={lang === "eng" ? "text-left" : "text-right"}
                      >
                        <a href="/home">{words["homepage"]} </a> /{" "}
                        <em>{words["cars"]}</em> / <em> {words["listing"]}</em>
                      </p>
                      <div className="row" dir={lang === "eng" ? "ltr" : "rtl"}>
                        <h2 className="pt-2 text-right">
                          {words["car listing"]}
                        </h2>
                        {admin() && (
                          <a href="/addcar" className="mt-2 ml-3 mr-3 add-icon">
                            <i className="fa fa-plus " aria-hidden="true"></i>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="on-grids wow fadeIn"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          <div className="container">
            <div className="recent-car-content">
              <div className="row">
                <div className="col-lg-8">
                  <div className="row align-items-center justify-content-center">
                    {cars && cars.length > 0 ? (
                      cars.map((item) => (
                        <React.Fragment key={item._id}>
                          <div className="col-lg-6 ">
                            <div className="car-item col p-0">
                              <div className="thumb-content">
                                <div className="car-banner">
                                  <a href={`/car/${item._id}`}>{item.status}</a>
                                </div>
                                <div className="thumb-inner">
                                  <a href={`/car/${item._id}`}>
                                    <img
                                      className="car-item-img"
                                      src={item.images[0].url}
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="down-content">
                                <a href={`/car/${item._id}`}>
                                  <h4>{`${item.name} - ${item.model}`}</h4>
                                </a>
                                {admin() && (
                                  <div className="text-right mt-02">
                                    <span
                                      className="fa fa-ellipsis-h ellipsis f-18 cursor-pointer "
                                      aria-hidden="true"
                                      type="button"
                                      id="dropdownMenuButton"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    ></span>
                                    <div
                                      className="dropdown-menu"
                                      aria-labelledby="dropdownMenuButton"
                                    >
                                      <a
                                        className="dropdown-item cursor-pointer"
                                        href={`/editcar/${item._id}`}
                                      >
                                        {words["edit"]}
                                      </a>
                                      <a
                                        className="dropdown-item cursor-pointer"
                                        onClick={this.handleDeleteCar}
                                        id={item._id}
                                      >
                                        {words["delete"]}
                                      </a>
                                    </div>
                                  </div>
                                )}
                                <span>{item.price}$</span>
                                <div className="line-dec text-center"></div>
                                <p>{item.short_desc}</p>
                                <ul className="car-info text-center">
                                  <li>
                                    <div className="item">
                                      <i className="flaticon flaticon-calendar"></i>
                                      <p>{item.body_type}</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="item">
                                      <i className="flaticon flaticon-speed"></i>
                                      <p>{item.speed}</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="item">
                                      <i className="flaticon flaticon-road"></i>
                                      <p>{item.kilometers}</p>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="item">
                                      <i className="flaticon flaticon-fuel"></i>
                                      <p>{item.fuel_type}</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))
                    ) : (
                      <React.Fragment>
                        <div className="col text-center">
                          <i className="fa fa-car gray icon-no-car"></i>
                          <h4 className="mt-4 gray">No items now</h4>
                        </div>
                      </React.Fragment>
                    )}
                    <div className="col-lg-12 mb-5">
                      <Pagination
                        itemsCount={
                          cars && cars.length ? this.state.cars.length : 0
                        }
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handleChangePage}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-5">
                  <CarSearch
                    cars={
                      this.state.cars &&
                      this.state.cars.length &&
                      this.state.cars
                    }
                    state={this.status}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CarList;
