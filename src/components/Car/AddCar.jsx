import React, { Component } from "react";
import cmeraImg from "../../images/camera.svg";
import getWords from "../../utils/GetWords";
import PropTypes from "prop-types";
import "./car.css";

const _ = require("lodash");
class AddCar extends Component {
  upload = React.createRef();
  state = {
    name: "",
    model: "",
    short_description: "",
    long_description: "",
    kilometers: "",
    body_type: "",
    transmission: "",
    extrior_color: "",
    intrior_color: "",
    speed: "",
    doors: "",
    fuel_type: "",
    status: "",
    extra_features: [],
    images: [],
    imagesPreview: [],
    feature: ""
  };
  handleChange = ({ currentTarget: e }) => {
    const state = this.state;
    state[e.name] = e.value;
    this.setState({ state });
  };
  handleAddFeature = () => {
    const state = this.state;
    state.extra_features.push(state.feature);
    state.feature = "";
    this.setState({ state });
  };
  handleDeleteFeature = ({ currentTarget: e }) => {
    const state = this.state;
    _.remove(state.extra_features, s => s === e.id);
    this.setState({ state });
  };
  handleAddImages = async ({ currentTarget: e }) => {
    const state = this.state;
    for (let i = 0; i <= e.files.length; i++) {
      state.images += e.files[i];
    }
    console.log("handleAddImages -> state.images", e.files[0]);
    if (e.files) {
      state.images = e.files;
      const files = Array.from(e.files);
      Promise.all(
        files.map(file => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", ev => {
              resolve(ev.target.result);
            });
            reader.addEventListener("error", reject);
            reader.readAsDataURL(file);
          });
        })
      ).then(
        images => {
          images.forEach(item => state.imagesPreview.push(item));
          this.setState({ state });
        },
        error => {
          console.error(error);
        }
      );
    }
  };
  handleDeleteImage = ({ currentTarget: e }) => {
    const state = this.state;
    delete state.images[e.id];
    delete state.imagesPreview[e.id];
    this.setState({ state });
  };
  render() {
    const state = this.state;
    let { words, lang } = getWords();
    return (
      <React.Fragment>
        <div className="page-heading wow fadeIn" data-wow-duration="0.5s">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="heading-content-bg wow fadeIn"
                  data-wow-delay="0.75s"
                  data-wow-duration="1s"
                >
                  <div
                    className={lang === "eng" ? "row" : "row text-right"}
                    dir={lang === "eng" ? "ltr" : "rtl"}
                  >
                    <div className="heading-content col-md-12">
                      <p>
                        <a href="/home">{words["homepage"]}</a> /{" "}
                        <em> {words["cars"]}</em> / <em> {words["add"]}</em>
                      </p>
                      <div className="row">
                        <h2 className="pt-2">
                          {words["add"]} <em>{words["car"]} </em>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          className="container w-100 wow fadeIn border-0 pb-5"
          data-wow-delay="0.5s"
          data-wow-duration="1s"
        >
          <div
            className={
              lang === "eng"
                ? "row p-0 m-0 shadow rounded justify-content-center pb-5"
                : "row p-0 m-0 shadow rounded justify-content-center pb-5 text-right"
            }
            dir={lang === "eng" ? "ltr" : "rtl"}
          >
            <div className="text-center w-100 add-icon-overflow  p-0">
              <i className="fa fa-car add-icon" aria-hidden="true"></i>
            </div>
            <div className="col-md-5 pt-5">
              <label className="form-label p-0 mb-1">{words["car name"]}</label>
              <input
                type="text"
                name="name"
                value={state.name}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["car name"]}
              />
            </div>
            <div className="col-md-5 pt-5">
              <label className="Model p-0 mb-1">{words["model"]}</label>
              <input
                type="text"
                name="model"
                value={state.model}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["model"]}
              />
            </div>

            <div className="col-md-10 pt-3">
              <label className="form-label p-0 mb-1">
                {words["short description"]}
              </label>
              <textarea
                cols="2"
                rows="2"
                name="short_description"
                value={state.short_description}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["short description"]}
              />
            </div>
            <div className="col-md-10 pt-3">
              <label className="form-label p-0 mb-1">
                {words["long description"]}
              </label>
              <textarea
                cols="2"
                rows="3"
                name="long_description"
                value={state.long_description}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["long description"]}
              />
            </div>
            <div className="col-md-5 pt-3">
              <label className="form-label p-0 mb-1">
                {words["kilometers"]}
              </label>
              <input
                type="text"
                name="kilometers"
                value={state.kilometers}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["kilometers"]}
              />
            </div>
            <div className="col-md-5 pt-3">
              <label className="form-label p-0 mb-1">
                {words["body type"]}
              </label>
              <input
                type="text"
                name="body_type"
                value={state.body_type}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["body type"]}
              />
            </div>
            <div className="col-md-5 pt-3">
              <label className="form-label p-0 mb-1">
                {words["transmission"]}
              </label>
              <input
                type="text"
                name="transmission"
                value={state.transmission}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["transmission"]}
              />
            </div>
            <div className="col-md-5 pt-3">
              <label className="form-label p-0 mb-1">
                {words["extrior color"]}
              </label>
              <input
                type="text"
                name="extrior_color"
                value={state.extrior_color}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["extrior color"]}
              />
            </div>
            <div className="col-md-5 pt-3">
              <label className="form-label p-0 mb-1">
                {words["intrior color"]}
              </label>
              <input
                type="text"
                name="intrior_color"
                value={state.intrior_color}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["intrior color"]}
              />
            </div>
            <div className="col-md-5 pt-3">
              <label className="form-label p-0 mb-1">{words["speed"]}</label>
              <input
                type="text"
                name="speed"
                value={state.speed}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["speed"]}
              />
            </div>
            <div className="col-md-5 pt-3">
              <label className="form-label p-0 mb-1">{words["doors"]}</label>
              <input
                type="text"
                name="doors"
                value={state.doors}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["doors"]}
              />
            </div>
            <div className="col-md-5 pt-3">
              <label className="form-label p-0 mb-1">
                {words["fuel type"]}
              </label>
              <input
                type="text"
                name="fuel_type"
                value={state.fuel_type}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["fuel type"]}
              />
            </div>
            <div className="col-md-5 pt-3">
              <label className="form-label p-0 mb-1">{words["status"]}</label>
              <input
                type="text"
                name="status"
                value={state.status}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["status"]}
              />
            </div>

            <div className="col-md-4 pt-3">
              <label className="form-label p-0 mb-1">
                {words["extra features"]}
              </label>
              <input
                type="text"
                name="feature"
                value={state.feature}
                onChange={this.handleChange}
                className="form-control brd-0"
                placeholder={words["extra features"]}
              />
            </div>
            <div className="col-md-1 pt-4">
              <i
                className="fa fa-plus add-icon mt-3 cursor-pointer"
                aria-hidden="true"
                onClick={this.handleAddFeature}
              ></i>
            </div>
            <div className="col-10 pt-5">
              <div className="row mx-2">
                {state.extra_features.map(item => (
                  <div className="feature">
                    {item}
                    <button
                      onClick={this.handleDeleteFeature}
                      className="delete"
                      id={item}
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row p-0 m-0 mt-5 shadow rounded justify-content-center pb-3">
            <div className="text-center w-100 add-icon-overflow  p-0">
              <i className="fa fa-camera add-icon" aria-hidden="true"></i>
            </div>
            <div className="row w-100 overflow_hidden justify-content-center mb-5">
              {state.imagesPreview.length > 0 ? (
                <div className="col-12 container p-5">
                  <div className="row justify-content-center  align-item-center">
                    {state.imagesPreview.map(item => {
                      return (
                        <React.Fragment>
                          <div className="position-relative">
                            <img
                              src={item}
                              className="car_image shadow"
                              alt=""
                            />
                            <button
                              className="btn image-delete"
                              id={state.imagesPreview.indexOf(item)}
                              onClick={this.handleDeleteImage}
                            >
                              x
                            </button>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <React.Fragment>
                  <div className="col-4"></div>
                  <div className="col-4 text-center">
                    <img src={cmeraImg} alt="" className="w-50 h-50 mt-5" />
                    <p>{words["no photos selected"]}</p>
                  </div>
                  <div className="col-4"></div>
                </React.Fragment>
              )}
              <div className="col-12 text-center">
                <input
                  id="profile_photo"
                  onChange={this.handleAddImages}
                  type="file"
                  multiple
                  ref={ref => (this.upload = ref)}
                  style={{ display: "none" }}
                />
                <i
                  className="fa fa-plus cursor-pointer add-icon"
                  aria-hidden="true"
                  onClick={e => this.upload.click()}
                ></i>
              </div>
            </div>
            <div className="col-12 pr-5 mr-5 text-right">
              <i className="fa fa-check-circle save" aria-hidden="true"></i>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
AddCar.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  long_description: PropTypes.string.isRequired,
  kilometers: PropTypes.string.isRequired,
  body_type: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  extrior_color: PropTypes.string.isRequired,
  intrior_color: PropTypes.string.isRequired,
  speed: PropTypes.string.isRequired,
  doors: PropTypes.string.isRequired,
  fuel_type: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  extra_features: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  feature: PropTypes.string.isRequired,
  imagesPreview: PropTypes.array.isRequired
};

export default AddCar;
