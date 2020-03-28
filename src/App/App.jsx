import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/common/Navbar";
import Reloader from "../components/common/preloader";
import Services from "./Services";
import Footer from "../components/common/Footer";
import AOS from "aos";
import { admin, authed } from "../httpServices/auth/auth";
import RemoveAdmin from "../components/User/removeAdmin";
import AddAdmin from "../components/User/addAdmin";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "./app.css";
import "@fortawesome/fontawesome-free/css/all.css";
import ChangePassword from "../components/User/ChangePassword";
import ForgotPassword from "../components/User/ForgotPassword";
class App extends Services {
  render() {
    AOS.init({ delay: 500, duration: 1000 });
    return (
      <BrowserRouter>
        <Reloader />
        <Navbar />
        <ToastContainer className="mt-3 pt-5" />
        {admin() && (
          <React.Fragment>
            <RemoveAdmin />
            <AddAdmin />
          </React.Fragment>
        )}
        {authed() && <ChangePassword />}
        {!authed() && <ForgotPassword />}
        <Switch>{this.state.Routes.map(item => item.Route)}</Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
