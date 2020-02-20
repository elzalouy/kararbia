import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="b-info">
        <div className="container">
          <div className="row w-100">
            <div className="col-md-3 col-xs-6">
              <aside className="b-info__aside" data-aos="zoom-in-left">
                <article className="b-info__aside-article">
                  <h3>OPENING HOURS</h3>
                  <div className="b-info__aside-article-item">
                    <h6>Sales Department</h6>
                    <p>
                      Mon-Sat : 8:00am - 5:00pm
                      <br />
                      Sunday is closed
                    </p>
                  </div>
                  <div className="b-info__aside-article-item">
                    <h6>Service Department</h6>
                    <p>
                      Mon-Sat : 8:00am - 5:00pm
                      <br />
                      Sunday is closed
                    </p>
                  </div>
                </article>
                <article className="b-info__aside-article">
                  <h3>About us</h3>
                  <p>
                    Vestibulum varius od lio eget conseq uat blandit, lorem
                    auglue comm lodo nisl non ultricies lectus nibh mas lsa Duis
                    scelerisque aliquet. Ante donec libero pede porttitor dacu
                    msan esct venenatis quis.
                  </p>
                </article>
                <a href="about.html" className="btn m-btn">
                  Read More<span className="fa fa-angle-right"></span>
                </a>
              </aside>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="b-info__latest">
                <h3>LATEST AUTOS</h3>
                <div className="b-info__latest-article" data-aos="zoom-in-up">
                  <div className="b-info__latest-article-photo m-audi"></div>
                  <div className="b-info__latest-article-info">
                    <h6>
                      <a href="detail.html">MERCEDES-AMG GT S</a>
                    </h6>
                    <p>
                      <span className="fa fa-tachometer"></span> 35,000 KM
                    </p>
                  </div>
                </div>
                <div className="b-info__latest-article" data-aos="zoom-in-up">
                  <div className="b-info__latest-article-photo m-audiSpyder"></div>
                  <div className="b-info__latest-article-info">
                    <h6>
                      <a href="$">AUDI R8 SPYDER V-8</a>
                    </h6>
                    <p>
                      <span className="fa fa-tachometer"></span> 35,000 KM
                    </p>
                  </div>
                </div>
                <div className="b-info__latest-article" data-aos="zoom-in-up">
                  <div className="b-info__latest-article-photo m-aston"></div>
                  <div className="b-info__latest-article-info">
                    <h6>
                      <a href="$">ASTON MARTIN VANTAGE</a>
                    </h6>
                    <p>
                      <span className="fa fa-tachometer"></span> 35,000 KM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-6">
              <div className="b-info__twitter overflow_hidden">
                <h3>from twitter</h3>
                <div className="b-info__twitter-article" data-aos="zoom-in-up">
                  <div className="b-info__twitter-article-icon">
                    <span className="fa fa-twitter"></span>
                  </div>
                  <div className="b-info__twitter-article-content">
                    <p>
                      Duis scelerisque aliquet ante donec libero pede porttitor
                      dacu
                    </p>
                    <span>20 minutes ago</span>
                  </div>
                </div>
                <div className="b-info__twitter-article " data-aos="zoom-in-up">
                  <div className="b-info__twitter-article-icon overflow_hidden">
                    <span className="fa fa-twitter"></span>
                  </div>
                  <div className="b-info__twitter-article-content">
                    <p>
                      Duis scelerisque aliquet ante donec libero pede porttitor
                      dacu
                    </p>
                    <span>20 minutes ago</span>
                  </div>
                </div>
                <div
                  className="b-info__twitter-article overflow_hidden"
                  data-aos="zoom-in-up"
                >
                  <div className="b-info__twitter-article-icon">
                    <span className="fa fa-twitter"></span>
                  </div>
                  <div className="b-info__twitter-article-content">
                    <p>
                      Duis scelerisque aliquet ante donec libero pede porttitor
                      dacu
                    </p>
                    <span>20 minutes ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xs-6 overflow_hidden">
              <address
                className="b-info__contacts overflow_hidden"
                data-aos="zoom-in-up"
              >
                <p>contact us</p>
                <div className="b-info__contacts-item">
                  <span className="fa fa-map-marker"></span>
                  <em>
                    202 W 7th St, Suite 233 Los Angeles, California 90014 USA
                  </em>
                </div>
                <div className="b-info__contacts-item">
                  <span className="fa fa-phone"></span>
                  <em>Phone: 1-800- 624-5462</em>
                </div>
                <div className="b-info__contacts-item">
                  <span className="fa fa-fax"></span>
                  <em>FAX: 1-800- 624-5462</em>
                </div>
                <div className="b-info__contacts-item">
                  <span className="fa fa-envelope"></span>
                  <em>Email: info@domain.com</em>
                </div>
              </address>
              <address className="b-info__map">
                <a href="contacts.html">Open Location Map</a>
              </address>
            </div>
          </div>
        </div>
      </div>
      <footer className="b-footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-4 overflow_hidden">
              <div className="b-footer__company">
                <div className="b-nav__logo_footer">
                  <h3>
                    <Link to="/">
                      KAR<span>ARABIA</span>
                    </Link>
                  </h3>
                </div>
                <p>
                  &copy; 2020 Designed by{" "}
                  <a href="https://www.linkedin.com/in/ezat-elzalouy-844bb0133/">
                    Ezat Elzalouy
                  </a>{" "}
                  &amp; Powered by KarArabia.
                </p>
              </div>
            </div>
            <div className="col-xs-8 overflow_hidden">
              <div className="b-footer__content overflow_hidden">
                <div className="b-footer__content-social overflow_hidden">
                  <a href="$">
                    <span className="fa fa-facebook-square"></span>
                  </a>
                  <a href="$">
                    <span className="fa fa-twitter-square"></span>
                  </a>
                  <a href="$">
                    <span className="fa fa-google-plus-square"></span>
                  </a>
                  <a href="$">
                    <span className="fa fa-instagram"></span>
                  </a>
                  <a href="$">
                    <span className="fa fa-youtube-square"></span>
                  </a>
                  <a href="$">
                    <span className="fa fa-skype"></span>
                  </a>
                </div>
                <nav className="b-footer__content-nav overflow_hidden">
                  <ul>
                    <li>
                      <a href="home.html">Home</a>
                    </li>
                    <li>
                      <a href="404.html">Pages</a>
                    </li>
                    <li>
                      <a href="listings.html">Inventory</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="404.html">Services</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="listTable.html">Shop</a>
                    </li>
                    <li>
                      <a href="contacts.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
