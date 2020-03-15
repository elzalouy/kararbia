import { Component } from "react";
import { getCars } from "../../httpServices/car/car";
import { toast } from "react-toastify";
class HomeInterface extends Component {
  state = { cars: [] };
  async componentDidMount() {
    try {
      const state = this.state;
      let { data } = await getCars();
      state.cars = data;
      this.setState(state);
    } catch (ex) {
      toast.warn(ex);
    }
  }
}

export default HomeInterface;
