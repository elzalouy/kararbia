import React from "react";
import getWords from "../../utils/GetWords.js";
const About = () => {
  let { words } = getWords();
  return (
    <React.Fragment>
      <div className="page-heading wow fadeIn" data-wow-duration="0.5s">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                className="heading-content-bg wow fadeIn"
                data-wow-delay="0.75s"
                data-wow-duration="1s"
              >
                <div className="row">
                  <div className="heading-content col-md-12">
                    <p>
                      <a href="index.html">{words["homepage"]}</a> /{" "}
                      <em> {words["about us"]}</em>
                    </p>
                    <h2>
                      {words["about"]} <em>{words["us"]}</em>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="services-first about-services wow fadeIn"
        data-wow-delay="0.5s"
        data-wow-duration="1s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service-item">
                <i className="fa fa-car"></i>
                <div className="text-content">
                  <h6>Sell &amp; Buy Cars</h6>
                  <p>
                    Irony actually meditation, occupy mumblecore wayfarers
                    organic pickled 90's.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <i className="fa fa-gear"></i>
                <div className="text-content">
                  <h6>Buy Defect Cars</h6>
                  <p>
                    Irony actually meditation, occupy mumblecore wayfarers
                    organic pickled 90's.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <i className="fa fa-truck"></i>
                <div className="text-content">
                  <h6>Road Assistance</h6>
                  <p>
                    Irony actually meditation, occupy mumblecore wayfarers
                    organic pickled 90's.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <i className="fa fa-search"></i>
                <div className="text-content">
                  <h6>Car Dealer Research</h6>
                  <p>
                    Irony actually meditation, occupy mumblecore wayfarers
                    organic pickled 90's.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <i className="fa fa-globe"></i>
                <div className="text-content">
                  <h6>World Wide Known</h6>
                  <p>
                    Irony actually meditation, occupy mumblecore wayfarers
                    organic pickled 90's.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <i className="fa fa-users"></i>
                <div className="text-content">
                  <h6>Best Dealers</h6>
                  <p>
                    Irony actually meditation, occupy mumblecore wayfarers
                    organic pickled 90's.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="more-about-us">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="http://placehold.it/555x310" alt="" />
              </div>
              <div className="col-md-6">
                <div className="right-content">
                  <span>Lorem ipsum consectetur.</span>
                  <h4>Who we are, what we do?</h4>
                  <p>
                    Thundercats gentrify flannel, raw denim before they sold out
                    PBRB meggings. Godard stumptown forage, tote bag narwhal
                    viral Austin actually.
                    <br />
                    <br />
                    Pop-up flannel direct trade, High Life sriracha chia
                    Pinterest photo booth. Narwhal PBR dreamcatcher, taxidermy
                    stumptown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="our-clients mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <div className="icon">
                    <i className="fa fa-users"></i>
                  </div>
                  <div className="text-content">
                    <h2>Our Happy Clients</h2>
                    <span>Here are our happy clients</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div id="owl-clients" className="owl-carousel owl-theme">
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
                  </div>
                  <div className="item">
                    <img src="http://placehold.it/180x120" alt="" />
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

export default About;
