import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NotFound from "../components/common/Notfound";
import Home from "../components/Home/Home";
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
