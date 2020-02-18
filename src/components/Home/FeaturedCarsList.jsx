import React, { Component } from "react";
import OwlCarouselElement from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import mersImg from "../../media/186x113/mers.jpg";

class FeaturedCarsList extends Component {
  state = { items: [] };
  componentDidMount() {
    const state = this.state;
    state.items = this.props.items;
    this.setState({ state });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.items.length && (
          <OwlCarouselElement
            className="owl-theme"
            data-aos="fade-in-up"
            loop={true}
            autoplay={true}
            autoplayTimeout={3000}
            autoplaySpeed={600}
            nav={false}
            dots={false}
            navContainerClass="owl-buttons"
            navClass={["owl-prev j-tab btn", "btn owl-next j-tab"]}
            items={4}
          >
            <>
              {this.state.items.map(item => (
                <div
                  key={this.state.items.indexOf(item)}
                  className="item b-featured__item"
                  data-aos="flip-left"
                >
                  <a href="detail.html">
                    <img src={mersImg} alt="mers" />
                    <span className="m-premium">{item.style}</span>
                  </a>
                  <div className="b-featured__item-price">{item.price}</div>
                  <div className="clearfix"></div>
                  <h5>
                    <a href="detail.html">{item.name}</a>
                  </h5>
                  <div className="b-featured__item-count">
                    <span className="fa fa-tachometer"></span>
                    {item.Kilometres}
                  </div>
                  <div className="b-featured__item-links">
                    <a href="$">{item.status}</a>
                    <a href="$">{item.year}</a>
                    <a href="$">{item.transimision}</a>
                    <a href="$">{item.ExteriorColor}</a>
                    <a href="$">{item.Fuel_Type}</a>
                  </div>
                </div>
              ))}
            </>
          </OwlCarouselElement>
        )}
      </React.Fragment>
    );
  }
}
export default FeaturedCarsList;
