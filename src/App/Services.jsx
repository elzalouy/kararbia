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
import ContactUs from "../components/Contact/Contact";
import Logout from "../components/User/Logout";
import AddCar from "../components/Car/AddCar";
import EditCar from "../components/Car/EditCar/EditCar";
import EditBlog from "../components/Blog/editblog";
import { authed, admin } from "../httpServices/auth/auth";
import VerifyMobile from "../components/User/VerifyMobile";
import ResetForgotPassword from "../components/User/ResetForgotPassword";
import NewBlog from "../components/Blog/NewBlog";
import AllRequests from "../components/Car/AllRequests";
import ContactsList from "../components/Contact/contactsList";
class Services extends Component {
  state = {
    Routes: [
      {
        route: "/home",
        Route: <Route path="/home" component={Home} key="home" />,
      },
      {
        route: "/404",
        Route: <Route path="/404" component={NotFound} key="notfound" />,
      },
      {
        route: "/cars",
        Route: <Route path="/cars" component={CarList} key="carlist" />,
      },
      {
        route: "/car",
        Route: <Route path="/car/:id" component={SingleCar} key="singlecar" />,
      },
      {
        route: "/addcar",
        Route: (
          <Route
            path="/addcar"
            render={(props) => {
              if (admin()) return <AddCar {...props} />;
              else return <Redirect to="/" />;
            }}
            key="singlecar"
          />
        ),
      },
      {
        route: "/editcar",
        Route: (
          <Route
            path="/editcar/:id"
            render={(props) => {
              if (admin()) return <EditCar {...props} />;
              else return <Redirect to="/" />;
            }}
            key="editcar"
          />
        ),
      },
      {
        route: "/blogs",
        Route: <Route path="/blogs" component={Blogs} key="blogs" />,
      },
      {
        route: "/blog",
        Route: <Route path="/blog/:id" component={Blog} key="blig" />,
      },
      {
        route: "/newBlog",
        Route: (
          <Route
            path="/newBlog"
            render={(props) => {
              if (admin()) return <NewBlog {...props} />;
              else return <Redirect to="/" />;
            }}
            key="newBlog"
          />
        ),
      },
      {
        route: "/editBlog",
        Route: (
          <Route
            path="/editBlog/:id"
            render={(props) => {
              if (admin()) return <EditBlog {...props} />;
              else return <Redirect to="/" />;
            }}
            key="editBlog"
          />
        ),
      },
      {
        route: "/about",
        Route: <Route path="/about" component={About} key="about" />,
      },
      {
        route: "/contact",
        Route: <Route path="/contact" component={ContactUs} key="contact" />,
      },
      {
        route: "/contactList",
        Route: (
          <Route
            path="/contactList"
            key="contactList"
            render={(props) => {
              if (admin()) return <ContactsList {...props} />;
              else return <Redirect to="/" />;
            }}
          />
        ),
      },
      {
        route: "/verifyMobile",
        Route: (
          <Route
            key="verifyMobile"
            path="/verifyMobile"
            render={(props) => {
              if (!authed()) return <VerifyMobile {...props} />;
              else return <Redirect to="/home" />;
            }}
          />
        ),
      },
      {
        route: "/ResetPassword/:token",
        Route: (
          <Route
            path="/ResetPassword/:token"
            render={(props) => {
              if (!authed()) return <ResetForgotPassword {...props} />;
              else return <Redirect to="/home" />;
            }}
            key="resetforgotpassword"
          />
        ),
      },
      {
        route: "/CarRequests",
        Route: (
          <Route
            path="/CarRequests"
            render={(props) => {
              if (admin()) return <AllRequests />;
              else return <Redirect to="/" />;
            }}
            key="CarRequests"
          />
        ),
      },
      {
        route: "/login",
        Route: (
          <Route
            path="/login"
            render={(props) => {
              if (authed()) return <Redirect to="/home" />;
              else return <Login {...props} />;
            }}
            key="login"
          />
        ),
      },
      {
        route: "/logout",
        Route: (
          <Route
            path="/logout"
            render={(props) => {
              if (authed()) return <Logout {...props} />;
              else return <Redirect to="/home" />;
            }}
            key="login"
          />
        ),
      },
      {
        route: "/register",
        Route: (
          <Route
            path="/register"
            render={(props) => {
              if (authed()) return <Redirect to="/home" />;
              else return <Register {...props} />;
            }}
            key="login"
          />
        ),
      },
      {
        route: "/",
        Route: <Redirect from="/" to="/home" exact key="/" />,
      },
      {
        Route: <Redirect to="/404" key="not-found" />,
      },
    ],
  };
}

export default Services;
