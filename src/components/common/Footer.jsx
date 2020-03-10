/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords.js";
import { Component } from "react";
class Footer extends Component {
  render() {
    let { words } = getWords();
    return (
      <footer className="mt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-item">
                <div className="about-us">
                  <h2>{words["about us"]}</h2>
                  <p>
                    Irony actually meditation, occupy mumblecore wayfarers
                    organic pickled 90's. Intelligentsia as actually +1 meh
                    photo booth.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-behance"></i>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-dribbble    "></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <div className="what-offer">
                  <h2>{words["what we offer"]}</h2>
                  <ul>
                    <li>
                      <a href="#">Rent a car now</a>
                    </li>
                    <li>
                      <a href="#">Search for sale</a>
                    </li>
                    <li>
                      <a href="#">Try search form</a>
                    </li>
                    <li>
                      <a href="#">Best daily dealers</a>
                    </li>
                    <li>
                      <a href="#">Weekly lucky person</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <div className="need-help">
                  <h2>{words["need help"]}</h2>
                  <ul>
                    <li>
                      <a href="#">Modern wheels</a>
                    </li>
                    <li>
                      <a href="#">Awesome spoilers</a>
                    </li>
                    <li>
                      <a href="#">Dynamic Enetrior</a>
                    </li>
                    <li>
                      <a href="#">Save accidents </a>
                    </li>
                    <li>
                      <a href="#">Recorded Racing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-item">
                <div className="our-gallery">
                  <h2>{words["our galary"]}</h2>
                  <ul>
                    <li>
                      <a href="#">
                        <img src="http://placehold.it/70x70" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="http://placehold.it/70x70" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="http://placehold.it/70x70" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="http://placehold.it/70x70" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="http://placehold.it/70x70" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="http://placehold.it/70x70" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="sub-footer">
                <p>
                  Copyright 2020. All rights reserved by:{" "}
                  <a href="#"> Kar Arabia</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
