import React from "react";
import Navbar from "../components/common/Navbar";
import Reloader from "../components/common/preloader";
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
import "./custom";
import "./app.css";
import "./main.css";
class App extends Services {
  render() {
    AOS.init({ delay: 500, duration: 1000 });
    return (
      <BrowserRouter>
        <script src="./custom.js"></script>
        <Reloader />
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
