import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../../images/slider1.jpeg";
import slide2 from "../../images/slider2.jpeg";
import slide3 from "../../images/slider3.jpeg";
const Carousel = () => {
  return (
    <React.Fragment>
      <div className="Modern-Slider">
        <div className="item">
          <div className="img-fill">
            <img src={slide1} alt="" />
            <div className="info">
              <div>
                <h5>ACROPOS HAS THE BEST CHOICE</h5>
                <h3>
                  Looking For Perffect <em>Car</em>?
                </h3>
                <h6 className="secondary-button">
                  <Link to="#">
                    Find Your Car <i className="fa fa-car"></i>
                  </Link>
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
                <h5>ACROPOS HAS THE BEST CHOICE</h5>
                <h3>
                  Looking For Perffect <em>Car</em>?
                </h3>
                <h6 className="secondary-button">
                  <Link to="#">
                    Find Your Car <i className="fa fa-car"></i>
                  </Link>
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
                <h5>ACROPOS HAS THE BEST CHOICE</h5>
                <h3>
                  Looking For Perffect <em>Car</em>?
                </h3>
                <h6 className="secondary-button">
                  <Link to="#">
                    Find Your Car <i className="fa fa-car"></i>
                  </Link>
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
                      <Link to="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </Link>
                    </div>
                    <div className="down-content">
                      <Link to="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </Link>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <Link to="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </Link>
                    </div>
                    <div className="down-content">
                      <Link to="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </Link>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <Link to="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </Link>
                    </div>
                    <div className="down-content">
                      <Link to="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </Link>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <Link to="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </Link>
                    </div>
                    <div className="down-content">
                      <Link to="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </Link>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <Link to="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </Link>
                    </div>
                    <div className="down-content">
                      <Link to="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </Link>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <Link to="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </Link>
                    </div>
                    <div className="down-content">
                      <Link to="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </Link>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <Link to="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </Link>
                    </div>
                    <div className="down-content">
                      <Link to="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </Link>
                      <span>$36.000</span>
                    </div>
                  </div>
                  <div className="item car-item">
                    <div className="thumb-content">
                      <Link to="single_car.html">
                        <img src="http://placehold.it/370x260" alt="" />
                      </Link>
                    </div>
                    <div className="down-content">
                      <Link to="single_car.html">
                        <h4>Perfect Sport Car</h4>
                      </Link>
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
