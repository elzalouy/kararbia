import React, { Component } from "react";

class LongLogo extends Component {
  state = {};
  render() {
    return (
      <div className="b-features">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-md-offset-3 col-xs-6 col-xs-offset-6">
              <ul className="b-features__items">
                <li data-aos="zoom-in-up">Low Prices, No Haggling</li>
                <li data-aos="zoom-in-up">Largest Car Dealership</li>
                <li data-aos="zoom-in-up">Multipoint Safety Check</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LongLogo;
