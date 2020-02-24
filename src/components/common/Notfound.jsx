import React from "react";
import notfoundfImg from "../../images/404.png";
import notfoundImg2 from "../../images/404Bg.jpg";
// import pageHeadImg from "../../images/pageHead.jpg";
const NotFound = () => {
  return (
    <div className="" data-scrolling-animations="true">
      {/* <section
        className="b-pageHeader"
        style={{
          background: `url(${pageHeadImg}) center`
        }}
      ></section> */}
      <section className="container">
        <div className="justify-content-center align-items-center row">
          <div className="col-12 text-center">
            <img
              className="wow zoomInUp"
              data-wow-delay="0.7s"
              src={notfoundfImg}
              alt="404"
            />
          </div>
          <div className="col-12 text-center mt-5">
            <h2 className="wow zoomInUp" data-wow-delay="0.7s">
              page not found
            </h2>
          </div>
          <p className="wow zoomInUp" data-wow-delay="0.7s">
            The page you are looking for is not available and might have been
            removed, its name changed or is temprarily unavailable.
          </p>
        </div>
        <img alt="audi" src={notfoundImg2} className="w-100" />
      </section>
    </div>
  );
};

export default NotFound;
