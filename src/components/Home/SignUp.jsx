import React from "react";
const SignUp = () => {
  return (
    <section className="b-contact">
      <div className="container">
        <div className="row" data-aos="zoom-in-left">
          <div className="col-xs-4">
            <div className="b-contact-title">
              <h5>LATEST NEWS &amp; DEALS</h5>
              <br />
              <h2>NEWSLETTER SIGNUP</h2>
            </div>
          </div>
          <div className="col-xs-8">
            <div className="b-contact__form">
              <p>
                WE SEND GREAT DEALS AND LATEST AUTO NEWS TO OUR SUBSCRIBED USERS
                EVERY WEEK. ITS FREE SO SUBSCRIBE TODAY!
              </p>
              <form action="/" method="POST">
                <div>
                  <span className="fa fa-user"></span>
                  <input type="text" name="user" placeholder="Your Name" />
                </div>
                <div>
                  <span className="fa fa-envelope"></span>
                  <input type="text" name="email" placeholder="Your Email" />
                </div>
                <button type="submit">
                  <span className="fa fa-angle-right"></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
