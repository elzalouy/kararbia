import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NotFound from "../components/common/Notfound";
import Home from "../components/Home/Home";
import CarList from "../components/Car/Carlist";
import SingleCar from "../components/Car/SingleCar";
import Blogs from "../components/Blog/Blogs";
import Blog from "../components/Blog/Blog";
import About from "../components/About/About";
import Login from "../components/User/Login";
import Register from "../components/User/Register";
import ContactUs from "../components/Contact/Caontact";
class Services extends Component {
  state = {
    Routes: [
      {
        route: "/home",
        Route: <Route path="/home" component={Home} key="home" />
      },
      {
        route: "/404",
        Route: <Route path="/404" component={NotFound} key="notfound" />
      },
      {
        route: "/cars",
        Route: <Route path="/cars" component={CarList} key="carlist" />
      },
      {
        route: "/car",
        Route: <Route path="/car" component={SingleCar} key="singlecar" />
      },
      {
        route: "/blogs",
        Route: <Route path="/blogs" component={Blogs} key="blogs" />
      },
      {
        route: "/blog",
        Route: <Route path="/blog" component={Blog} key="blig" />
      },
      {
        route: "/about",
        Route: <Route path="/about" component={About} key="about" />
      },
      {
        route: "/contact",
        Route: <Route path="/contact" component={ContactUs} key="contact" />
      },
      {
        route: "/login",
        Route: <Route path="/login" component={Login} key="login" />
      },
      {
        route: "/register",
        Route: <Route path="/register" component={Register} key="login" />
      },
      {
        route: "/",
        Route: <Redirect from="/" to="/home" exact key="/" />
      },
      {
        Route: <Redirect to="/404" key="not-found" />
      }
    ]
  };
  componentDidMount() {}
}

export default Services;
