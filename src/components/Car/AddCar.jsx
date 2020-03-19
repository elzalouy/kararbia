import React, { Component } from "react";
import cmeraImg from "../../images/camera.svg";
import getWords from "../../utils/GetWords";
import Input from "../common/input";
import "./car.css";
import { validateCar } from "../../httpServices/car/carSchema";
import { toast } from "react-toastify";
import { addCar, addCarImages } from "../../httpServices/car/car";
import handle from "../../middleware/errorHandle";
import KeyValueItem from "./KeyValueItem";
import {
  validateKeyValue,
  validateFeature
} from "../../httpServices/car/carSchema";
const _ = require("lodash");
class AddCar extends Component {
  upload = React.createRef();
  state = {
    name: "",
    model: "",
    short_description: "",
    kilometers: "",
    body_type: "",
    transmission: "",
    color: "",
    speed: "",
    doors: "",
    fuel_type: "",
    status: "",
    price: "",
    extra_features: [
      {
        title: "Title Here",
        items: [{ key: "Key Here", value: "Value Here" }]
      }
    ],
    images: [],
    imagesPreview: [],
    feature: {
      title: "",
      items: [{ key: "", value: "" }]
    },
    item: { key: "", value: "" },
    disabled: false,
    error: {
      feature: { title: "", items: "" },
      item: "",
      extra_features: ""
    }
  };
  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    state[e.name] = e.value;
    this.setState({ state });
  });
  handleChangeFeatureTitle = handle(async ({ currentTarget: e }) => {
    const state = this.state;
    state.feature.title = e.value;
    const result = await validateFeature(state.feature);
    if (result) state.error.feature.title = result.message;
    else state.error.feature.title = "";
    this.setState({ state });
  });
  handleChangeItem = handle(async ({ currentTarget: e }) => {
    const state = this.state;
    state.item[e.name] = e.value;
    const result = await validateKeyValue(state.item);
    if (result) state.error.item = result.message;
    else state.error.item = "";
    this.setState({ state });
  });
  handleAddItem = handle(async () => {
    const state = this.state;
    let item = state.feature.items.find(s => s.key === "");
    let index = state.feature.items.indexOf(item);
    if (index >= 0) _.remove(state.feature.items, state.feature.items[index]);
    state.feature.items.push(state.item);
    state.item = { key: "", value: "" };
    this.setState({ state });
  });
  handleAddFeatures = handle(async () => {
    const state = this.state;
    let item = state.extra_features.find(s => s.title === "Title Here");
    let index = state.extra_features.indexOf(item);
    if (index >= 0) _.remove(state.extra_features, state.extra_features[index]);
    state.extra_features.push(state.feature);
    state.feature = { title: "", items: [{ key: "", value: "" }] };
    state.item = { key: "", value: "" };
    this.setState({ state });
  });
  handleDeleteFeature = handle(({ currentTarget: e }) => {
    const state = this.state;
    _.remove(state.extra_features, s => s === e.id);
    this.setState({ state });
  });
  handleAddImages = handle(async ({ currentTarget: e }) => {
    const state = this.state;
    for (let i = 0; i <= e.files.length; i++) {
      state.images += e.files[i];
    }
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
          toast.warn(error);
        }
      );
    }
  });
  handleDeleteImage = handle(({ currentTarget: e }) => {
    const state = this.state;
    delete state.images[e.id];
    delete state.imagesPreview[e.id];
    this.setState({ state });
  });
  handleCancelFeature = handle(() => {
    const state = this.state;
    state.feature = {
      title: "",
      items: [{ key: "", value: "" }]
    };
    state.item = { key: "", value: "" };
    state.error.feature = { title: "", item: "" };
    state.error.item = "";
    state.error.extra_features = "";
    this.setState({ state });
  });
  handleSaveCar = handle(async e => {
    e.preventDefault();
    const state = this.state;
    state.disabled = true;
    this.setState({ state });
    let car = {
      name: state.name,
      model: state.model,
      short_desc: state.short_description,
      kilometers: state.kilometers,
      body_type: state.body_type,
      transmission: state.transmission,
      color: state.color,
      price: state.price,
      speed: state.speed,
      doors: state.doors,
      fuel_type: state.fuel_type,
      status: state.status,
      extra_features: state.extra_features
    };
    let validateresult = await validateCar(car);
    if (validateresult) toast.warn(validateresult.message);
    else {
      let result = await addCar(car);
      if (result.error) toast.warn(result.error.message);
      else {
        let images = Array.from(state.images);
        let iResult = await addCarImages(images, result.data._id);
        if (iResult.error) toast.warn(iResult.error.message);
        else {
          toast.warn("Successfully added");
          window.location = "/";
        }
      }
    }
    state.disabled = false;
    this.setState({ state });
  });
  handleCancel = handle(() => {
    const state = this.state;
    state.images = state.imagesPreview = [];
    window.location = "/";
  });
  render() {
    const state = this.state;
    let { words, lang } = getWords();
    return (
      <React.Fragment>
        <div className="bg-gray">
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
            className="container w-100 wow fadeIn border-0 pb-5 new-car"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
          >
            <div
              className={
                lang === "eng"
                  ? "row p-0 m-0  rounded justify-content-center pb-5 bg-white"
                  : "row p-0 m-0  rounded justify-content-center pb-5 text-right bg-white"
              }
              dir={lang === "eng" ? "ltr" : "rtl"}
            >
              <div className="text-center w-100 add-icon-overflow">
                <i className="fa fa-car add-icon" aria-hidden="true"></i>
              </div>
              <div className="col-md-5 pt-5">
                <Input
                  type="text"
                  word={words["brand"]}
                  value={state.name}
                  name="name"
                  changeValue={this.handleChange}
                />
              </div>
              <div className="col-md-5 pt-5">
                <Input
                  type="text"
                  word={words["model"]}
                  value={state.model}
                  name="model"
                  changeValue={this.handleChange}
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
              <div className="col-md-5 pt-3">
                <Input
                  type="text"
                  word={words["kilometers"]}
                  value={state.kilometers}
                  name="kilometers"
                  changeValue={this.handleChange}
                />
              </div>
              <div className="col-md-5 pt-3">
                <Input
                  type="text"
                  word={words["body type"]}
                  value={state.body_type}
                  name="body_type"
                  changeValue={this.handleChange}
                />
              </div>
              <div className="col-md-5 pt-3">
                <Input
                  type="text"
                  word={words["transmission"]}
                  value={state.transmission}
                  name="transmission"
                  changeValue={this.handleChange}
                />
              </div>
              <div className="col-md-5 pt-3">
                <Input
                  type="text"
                  word={words["extrior color"]}
                  value={state.color}
                  name="color"
                  changeValue={this.handleChange}
                />
              </div>
              <div className="col-md-5 pt-3">
                <Input
                  type="number"
                  word={words["price"]}
                  value={state.price}
                  name="price"
                  changeValue={this.handleChange}
                />
              </div>
              <div className="col-md-5 pt-3">
                <Input
                  type="text"
                  word={words["speed"]}
                  value={state.speed}
                  name="speed"
                  changeValue={this.handleChange}
                />
              </div>
              <div className="col-md-5 pt-3">
                <Input
                  type="text"
                  word={words["doors"]}
                  value={state.doors}
                  name="doors"
                  changeValue={this.handleChange}
                />
              </div>
              <div className="col-md-5 pt-3">
                <Input
                  type="text"
                  word={words["fuel type"]}
                  value={state.fuel_type}
                  name="fuel_type"
                  changeValue={this.handleChange}
                />
              </div>
              <div className="col-md-5 pt-3">
                <Input
                  type="text"
                  word={words["status"]}
                  value={state.status}
                  name="status"
                  changeValue={this.handleChange}
                />
              </div>

              <div className="col-10 pt-5">
                <div className="row mx-2">{/* Features display */}</div>
              </div>
            </div>
          </section>
          <section
            className="container px-5  w-100 wow fadeIn border-0 pt-0 pb-2  new-car"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
          >
            <div
              className={
                lang === "eng"
                  ? "row p-0 m-0 px-5  rounded justify-content-center pb-5 bg-white"
                  : "row p-0 m-0 px-5 rounded justify-content-center  text-right pb-5 bg-white"
              }
              dir={lang === "eng" ? "ltr" : "rtl"}
            >
              <div className="text-center w-100 add-icon-overflow  p-0">
                <i className="fa fa-calendar add-icon" aria-hidden="true"></i>
              </div>
              <div className="row w-100 overflow_hidden justify-content-center">
                <div className="col-md-12 mb-2">
                  <Input
                    type="text"
                    word={words["extra features title"]}
                    value={state.feature.title}
                    name="title"
                    changeValue={this.handleChangeFeatureTitle}
                  />
                  {<p className="text-danger">{state.error.feature.title}</p>}
                </div>
                <div className="col-md-5 mb-2">
                  <Input
                    type="text"
                    word={words["feature key"]}
                    name="key"
                    value={state.item.key}
                    changeValue={this.handleChangeItem}
                  />
                </div>
                <div className="col-md-5 mb-2">
                  <Input
                    type="text"
                    word={words["feature value"]}
                    name="value"
                    value={state.item.value}
                    changeValue={this.handleChangeItem}
                  />
                  {<p className="text-danger">{state.error.item}</p>}
                </div>
                <div className="col-md-2 mt-4">
                  <i
                    className="fa fa-plus cursor-pointer add-icon"
                    aria-hidden="true"
                    onClick={this.handleAddItem}
                  ></i>
                </div>
                <div className="col-12 text-center mt-3">
                  <button
                    className="btn btn-warning"
                    onClick={this.handleAddFeatures}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger mx-3"
                    onClick={this.handleCancelFeature}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-5">
            <div className="container">
              <div className="row m-0 justify-content-center align-items-center">
                <KeyValueItem
                  items={state.extra_features}
                  currentItem={state.feature}
                />
              </div>
            </div>
          </section>
          <section
            className="container w-100 wow fadeIn border-0 pt-0 pb-5 new-car"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
          >
            <div className="row p-0 m-0 mt-5  rounded justify-content-center pb-3 bg-white">
              <div className="text-center w-100 add-icon-overflow  p-0">
                <i className="fa fa-camera add-icon" aria-hidden="true"></i>
              </div>
              <div className="row w-100 overflow_hidden justify-content-center">
                {state.imagesPreview.length > 0 ? (
                  <div className="col-12 container p-5">
                    <div className="row justify-content-center  align-item-center">
                      {state.imagesPreview.map(item => {
                        return (
                          <React.Fragment
                            key={state.imagesPreview.indexOf(item)}
                          >
                            <div className="position-relative">
                              <img src={item} className="car_image " alt="" />
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
              <div className="col-12">
                <div className="row justify-content-center aling-items-center">
                  <div className="col-sm-8"></div>
                  <div className="col-2 text-right">
                    <button
                      className="save bg-transparent border-0"
                      onClick={this.handleSaveCar}
                      disabled={state.disabled}
                    >
                      <i
                        className="fa fa-check-circle p-0 m-0"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                  <div className="col-2 text-left">
                    <button
                      className="close bg-warn pt-2"
                      onClick={this.handleCancel}
                      disabled={state.disabled}
                    >
                      <i className="fa fa-times m-0 p-0" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default AddCar;
