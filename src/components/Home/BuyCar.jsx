import React from "react";

const BuyCar = () => {
  return (
    <section className="b-asks">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12">
            <div className="b-asks__first" data-aos="zoom-in">
              <div className="b-asks__first-circle">
                <span className="fa fa-search"></span>
              </div>
              <div className="b-asks__first-info">
                <h2>ARE YOU LOOKING FOR A CAR?</h2>
                <p>
                  Search Our Inventory With Thousands Of Cars And More Cars Are
                  Adding On Daily Basis
                </p>
              </div>
              <div className="b-asks__first-arrow">
                <a href="listingsTwo.html">
                  <span className="fa fa-angle-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0">
            <div className="b-asks__first m-second" data-aos="zoom-in">
              <div className="b-asks__first-circle">
                <span className="fa fa-usd"></span>
              </div>
              <div className="b-asks__first-info">
                <h2>DO YOU WANT TO SELL A CAR?</h2>
                <p>
                  Search Our Inventory With Thousands Of Cars And More Cars Are
                  Adding On Daily Basis
                </p>
              </div>
              <div className="b-asks__first-arrow">
                <a href="listingsTwo.html">
                  <span className="fa fa-angle-right"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <p className="b-asks__call" data-aos="zoom-in-up">
              QUESTIONS? CALL US : <span>1-800- 624-5462</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyCar;
