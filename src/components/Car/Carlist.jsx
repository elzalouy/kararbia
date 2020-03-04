/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { admin } from "../../httpServices/auth/auth";
import getWords from "../../utils/GetWords";

class CarList extends Component {
  state = {};
  handleChange = () => {};
  render() {
    let { words, lang } = getWords();
    return (
      <React.Fragment>
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
                        <em> {words["cars"]}</em> / <em> {words["listing"]}</em>
                      </p>
                      <div className="row" dir={lang === "eng" ? "ltr" : "rtl"}>
                        <h2 className="pt-2 text-right">
                          {words["contact us"]}
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
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="car-item">
                        <div className="thumb-content">
                          <div className="car-banner">
                            <a href="/home">For Rent</a>
                          </div>
                          <div className="thumb-inner">
                            <a href="/homoe">
                              <img src="http://placehold.it/370x260" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="down-content">
                          <a href="/home">
                            <h4>Perfect Sport Car</h4>
                          </a>
                          <span>$36.000</span>
                          <div className="line-dec"></div>
                          <p>
                            Drinking vinegar hoodie street art, selvage you
                            probably haven't heard of them put a bird on it
                            semiotics heirloom four loko roof party mumblecore
                            cliche butcher meditation.
                          </p>
                          <ul className="car-info">
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-calendar"></i>
                                <p>2013</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-speed"></i>
                                <p>160p/h</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-road"></i>
                                <p>26.00km</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-fuel"></i>
                                <p>Petrol</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="car-item">
                        <div className="thumb-content">
                          <div className="car-banner">
                            <a href="/car">For Sale</a>
                          </div>
                          <div className="thumb-inner">
                            <a href="/car">
                              <img src="http://placehold.it/370x260" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="down-content">
                          <a href="/car">
                            <h4>Perfect Sport Car</h4>
                          </a>
                          <span>$49.000</span>
                          <div className="line-dec"></div>
                          <p>
                            Drinking vinegar hoodie street art, selvage you
                            probably haven't heard of them put a bird on it
                            semiotics heirloom four loko roof party mumblecore
                            cliche butcher meditation.
                          </p>
                          <ul className="car-info">
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-calendar"></i>
                                <p>2013</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-speed"></i>
                                <p>160p/h</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-road"></i>
                                <p>26.00km</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-fuel"></i>
                                <p>Petrol</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="car-item">
                        <div className="thumb-content">
                          <div className="car-banner">
                            <a href="/car">For Rent</a>
                          </div>
                          <div className="thumb-inner">
                            <a href="/car">
                              <img src="http://placehold.it/370x260" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="down-content">
                          <a href="/car">
                            <h4>Perfect Sport Car</h4>
                          </a>
                          <span>$42.000</span>
                          <div className="line-dec"></div>
                          <p>
                            Drinking vinegar hoodie street art, selvage you
                            probably haven't heard of them put a bird on it
                            semiotics heirloom four loko roof party mumblecore
                            cliche butcher meditation.
                          </p>
                          <ul className="car-info">
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-calendar"></i>
                                <p>2013</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-speed"></i>
                                <p>160p/h</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-road"></i>
                                <p>26.00km</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-fuel"></i>
                                <p>Petrol</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="car-item">
                        <div className="thumb-content">
                          <div className="car-banner">
                            <a href="/car">For Rent</a>
                          </div>
                          <div className="thumb-inner">
                            <a href="/car">
                              <img src="http://placehold.it/370x260" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="down-content">
                          <a href="/car">
                            <h4>Perfect Sport Car</h4>
                          </a>
                          <span>$54.000</span>
                          <div className="line-dec"></div>
                          <p>
                            Drinking vinegar hoodie street art, selvage you
                            probably haven't heard of them put a bird on it
                            semiotics heirloom four loko roof party mumblecore
                            cliche butcher meditation.
                          </p>
                          <ul className="car-info">
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-calendar"></i>
                                <p>2013</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-speed"></i>
                                <p>160p/h</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-road"></i>
                                <p>26.00km</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-fuel"></i>
                                <p>Petrol</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="car-item">
                        <div className="thumb-content">
                          <div className="car-banner">
                            <a href="/car">For Sale</a>
                          </div>
                          <div className="thumb-inner">
                            <a href="/car">
                              <img src="http://placehold.it/370x260" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="down-content">
                          <a href="/car">
                            <h4>Perfect Sport Car</h4>
                          </a>
                          <span>$23.000</span>
                          <div className="line-dec"></div>
                          <p>
                            Drinking vinegar hoodie street art, selvage you
                            probably haven't heard of them put a bird on it
                            semiotics heirloom four loko roof party mumblecore
                            cliche butcher meditation.
                          </p>
                          <ul className="car-info">
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-calendar"></i>
                                <p>2013</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-speed"></i>
                                <p>160p/h</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-road"></i>
                                <p>26.00km</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-fuel"></i>
                                <p>Petrol</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="car-item">
                        <div className="thumb-content">
                          <div className="car-banner">
                            <a href="/car">For Rent</a>
                          </div>
                          <div className="thumb-inner">
                            <a href="/car">
                              <img src="http://placehold.it/370x260" alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="down-content">
                          <a href="/car">
                            <h4>Perfect Sport Car</h4>
                          </a>
                          <span>$68.000</span>
                          <div className="line-dec"></div>
                          <p>
                            Drinking vinegar hoodie street art, selvage you
                            probably haven't heard of them put a bird on it
                            semiotics heirloom four loko roof party mumblecore
                            cliche butcher meditation.
                          </p>
                          <ul className="car-info">
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-calendar"></i>
                                <p>2013</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-speed"></i>
                                <p>160p/h</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-road"></i>
                                <p>26.00km</p>
                              </div>
                            </li>
                            <li>
                              <div className="item">
                                <i className="flaticon flaticon-fuel"></i>
                                <p>Petrol</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-5">
                      <div className="page-numbers">
                        <div className="pagination-content">
                          <ul>
                            <li className="active">
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                            <li>
                              <a href="#">4</a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-angle-double-right"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                                    placeholder={words["type keyboard"]}
                                    onChange={this.handleChange}
                                  />
                                </div>
                                <div className="col-md-12">
                                  <div className="input-select">
                                    <select name="brand" id="brand">
                                      <option value="-1">
                                        {words["select brand"]}
                                      </option>
                                      <option>Wolkswagen</option>
                                      <option>Audi</option>
                                      <option>Bmw</option>
                                      <option>Opel</option>
                                      <option>Citroen</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="input-select">
                                    <select name="mark" id="mark">
                                      <option value="-1">
                                        {words["select model"]}
                                      </option>
                                      <option>Audi A3</option>
                                      <option>Audi A4</option>
                                      <option>Audi A5</option>
                                      <option>Audi A6</option>
                                      <option>Audi A7</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="input-select">
                                    <select name="min-price" id="min-price">
                                      <option value="-1">
                                        {words["min price"]}
                                      </option>
                                      <option>$500</option>
                                      <option>$1.000</option>
                                      <option>$1.500</option>
                                      <option>$2.000</option>
                                      <option>$2.500</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="input-select">
                                    <select name="max-price" id="max-price">
                                      <option value="-1">
                                        {words["max price"]}
                                      </option>
                                      <option>$5.000</option>
                                      <option>$7.500</option>
                                      <option>$10.000</option>
                                      <option>$15.500</option>
                                      <option>$20.000</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="input-select">
                                    <select name="fuel" id="fuel">
                                      <option value="-1">
                                        {words["fuel type"]}
                                      </option>
                                      <option>Gasoline</option>
                                      <option>Diesel</option>
                                      <option>Energy</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="input-select">
                                    <select
                                      name="transmission"
                                      id="transmission"
                                    >
                                      <option value="-1">
                                        {words["transmission type"]}
                                      </option>
                                      <option>Automatic</option>
                                      <option>Manual</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="input-select">
                                    <select name="body" id="body">
                                      <option value="-1">
                                        {words["body type"]}
                                      </option>
                                      <option>Mini Car</option>
                                      <option>Coupe</option>
                                      <option>Convertible</option>
                                      <option>Pick Up</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="secondary-button">
                                    <a href="#">
                                      {words["search"]}{" "}
                                      <i className="fa fa-search"></i>
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
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CarList;
