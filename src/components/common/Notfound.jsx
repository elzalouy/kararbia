import React from "react";
import notfoundfImg from "../../images/backgrounds/404.png";
import notfoundImg2 from "../../images/backgrounds/404Bg.jpg";
import pageHeadImg from "../../images/backgrounds/pageHead.jpg";
const NotFound = () => {
  return (
    <div className="m-404" data-scrolling-animations="true">
      <section
        className="b-pageHeader"
        style={{
          background: `url(${pageHeadImg}) center`
        }}
      >
        <div className="container">
          <h1 className="wow zoomInUp" data-wow-delay="0.7s">
            Error 404 Page
          </h1>
        </div>
      </section>

      <div className="b-breadCumbs s-shadow">
        <div className="container">
          <a href="/" className="b-breadCumbs__page">
            Home
          </a>
          <span className="fa fa-angle-right"></span>
          <a href="/404" className="b-breadCumbs__page m-active">
            Page Not Found
          </a>
        </div>
      </div>

      <section className="b-error s-shadow">
        <div className="container">
          <h1 className="wow zoomInUp" data-wow-delay="0.7s">
            Error
          </h1>
          <img
            className="img-responsive center-block wow zoomInUp"
            data-wow-delay="0.7s"
            src={notfoundfImg}
            alt="404"
          />
          <h2 className="s-lineDownCenter wow zoomInUp" data-wow-delay="0.7s">
            page not found
          </h2>
          <p className="wow zoomInUp" data-wow-delay="0.7s">
            The page you are looking for is not available and might have been
            removed, its name changed or is temprarily unavailable.
          </p>
          <h3 className="s-title wow zoomInUp" data-wow-delay="0.7s">
            TRY Again Please
          </h3>
        </div>
        <img
          alt="audi"
          src={notfoundImg2}
          className="img-responsive center-block b-error-img"
        />
      </section>
    </div>
  );
};

export default NotFound;
