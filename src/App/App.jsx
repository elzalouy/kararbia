import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Services from "./Services";
import Footer from "../components/common/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./app.css";
class App extends Services {
  render() {
    AOS.init({ duration: 1000, delay: 1050 });
    return (
      <BrowserRouter>
        <Navbar
          address="202 W 7TH ST, LOS ANGELES, CA 90014"
          phone="1-800- 624-5462"
          email="kararabia@gmail.com"
        />
        <div className="app">
          <Switch>{this.state.Routes.map(item => item.Route)}</Switch>
          <Footer />
          <a id="to-top" href="#this-is-top" data-wow-delay="0.5s">
            <i className="fa fa-chevron-up"></i>
          </a>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
