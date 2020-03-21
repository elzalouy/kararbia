import React from "react";
import HomeInterface from "./HomeInterface";
import Search from "./search";
import Carousel from "./Carousel";
import Features from "./Features";
import RecentCars from "./RecentCars";
import Feedbacks from "./Feedbacks";
import News from "./News";
import CarsLink from "./CarsLink";
class Home extends HomeInterface {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Carousel cars={this.state.cars} />
        <Features cars={this.state.cars} />
        <CarsLink />
        <RecentCars
          cars={this.state.cars}
          handleDeleteCar={this.handleDeleteCar}
        />
        <Feedbacks />
        <News />
      </React.Fragment>
    );
  }
}

export default Home;
