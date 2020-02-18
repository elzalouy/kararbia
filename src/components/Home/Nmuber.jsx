import React from "react";

const Numbers = () => {
  return (
    <section className="b-count">
      <div className="container">
        <div className="row">
          <div
            className="col-md-11 col-xs-12 percent-blocks m-main"
            data-waypoint-scroll="true"
          >
            <div className="row">
              <div className="col-sm-3 col-xs-6">
                <div className="b-count__item">
                  <div className="b-count__item-circle" data-aos="flip-up">
                    <span className="fa fa-car"></span>
                  </div>
                  <div className="chart" data-percent="5000" data-aos="flip-up">
                    <h2 className="percent">5000</h2>
                  </div>
                  <h5 data-aos="flip-up">vehicles in stock</h5>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="b-count__item">
                  <div className="b-count__item-circle" data-aos="flip-up">
                    <span className="fa fa-users"></span>
                  </div>
                  <div className="chart" data-percent="3100" data-aos="flip-up">
                    <h2 className="percent">3100</h2>
                  </div>
                  <h5 data-aos="flip-up">HAPPY CUSTOMER REVIEWS</h5>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="b-count__item">
                  <div className="b-count__item-circle" data-aos="flip-up">
                    <span className="fa fa-building-o"></span>
                  </div>
                  <div className="chart" data-percent="54" data-aos="flip-up">
                    <h2 className="percent">54</h2>
                  </div>
                  <h5 data-aos="flip-up">DEALER BRANCHES</h5>
                </div>
              </div>
              <div className="col-sm-3 col-xs-6">
                <div className="b-count__item j-last">
                  <div className="b-count__item-circle" data-aos="flip-up">
                    <span className="fa fa-suitcase"></span>
                  </div>
                  <div className="chart" data-percent="547" data-aos="flip-up">
                    <h2 className="percent">547</h2>
                  </div>
                  <h5 data-aos="flip-up">FREE PARTS GIVEN</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
