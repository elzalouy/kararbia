import { Component } from "react";
import img1 from "../../media/main-slider/1.jpg";
import img2 from "../../media/main-slider/2.jpg";
import img3 from "../../media/main-slider/3.jpg";

class HomeInterface extends Component {
  state = {
    RouteStatus: "Home",
    cars: [
      {
        name: "Lamborghini Aventador 1",
        model: "",
        year: "2015",
        price: "$184,900",
        primaryImg: { imageUrl: img1, public_id: "" },
        images: [{ imageUrl: img1, public_id: "" }]
      },
      {
        name: "Lamborghini Aventador 2",
        model: "",
        year: "2015",
        price: "$184,900",
        primaryImg: { imageUrl: img2, public_id: "" },

        images: [{ imageUrl: img2, public_id: "" }]
      },
      {
        name: "Lamborghini Aventador 3",
        model: "",
        year: "2015",
        price: "$184,900",
        primaryImg: { imageUrl: img3, public_id: "" },
        images: [{ imageUrl: img3, public_id: "" }]
      }
    ]
  };
  componentDidMount() {
    const state = this.state;
    state.data = "ezat";
    this.setState({ state });
  }
}

export default HomeInterface;
