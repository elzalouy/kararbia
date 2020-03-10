import { Component } from "react";
import { getCars } from "../../httpServices/car/car";
class HomeInterface extends Component {
  state = { cars: [] };
  async componentDidMount() {
    const state = this.state;
    let { data } = await getCars();
    state.cars = data;
    this.setState(state);
  }
}

export default HomeInterface;
