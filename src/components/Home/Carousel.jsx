import React from "react";
import slide1 from "../../images/slider1.jpeg";
import slide2 from "../../images/slider2.jpeg";
import slide3 from "../../images/slider3.jpeg";
import getWords from "../../utils/GetWords";
const Carousel = ({ cars }) => {
  let { words } = getWords();
  cars = cars.cars;
  return (
    <React.Fragment>
      <div className="Modern-Slider w-100 overflow_hidden">
        <div className="item">
          <div className="img-fill">
            <img src={slide1} alt="" />
            <div className={cars.length <= 2 ? "info pt-5 mt-5" : "info"}>
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
            <div className={cars.length <= 2 ? "info pt-5 mt-5" : "info"}>
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
            <div className={cars.length <= 2 ? "info pt-5 mt-5" : "info"}>
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
      {cars && cars.length > 7 && (
        <section
          className="top-slider-features wow fadeIn"
          data-wow-duration="1.5s"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="slider-top-features">
                  <div id="owl-top-features" className="owl-carousel owl-theme">
                    {cars &&
                      cars.length > 0 &&
                      cars.map(item => (
                        <div className="item car-item" key={item}>
                          <div className="thumb-content">
                            <a href="/car">
                              <img src={item.images[0].url} alt="" />
                            </a>
                          </div>
                          <div className="down-content">
                            <a href="single_car.html">
                              <h4>
                                {item.name} - {item.model}
                              </h4>
                            </a>
                            <span>${item.price}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Carousel;
