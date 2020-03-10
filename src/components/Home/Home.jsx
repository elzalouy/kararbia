import React from "react";
import HomeInterface from "./HomeInterface";
import Search from "./search";
import Carousel from "./Carousel";
import Features from "./Features";
import RecentCars from "./RecentCars";
import Feedbacks from "./Feedbacks";
import News from "./News";
class Home extends HomeInterface {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Carousel cars={this.state} />
        <Features />
        {/* <section>
          <div className="call-to-action wow fadeIn" data-wow-duration="0.75s">
            <div className="container">
              <div className="call-to-action-content">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      Ramps meditation wayfarers copper mug four loko locavore{" "}
                      <em>portland</em> leggings irony umami tumblr
                    </p>
                    <div className="secondary-button">
                      <Link to="#">
                        Take Now <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <RecentCars cars={this.state.cars} />
        <Feedbacks />
        <News />
      </React.Fragment>
    );
  }
}

export default Home;
