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
import Logout from "../components/User/Logout";
import AddCar from "../components/Car/AddCar";
import { authed, admin } from "../httpServices/auth/auth";
import VerifyMobile from "../components/User/VerifyMobile";
import ResetForgotPassword from "../components/User/ResetForgotPassword";
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
        Route: <Route path="/car/:id" component={SingleCar} key="singlecar" />
      },
      {
        route: "/addcar",
        Route: (
          <Route
            path="/addcar"
            render={props => {
              if (admin()) return <AddCar {...props} />;
              else return <Redirect to="/" />;
            }}
            key="singlecar"
          />
        )
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
        route: "/verifyMobile",
        Route: (
          <Route
            key="verifyMobile"
            path="/verifyMobile"
            render={props => {
              if (!authed()) return <VerifyMobile {...props} />;
              else return <Redirect to="/home" />;
            }}
          />
        )
      },
      {
        route: "/ResetPassword/:token",
        Route: (
          <Route
            path="/ResetPassword/:token"
            render={props => {
              if (!authed()) return <ResetForgotPassword {...props} />;
              else return <Redirect to="/home" />;
            }}
            key="resetforgotpassword"
          />
        )
      },
      {
        route: "/login",
        Route: (
          <Route
            path="/login"
            render={props => {
              if (authed()) return <Redirect to="/home" />;
              else return <Login {...props} />;
            }}
            key="login"
          />
        )
      },
      {
        route: "/logout",
        Route: (
          <Route
            path="/logout"
            render={props => {
              if (authed()) return <Logout {...props} />;
              else return <Redirect to="/home" />;
            }}
            key="login"
          />
        )
      },
      {
        route: "/register",
        Route: (
          <Route
            path="/register"
            render={props => {
              if (authed()) return <Redirect to="/home" />;
              else return <Register {...props} />;
            }}
            key="login"
          />
        )
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
}

export default Services;
