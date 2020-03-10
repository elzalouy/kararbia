/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords";
const _ = require("lodash");
const CarSearch = ({ cars, handleChange, handleSearch }) => {
  if (!cars || cars.length === 0) return null;
  let { words } = getWords();
  let models = cars.map(item => {
    return item.model;
  });
  models = _.uniq(models);
  let brand = cars.map(item => {
    return item.name;
  });
  brand = _.uniq(brand);
  let price = cars.map(item => {
    return item.price;
  });
  price = _.uniq(price);
  price = _.sortBy(price);
  let fuel_type = cars.map(item => {
    return item.fuel_type;
  });
  fuel_type = _.uniq(fuel_type);
  let transmission = cars.map(item => {
    return item.transmission;
  });
  transmission = _.uniq(transmission);
  let body_type = cars.map(item => {
    return item.body_type;
  });
  body_type = _.uniq(body_type);
  return (
    <div className="col-md-4 mb-5">
      <div className="sidebar-widgets">
        <div className="row">
          <div className="col-md-12">
            <div className="sidebar-widget">
              <div className="search-content">
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
                      <input
                        type="text"
                        name="search_word"
                        placeholder={words["type keyboard"]}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <div className="input-select">
                        <select name="brand" id="brand" onChange={handleChange}>
                          <option value={price[price.length - 1]}>
                            {words["select brand"]}
                          </option>
                          {brand.map(item => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-select">
                        <select name="model" onChange={handleChange}>
                          <option value="">{words["select model"]}</option>
                          {models.map(item => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-select">
                        <select name="minprice" onChange={handleChange}>
                          <option value={price[0]}>{words["min price"]}</option>
                          {price.map(item => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-select">
                        <select name="maxprice" onChange={handleChange}>
                          <option value={price[price.length - 1]}>
                            {words["max price"]}
                          </option>
                          {price.map(item => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-select">
                        <select name="fuel_type" onChange={handleChange}>
                          <option value="">{words["fuel type"]}</option>
                          {fuel_type.map(item => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-select">
                        <select name="transmission" onChange={handleChange}>
                          <option value="">{words["transmission type"]}</option>
                          {transmission.map(item => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-select">
                        <select name="body_type" onChange={handleChange}>
                          <option value="">{words["body type"]}</option>
                          {body_type.map(item => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="secondary-button cursor-pointer">
                        <a onClick={handleSearch}>
                          {words["search"]}{" "}
                          <i className="fa fa-search cursor-pointer"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSearch;
