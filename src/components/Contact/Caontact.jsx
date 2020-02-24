/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
const ContactUs = () => {
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
                      <a href="index.html">Homepage</a> / <em> Contact Us</em>
                    </p>
                    <h2>
                      Contact <em>Us</em>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="contact-us wow fadeIn"
        data-wow-delay="0.5s"
        data-wow-duration="1s"
      >
        <div id="map"></div>
      </div>

      <section>
        <div
          className="contact-content wow fadeIn"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="send-message">
                  <div className="sep-section-heading">
                    <h2>
                      Send Us <em>Message</em>
                    </h2>
                  </div>
                  <form
                    id="contact_form"
                    action="#"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <div className="row">
                      <div className=" col-md-4 col-sm-4 col-xs-6">
                        <input
                          type="text"
                          className="blog-search-field"
                          name="s"
                          placeholder="Your name..."
                          value=""
                        />
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-6">
                        <input
                          type="text"
                          className="blog-search-field"
                          name="s"
                          placeholder="Your email..."
                          value=""
                        />
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="text"
                          className="subject"
                          name="s"
                          placeholder="Subject..."
                          value=""
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <textarea
                          id="message"
                          className="input"
                          name="message"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="row">
                      <div className="submit-coment col-md-12">
                        <div className="primary-button">
                          <a href="#">
                            Send now <i className="fa fa-paper-plane"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="contact-info">
                  <div className="sep-section-heading">
                    <h2>
                      Contact <em>Informations</em>
                    </h2>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Obcaecati accusamus a iure nulla, sed non ex nobis eius esse
                    distinctio imps sunt quia sint quis quisquam odio repellat.
                  </p>
                  <div className="info-list">
                    <ul>
                      <li>
                        <i className="fa fa-phone"></i>
                        <span>+1 123 489-5748</span>
                      </li>
                      <li>
                        <i className="fa fa-envelope"></i>
                        <span>youremail@gmail.com</span>
                      </li>
                    </ul>
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

export default ContactUs;
