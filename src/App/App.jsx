import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/common/Navbar";
import Reloader from "../components/common/preloader";
import Services from "./Services";
import Footer from "../components/common/Footer";
import AOS from "aos";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "./app.css";
class App extends Services {
  render() {
    AOS.init({ duration: 1000, delay: 500 });
    return (
      <BrowserRouter>
        <Reloader />
        <Navbar />
        <ToastContainer />
        <Switch>{this.state.Routes.map(item => item.Route)}</Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
