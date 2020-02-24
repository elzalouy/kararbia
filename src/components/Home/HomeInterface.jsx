import { Component } from "react";
import img1 from "../../media/main-slider/1.jpg";
import img2 from "../../media/main-slider/2.jpg";
import img3 from "../../media/main-slider/3.jpg";
const _ = require("lodash");
class HomeInterface extends Component {
  state = {
    RouteStatus: "Home",
    cars: [
      {
        name: "Lamborghini Aventador 1",
        model: "N2",
        year: 2016,
        price: 10450,
        primaryImg: { imageUrl: img1, public_id: "" },
        images: [{ imageUrl: img1, public_id: "" }],
        priceValue: 35000,
        vehicleType: "",
        make: "Mercedes",
        vehicleStatus: ""
      },
      {
        name: "Lamborghini Aventador 2",
        model: "A9",
        year: 2015,
        price: 184900,
        primaryImg: { imageUrl: img2, public_id: "" },
        images: [{ imageUrl: img2, public_id: "" }],
        priceValue: 20000,
        vehicleType: "",
        make: "BMW",
        vehicleStatus: ""
      },
      {
        name: "Lamborghini Aventador 3",
        model: "S6",
        year: 2015,
        price: 184900,
        primaryImg: { imageUrl: img3, public_id: "" },
        images: [{ imageUrl: img3, public_id: "" }],
        priceValue: 100000,
        vehicleType: "",
        make: "Nissan",
        vehicleStatus: ""
      }
    ],
    searchItems: {
      priceValue: 0,
      max: 0,
      min: 0,
      priceVal: 0,
      vehicleType: "",
      make: "",
      model: "",
      vehicleStatus: "",
      minYear: 0,
      maxYear: 0,
      manufactorerList: [],
      modelList: [],
      years: []
    },
    searchedItems: []
  };
  componentDidMount() {
    const state = this.state;
    let prices = [];
    state.cars.forEach(s => {
      state.searchItems.years.push(s.year);
      state.searchItems.manufactorerList.push(s.make);
      state.searchItems.modelList.push(s.model);
      prices.push(s.price);
    });
    state.searchItems.years = _.sortedUniq(state.searchItems.years);
    state.searchItems.modelList = _.sortedUniq(state.searchItems.modelList);
    state.searchItems.manufactorerList = _.sortedUniq(
      state.searchItems.manufactorerList
    );
    state.searchItems.minYear = _.min(state.searchItems.years);
    state.searchItems.maxYear = _.max(state.searchItems.years);
    state.searchItems.min = state.searchItems.min = _.min(prices);
    state.searchItems.max = _.max(prices);
    this.setState({ state });
  }
}

export default HomeInterface;
