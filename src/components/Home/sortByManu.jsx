import React, { Component } from "react";
import acuraImg from "../../media/270x150/acura.jpg";

class SortByManu extends Component {
  state = {};
  render() {
    return (
      <section className="b-auto">
        <div className="container">
          <h5 className="s-titleBg" data-aos="zoom-in-left">
            GIVING OUR CUSTOMERS BEST DEALS
          </h5>
          <br />
          <h2 className="s-title" data-aos="zoom-in-left">
            BEST OFFERS FROM AUTOCLUB
          </h2>
          <div className="row">
            <div className="col-xs-5 col-sm-4 col-md-3">
              <aside className="b-auto__main-nav" data-aos="zoom-in-left">
                <ul>
                  <li className="active">
                    <a href="$">All Manufacturers</a>
                    <span className="fa fa-angle-right"></span>
                  </li>
                  <li>
                    <a href="$">Chevrolet</a>
                  </li>
                  <li>
                    <a href="$">Honda</a>
                  </li>
                  <li>
                    <a href="$">Toyota</a>
                  </li>
                  <li>
                    <a href="$">Bmw</a>
                  </li>
                  <li>
                    <a href="$">Volkswagen</a>
                  </li>
                  <li>
                    <a href="$">Ferrari</a>
                  </li>
                  <li>
                    <a href="$">Audi</a>
                  </li>
                </ul>
                <div className="owl-buttons">
                  <div className="owl-prev j-tab" data-to="#first"></div>
                  <div className="owl-next j-tab" data-to="#second"></div>
                </div>
              </aside>
            </div>
            <div className="col-md-9 col-sm-8 col-xs-7">
              <div className="b-auto__main">
                <div className="col-md-11 col-md-offset-1 col-xs-12">
                  <a
                    href="$"
                    className="b-auto__main-toggle s-lineDownCenter m-active j-tab"
                    data-aos="zoom-in-left"
                    data-to="#first"
                  >
                    MOST RESEARCHED MANUFACTURERS
                  </a>
                  <a
                    href="$"
                    className="b-auto__main-toggle j-tab"
                    data-aos="zoom-in-right"
                    data-to="#second"
                  >
                    LATEST VEHICLES ON SALE
                  </a>
                </div>
                <div className="clearfix"></div>
                <div className="row m-margin" id="first">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="b-auto__main-item" data-aos="fade-up">
                      <img
                        className="img-responsive"
                        src={acuraImg}
                        alt="mazda"
                      />
                      <div className="b-world__item-val">
                        <span className="b-world__item-val-title">
                          REGISTERED <span>2014</span>
                        </span>
                      </div>
                      <h2>
                        <a href="detail.html">Acura RLX Sport Hybrid</a>
                      </h2>
                      <div className="b-auto__main-item-info">
                        <span className="m-price">$44,380</span>
                        <span className="m-number">
                          <span className="fa fa-tachometer"></span>
                          35,000 KM
                        </span>
                      </div>
                      <div className="b-featured__item-links m-auto">
                        <a href="$">Used</a>
                        <a href="$">2014</a>
                        <a href="$">Manual</a>
                        <a href="$">Orange</a>
                        <a href="$">Petrol</a>
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
  }
}

export default SortByManu;
