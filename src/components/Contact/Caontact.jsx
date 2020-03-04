/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords.js";
const ContactUs = () => {
  let { words, lang } = getWords();
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
                      <a href="/">{words["homepage"]}</a> /{" "}
                      <em> {words["contact us"]}</em>
                    </p>
                    <h2>
                      {words["contact"]} <em>{words["us2"]}</em>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="p-0">
        <div
          className="contact-content wow fadeIn mb-5"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="send-message">
                  <div className="sep-section-heading">
                    <h2>
                      {words["send"]} {words["us3"]} <em>{words["message"]}</em>
                    </h2>
                  </div>
                  <form
                    id="contact_form"
                    action="#"
                    method="POST"
                    encType="multipart/form-data"
                  >
                    <div className="row">
                      <div className=" col-md-4 col-sm-4 col-xs-6">
                        <input
                          type="text"
                          className="blog-search-field"
                          name="s"
                          placeholder="Your name..."
                        />
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-6">
                        <input
                          type="text"
                          className="blog-search-field"
                          name="s"
                          placeholder="Your email..."
                        />
                      </div>
                      <div className="col-md-4 col-sm-4 col-xs-12">
                        <input
                          type="text"
                          className="subject"
                          name="s"
                          placeholder="Subject..."
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
                      {lang === "eng" ? (
                        <React.Fragment>
                          {words["contact"]} <em>{words["information"]}</em>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <em>{words["information"]}</em> {words["contact"]}
                        </React.Fragment>
                      )}
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
