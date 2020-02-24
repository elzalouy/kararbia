import React from "react";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <section>
      <div className="features-search-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div
                    className="service-item wow fadeIn"
                    data-wow-duration="0.75s"
                  >
                    <i className="fa fa-car"></i>
                    <div className="text-content">
                      <h6>Sell &amp; Buy Cars</h6>
                      <p>
                        Irony actually meditation, ocupy mumble core wayfarers
                        organic pickled.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="service-item wow fadeIn"
                    data-wow-duration="0.75s"
                  >
                    <i className="fa fa-search"></i>
                    <div className="text-content">
                      <h6>Car Dealer Research</h6>
                      <p>
                        Irony actually meditation, ocupy mumble core wayfarers
                        organic pickled.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="service-item wow fadeIn"
                    data-wow-duration="0.75s"
                  >
                    <i className="fa fa-users"></i>
                    <div className="text-content">
                      <h6>Best Dealers</h6>
                      <p>
                        Irony actually meditation, ocupy mumble core wayfarers
                        organic pickled.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="service-item wow fadeIn"
                    data-wow-duration="0.75s"
                  >
                    <i className="fa fa-globe"></i>
                    <div className="text-content">
                      <h6>World Wide Known</h6>
                      <p>
                        Irony actually meditation, ocupy mumble core wayfarers
                        organic pickled.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="search-content wow fadeIn"
                data-wow-duration="0.75s"
              >
                <div className="search-heading">
                  <div className="icon">
                    <i className="fa fa-search"></i>
                  </div>
                  <div className="text-content">
                    <h2>Quick Search</h2>
                    <span>We made a quick search just for you</span>
                  </div>
                </div>
                <div className="search-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-select">
                        <select name="brand" id="brand">
                          <option value="-1">Select Band</option>
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
                          <option value="-1">Select Mark</option>
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
                          <option value="-1">Min Price</option>
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
                          <option value="-1">Max Price</option>
                          <option>$5.000</option>
                          <option>$7.500</option>
                          <option>$10.000</option>
                          <option>$15.500</option>
                          <option>$20.000</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="secondary-button">
                        <Link to="#">
                          Search <i className="fa fa-search"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
