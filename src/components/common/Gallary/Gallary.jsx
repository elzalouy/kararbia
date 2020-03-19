/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Slider from "react-slick";
const Gallary = ({ images }) => {
  if (!images) return null;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    customPaging: function(i) {
      return (
        <a className="bg-gray">
          <img
            src={`${images[i].url}`}
            className="bg-gray"
            style={{
              width: "80px",
              height: "80px"
            }}
            alt="1"
          />
        </a>
      );
    },
    dotsClass: "col-12 mx-0 px-0  bg-gray slick-dots overflow-x-scroll mb-5",
    arrows: false
  };
  return (
    <Slider {...settings} className="row container slider bg-gray">
      {images.map(item => (
        <div className="mb-1" key={item._id}>
          <img
            src={item.url}
            alt=""
            className="active bg-gray"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Gallary;
