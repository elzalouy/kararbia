/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import getWords from "../../utils/GetWords";
import handle from "../../middleware/errorHandle";
import { getCars } from "../../httpServices/car/car";
import { toast } from "react-toastify";
const _ = require("lodash");
class HomeSearch extends Component {
  state = {
    cars: [],
    brand: "",
    minprice: 1,
    maxprice: 1000000,
    model: "",
    models: [],
    prices: [],
    brands: []
  };
  async componentDidMount() {
    try {
      const result = await getCars();
      if (result.error) return toast.warn(result.error.message);
      else {
        const state = this.state;
        state.cars = result.data;
        let prices = state.cars.map(item => {
          return item.price;
        });
        prices = _.uniq(prices);
        prices = _.sortBy(prices);
        state.minprice = prices[0];
        state.maxprice = prices[prices.length - 1];
        this.setState({ state });
      }
    } catch (ex) {
      toast.warn(ex);
    }
  }
  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    state[e.name] = e.value;
    this.setState({ state });
  });
  render() {
    let {
      cars,
      models,
      brands,
      prices,
      brand,
      minprice,
      maxprice,
      model
    } = this.state;
    if (cars && cars.length > 0) {
      models = cars.map(item => {
        return item.model;
      });
      models = _.uniq(models);
      brands = cars.map(item => {
        return item.name;
      });
      brands = _.uniq(brands);
      prices = cars.map(item => {
        return item.price;
      });
      prices = _.uniq(prices);
      prices = _.sortBy(prices);
    }
    const { words } = getWords();
    return (
      <div className="search-content wow fadeIn" data-wow-duration="0.75s">
        <div className="search-heading">
          <div className="icon">
            <i className="fa fa-search"></i>
          </div>
          <div className="text-content">
            <h2>{words["quick search"]}</h2>
            <span>{words["quick search subtitle"]}</span>
          </div>
        </div>
        <div className="search-form">
          <div className="row">
            <div className="col-md-12">
              <div>
                <select name="brand" id="brand" onChange={this.handleChange}>
                  <option value="">{words["select brand"]}</option>
                  {cars &&
                    cars.length > 0 &&
                    brands.map(item => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="input-select">
                <select name="model" onChange={this.handleChange}>
                  <option value="">{words["select model"]}</option>
                  {cars &&
                    cars.length &&
                    models.map(item => <option key={item}>{item}</option>)}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-select">
                <select name="minprice" onChange={this.handleChange}>
                  <option value={cars && cars.length > 0 && prices[0]}>
                    {words["min price"]}
                  </option>
                  {cars &&
                    cars.length > 0 &&
                    prices.map(item => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="input-select">
                <select name="maxprice" onChange={this.handleChange}>
                  <option
                    value={cars && cars.length > 0 && prices[prices.length - 1]}
                  >
                    {words["max price"]}
                  </option>
                  {cars &&
                    cars.length > 0 &&
                    prices.map(item => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="col-md-12">
              <div className="secondary-button">
                <a
                  href={`/cars?brand=${brand}&model=${model}&minprice=${minprice}&maxprice=${maxprice}`}
                >
                  {words["search"]} <i className="fa fa-search"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeSearch;
