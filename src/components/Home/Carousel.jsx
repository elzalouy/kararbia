import React from "react";
import slide1 from "../../images/slider1.jpeg";
import slide2 from "../../images/slider2.jpeg";
import slide3 from "../../images/slider3.jpeg";
import getWords from "../../utils/GetWords";
const Carousel = () => {
  let { words } = getWords();
  return (
    <React.Fragment>
      <div className="Modern-Slider">
        <div className="item">
          <div className="img-fill">
            <img src={slide1} alt="" />
            <div className="info">
              <div>
                <h5>{words["home carousel subtitle"]}</h5>
                <h3>
                  {words["home carousel title"]} <em>{words["car"]}</em>?
                </h3>
                <h6 className="secondary-button">
                  <a href="/cars">
                    {words["home carousel button"]}{" "}
                    <i className="fa fa-car"></i>
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <img src={slide2} alt="" />
            <div className="info">
              <div>
                <h5>{words["home carousel subtitle"]}</h5>
                <h3>
                  {words["home carousel title"]} <em>{words["car"]}</em>?
                </h3>
                <h6 className="secondary-button">
                  <a href="/cars">
                    {words["home carousel button"]}{" "}
                    <i className="fa fa-car"></i>
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="img-fill">
            <img src={slide3} alt="" />
            <div className="info">
              <div>
                <h5>{words["home carousel subtitle"]}</h5>
                <h3>
                  {words["home carousel title"]} <em>{words["car"]}</em>?
                </h3>
                <h6 className="secondary-button">
                  <a href="/cars">
                    {words["home carousel button"]}{" "}
                    <i className="fa fa-car"></i>
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="top-slider-features wow fadeIn"
        data-wow-duration="1.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="slider-top-features">
                <div id="owl-top-features" className="owl-carousel owl-theme">
                  <div className="item car-item">
                    <div className="thumb-content">
                      <a href="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </a>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <a href="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </a>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <a href="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </a>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <a href="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </a>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <a href="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </a>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <a href="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </a>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <a href="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </a>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <a href="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                    <div className="down-content">
                      <a href="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </a>
                      <span>$36.000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Carousel;
