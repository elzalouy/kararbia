import React from "react";
import Input from "../../common/input";

const RequiredData = ({ words, lang, state, handleChange }) => {
  return (
    <div
      className={
        lang === "eng"
          ? "row p-0 m-0  rounded justify-content-center pb-5 bg-white"
          : "row p-0 m-0  rounded justify-content-center pb-5 text-right bg-white"
      }
      dir={lang === "eng" ? "ltr" : "rtl"}
    >
      <div className=" text-center w-100 add-icon-overflow">
        <button className="btn add-icon pt-0">
          <i className=" fa fa-car" aria-hidden="true"></i>
        </button>
      </div>
      <div className="col-md-5 pt-5">
        <Input
          type="text"
          word={words["brand"]}
          value={state.name}
          name="name"
          changeValue={handleChange}
        />
      </div>
      <div className="col-md-5 pt-5">
        <Input
          type="text"
          word={words["model"]}
          value={state.model}
          name="model"
          changeValue={handleChange}
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
          onChange={handleChange}
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
          changeValue={handleChange}
        />
      </div>
      <div className="col-md-5 pt-3">
        <Input
          type="text"
          word={words["body type"]}
          value={state.body_type}
          name="body_type"
          changeValue={handleChange}
        />
      </div>
      <div className="col-md-5 pt-3">
        <Input
          type="text"
          word={words["transmission"]}
          value={state.transmission}
          name="transmission"
          changeValue={handleChange}
        />
      </div>
      <div className="col-md-5 pt-3">
        <Input
          type="text"
          word={words["extrior color"]}
          value={state.color}
          name="color"
          changeValue={handleChange}
        />
      </div>
      <div className="col-md-5 pt-3">
        <Input
          type="number"
          word={words["price"]}
          value={state.price}
          name="price"
          changeValue={handleChange}
        />
      </div>
      <div className="col-md-5 pt-3">
        <Input
          type="text"
          word={words["speed"]}
          value={state.speed}
          name="speed"
          changeValue={handleChange}
        />
      </div>
      <div className="col-md-5 pt-3">
        <Input
          type="text"
          word={words["doors"]}
          value={state.doors}
          name="doors"
          changeValue={handleChange}
        />
      </div>
      <div className="col-md-5 pt-3">
        <Input
          type="text"
          word={words["fuel type"]}
          value={state.fuel_type}
          name="fuel_type"
          changeValue={handleChange}
        />
      </div>
      <div className="col-md-5 pt-3">
        <Input
          type="text"
          word={words["status"]}
          value={state.status}
          name="status"
          changeValue={handleChange}
        />
      </div>
    </div>
  );
};

export default RequiredData;
