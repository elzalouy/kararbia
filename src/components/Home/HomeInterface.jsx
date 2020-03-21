import { Component } from "react";
import { getCars } from "../../httpServices/car/car";
import { toast } from "react-toastify";
import { deleteCar } from "../../httpServices/car/car";
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
  handleDeleteCar = async ({ currentTarget: e }) => {
    let result = window.confirm("Are you sure, Delete this car?");
    if (result) {
      const result = await deleteCar(e.id);
      if (result.error) toast.warn(result.error.message);
      else {
        window.location.reload();
      }
    }
  };
}

export default HomeInterface;
