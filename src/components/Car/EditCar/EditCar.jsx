import React, { Component } from "react";
import getWords from "../../../utils/GetWords";
import "../car.css";
import { toast } from "react-toastify";
import { getCarById } from "../../../httpServices/car/car";
import handle from "../../../middleware/errorHandle";
import KeyValueItem from "../KeyValueItem";
import {
  validateKeyValue,
  validateFeature,
  validateEditCar,
} from "../../../httpServices/car/carSchema";
import { editCar, addCarImages } from "../../../httpServices/car/car";
import RequiredData from "./RequiredData";
import Features from "./Features";
import CarImages from "./CarImages";
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
        items: [{ key: "Key Here", value: "Value Here" }],
      },
    ],
    images: [],
    imagesPreview: [],
    newImages: [],
    newImagesPreview: [],
    feature: {
      _id: "",
      title: "",
      items: [{ key: "", value: "" }],
    },
    item: { key: "", value: "" },
    disabled: 0,
    error: {
      feature: { title: "", items: "" },
      item: "",
      extra_features: "",
    },
    loading: false,
  };
  async componentDidMount() {
    try {
      let state = this.state;
      const { error, data } = await getCarById(this.props.match.params.id);
      if (error) toast.warn(error.message);
      else {
        state._id = data._id;
        state.name = data.name;
        state.model = data.model;
        state.short_description = data.short_desc;
        state.kilometers = data.kilometers;
        state.body_type = data.body_type;
        state.transmission = data.transmission;
        state.color = data.color;
        state.speed = data.speed;
        state.doors = data.doors;
        state.fuel_type = data.fuel_type;
        state.status = data.status;
        state.price = data.price;
        state.extra_features = data.extra_features;
        state.images = data.images;
        state.imagesPreview = data.images;
        state.feature = {
          title: "",
          items: [],
        };
        state.item = { key: "", value: "" };
        state.disabled = 0;
        state.error = {
          feature: { title: "", items: "" },
          item: "",
          extra_features: "",
        };
        this.setState({ state });
      }
    } catch (ex) {
      toast.warn(ex);
    }
  }
  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    state[e.name] = e.value;
    this.setState({ state });
  });
  handleChooseFeature = handle(async ({ currentTarget: e }) => {
    const state = this.state;
    let item = state.extra_features.find((s) => s._id === e.id)
      ? state.extra_features.find((s) => s._id === e.id)
      : state.extra_features[e.id];
    state.feature = item;
    this.setState({ state });
  });
  handleDeleteFeature = handle(async ({ currentTarget: e }) => {
    const state = this.state;
    let item = state.extra_features.find((s) => s._id === e.id);
    if (!item) item = state.extra_features[e.id];
    let index = state.extra_features.indexOf(item);
    _.remove(state.extra_features, state.extra_features[index]);
    state.feature = { title: "", items: [] };
    state.item = { key: "", value: "" };
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
    let item = state.feature.items.find((s) => s._id === e.id);
    if (!item) item = state.feature.items[e.id];
    let index = state.feature.items.indexOf(item);
    state.feature.items[index][e.name] = e.value;
    let result = await validateKeyValue(state.feature.items[index]);
    if (result) state.error.item = result.message;
    else state.error.item = "";
    this.setState({ state });
  });
  handleChangeNewItem = handle(async ({ currentTarget: e }) => {
    const state = this.state;
    state.item[e.name] = e.value;
    let result = await validateKeyValue(state.item);
    if (result) state.error.item = result.message;
    else state.error.item = "";
    this.setState({ state });
  });
  handleAddItem = handle(async () => {
    const state = this.state;
    let item = state.feature.items.find((s) => s.key === "");
    let index = state.feature.items.indexOf(item);
    if (index >= 0) _.remove(state.feature.items, state.feature.items[index]);
    state.feature.items.push(state.item);
    state.item = { key: "", value: "" };
    this.setState({ state });
  });
  handleAddFeatures = handle(async () => {
    const state = this.state;
    let item = state.extra_features.find((s) => s.title === "Title Here");
    let index = state.extra_features.indexOf(item);
    if (index >= 0) _.remove(state.extra_features, state.extra_features[index]);
    if (state.feature._id) {
      item = state.extra_features.find((s) => s._id === state.feature._id);
      index = state.extra_features.indexOf(item);
      state.extra_features[index] = state.feature;
    } else {
      state.extra_features.push(state.feature);
    }
    state.feature = { title: "", items: [] };
    state.item = { key: "", value: "" };
    state.error = {
      feature: { title: "", items: "" },
      item: "",
      extra_features: "",
    };
    this.setState({ state });
  });
  handleAddImages = handle(async ({ currentTarget: e }) => {
    const state = this.state;
    for (let i = 0; i <= e.files.length; i++) {
      state.newImages.push(e.files[i]);
    }
    if (e.files) {
      state.newImages = e.files;
      const files = Array.from(e.files);
      Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener("load", (ev) => {
              resolve(ev.target.result);
            });
            reader.addEventListener("error", reject);
            reader.readAsDataURL(file);
          });
        })
      ).then(
        (images) => {
          images.forEach((item) => state.newImagesPreview.push(item));
          state.newImages = Array.from(state.newImages);
          this.setState({ state });
        },
        (error) => {
          toast.warn(error);
        }
      );
    }
  });
  handleDeleteImage = handle(({ currentTarget: e }) => {
    const state = this.state;
    _.remove(state.imagesPreview, state.imagesPreview[e.id]);
    this.setState({ state });
  });
  handleDeleteNewImage = handle(({ currentTarget: e }) => {
    const state = this.state;
    let item = state.newImages[e.id];
    state.newImages = _.remove(state.newImages, (s) => s !== item);
    item = state.newImagesPreview[e.id];
    state.newImagesPreview = _.remove(
      state.newImagesPreview,
      (s) => s !== item
    );
    this.setState({ state });
  });

  handleCancelFeature = handle(() => {
    const state = this.state;
    state.feature = {
      title: "",
      items: [],
    };
    state.item = { key: "", value: "" };
    state.error.feature = { title: "", item: "" };
    state.error.item = "";
    state.error.extra_features = "";
    this.setState({ state });
  });
  handleSaveCar = handle(async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const state = this.state;
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
      extra_features: state.extra_features,
      images: state.images,
    };
    let validateresult = await validateEditCar(car);

    if (validateresult) {
      toast.warn(validateresult.message);
      this.setState({ loading: false });
    } else {
      let result = await editCar(car, this.props.match.params.id);
      if (result.error) {
        toast.warn(result.error.message);
        this.setState({ loading: false });
      } else {
        let images = Array.from(state.newImages);
        let iResult = await addCarImages(images, result.data._id);
        if (iResult.error) {
          toast.warn(iResult.error.message);
          this.setState({ loading: false });
        } else {
          toast.warn("Successfully added");
          window.location = "/";
        }
      }
    }
    this.setState({ state });
  });
  handleCancel = handle(() => {
    let state = this.state;
    state = {};
    this.setState({ state });
    window.location.reload();
  });
  render() {
    const state = this.state;
    if (!state.feature || !state.extra_features) return null;
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
                          <em> {words["cars"]}</em> / <em> {words["edit"]}</em>
                        </p>
                        <div className="row">
                          <h2 className="pt-2">
                            {words["edit"]} <em>{words["car"]} </em>
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
            <RequiredData
              state={state}
              words={words}
              lang={lang}
              handleChange={this.handleChange}
            />
          </section>
          <section
            className="container px-5  w-100 wow fadeIn border-0 pt-0 pb-2  new-car"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
          >
            <Features
              lang={lang}
              words={words}
              state={state}
              handleChangeItem={this.handleChangeItem}
              handleChangeNewItem={this.handleChangeNewItem}
              handleAddFeatures={this.handleAddFeatures}
              handleAddItem={this.handleAddItem}
              handleCancelFeature={this.handleCancelFeature}
              handleChangeFeatureTitle={this.handleChangeFeatureTitle}
              handleDeleteFeature={this.handleDeleteFeature}
            />
          </section>
          <section className="pb-5">
            <div className="container">
              <div className="row m-0 justify-content-center align-items-center">
                <KeyValueItem
                  handleChooseFeature={this.handleChooseFeature}
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
            <CarImages
              loading={state.loading}
              state={state}
              handleAddImages={this.handleAddImages}
              handleCancel={this.handleCancel}
              handleDeleteImage={this.handleDeleteImage}
              handleDeleteNewImage={this.handleDeleteNewImage}
              handleSaveCar={this.handleSaveCar}
              upload={this.upload}
              words={words}
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default AddCar;
