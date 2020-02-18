import React from "react";

const Carousel = ({ cars }) => {
  return (
    <section className="b-slider">
      <div id="carousel" className="slide carousel carousel-fade">
        <div className="carousel-inner">
          {cars &&
            cars.length > 0 &&
            cars.map(item => (
              <div
                key={cars.indexOf(item)}
                className={cars.indexOf(item) === 0 ? "item active" : "item"}
              >
                <img src={item.primaryImg.imageUrl} alt="sliderImg" />
                <div className="container">
                  <div className="carousel-caption b-slider__info">
                    <h3>Find your dream</h3>
                    <h2>{item.name}</h2>
                    <p>
                      Model {item.year} <span>{item.price}</span>
                    </p>
                    <a className="btn m-btn" href="detail.html">
                      see details
                      <span className="fa fa-angle-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <a
          className="carousel-control right"
          href="#carousel"
          data-slide="next"
        >
          <span className="fa fa-angle-right m-control-right"></span>
        </a>
        <a className="carousel-control left" href="#carousel" data-slide="prev">
          <span className="fa fa-angle-left m-control-left"></span>
        </a>
      </div>
    </section>
  );
};

export default Carousel;
