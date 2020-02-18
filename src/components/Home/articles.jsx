import React, { Component } from "react";
import wolksImg from "../../media/370x200/wolks.jpg";
import mazdaImg from "../../media/370x200/mazda.jpg";
import chevroletImg from "../../media/370x200/chevrolet.jpg";

class Articles extends Component {
  state = {};
  render() {
    return (
      <section className="b-world">
        <div className="container">
          <h6 data-aos="zoom-in">EVERYTHING YOU NEED TO KNOW</h6>
          <br />
          <h2 className="s-title" data-aos="zoom-in">
            THE WORLD OF AUTOS
          </h2>
          <div className="row">
            <div className="col-sm-4 col-xs-12">
              <div className="b-world__item" data-aos="zoom-in">
                <img className="img-responsive" src={wolksImg} alt="wolks" />
                <div className="b-world__item-val">
                  <span className="b-world__item-val-title">
                    FIRST DRIVE REVIEW
                  </span>
                  <div className="b-world__item-val-circles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="m-empty"></span>
                  </div>
                  <span className="b-world__item-num">4.1</span>
                </div>
                <h2>2016 Volkswagen Golf R SportWagen</h2>
                <p>
                  Curabitur libero. Donec facilisis velit eu est. Phasellus cons
                  quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ sem
                  velde metus imperdiet lacinia.
                </p>
                <a href="article.html" className="btn m-btn">
                  READ MORE<span className="fa fa-angle-right"></span>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="b-world__item" data-aos="zoom-in">
                <img className="img-responsive" src={mazdaImg} alt="mazda" />
                <div className="b-world__item-val">
                  <span className="b-world__item-val-title">
                    INSTRUMENTED TEST
                  </span>
                  <div className="b-world__item-val-circles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="m-halfEmpty"></span>
                  </div>
                  <span className="b-world__item-num">4.5</span>
                </div>
                <h2>2016 Mazda CX-5 2.5L AWD</h2>
                <p>
                  Curabitur libero. Donec facilisis velit eu est. Phasellus cons
                  quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ sem
                  velde metus imp erdiet lacinia.
                </p>
                <a href="article.html" className="btn m-btn m-active">
                  READ MORE<span className="fa fa-angle-right"></span>
                </a>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="b-world__item j-item " data-aos="zoom-in">
                <img
                  className="img-responsive"
                  src={chevroletImg}
                  alt="chevrolet"
                />
                <div className="b-world__item-val">
                  <span className="b-world__item-val-title">BUYERS INFO</span>
                  <div className="b-world__item-val-circles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className="b-world__item-num">5.0</span>
                </div>
                <h2>Advantages of Buying New or Used Vehicle</h2>
                <p>
                  Curabitur libero. Donec facilisis velit eu est. Phasellus cons
                  quat. Aenean vitae quam. Vivamus et nunc. Nunc consequ sem
                  velde metus imp erdiet lacinia.
                </p>
                <a href="article.html" className="btn m-btn">
                  READ MORE<span className="fa fa-angle-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Articles;
