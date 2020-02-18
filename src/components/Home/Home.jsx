import React from "react";
import HomeInterface from "./HomeInterface";
import Carousel from "./carousel";
import Searchvehicles from "./Searchvehicles";
import FeaturedCars from "./FeatuedCars";
import Articles from "./articles";
import SortByManu from "./sortByManu";
import About from "./About";
import Numbers from "./Nmuber";
import Feedbacks from "./Feedbacks";
import LongLogo from "./Longlogo";
import SignUp from "./SignUp";
import BuyCar from "./BuyCar";
class Home extends HomeInterface {
  render() {
    return (
      <React.Fragment>
        <div
          className="m-index"
          data-scrolling-animations="true"
          data-equal-height=".b-auto__main-item"
        >
          {!this.state.data ? (
            <div id="page-preloader">
              <span className="spinner"></span>
            </div>
          ) : (
            <React.Fragment>
              <Carousel cars={this.state.cars} />
              <Searchvehicles />
              <FeaturedCars />
              <About />
              <Articles />
              <BuyCar />
              <SortByManu />
              <Numbers />
              <SignUp />
              <Feedbacks />
              <LongLogo />
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
