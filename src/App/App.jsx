import React from "react";
import Navbar from "../components/common/Navbar";
import Services from "./Services";
import Footer from "../components/common/Footer";
import AOS from "aos";
import RemoveAdmin from "../components/User/removeAdmin";
import AddAdmin from "../components/User/addAdmin";
import ChangePassword from "../components/User/ChangePassword";
import ForgotPassword from "../components/User/ForgotPassword";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { admin, authed } from "../httpServices/auth/auth";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "./app.css";
import "./main.css";
import "./custom";
class App extends Services {
  componentDidMount() {
    setTimeout(() => {
      let element = document.getElementById("preloader");
      if (element) element.style.display = "none";
    }, 2000);
  }
  render() {
    AOS.init({ delay: 500, duration: 1000 });
    return (
      <BrowserRouter>
        <div className="preloader" id="preloader">
          <div className="preloader-bounce">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Navbar />
        <ToastContainer className="mt-3 pt-5 zIndex" />
        {admin() && (
          <React.Fragment>
            <RemoveAdmin />
            <AddAdmin />
          </React.Fragment>
        )}
        {authed() && <ChangePassword />}
        {!authed() && <ForgotPassword />}
        <Switch>{this.state.Routes.map((item) => item.Route)}</Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
