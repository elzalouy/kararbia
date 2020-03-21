import React from "react";
import Input from "../../common/input";

const Features = ({
  lang,
  words,
  state,
  handleChangeFeatureTitle,
  handleChangeItem,
  handleChangeNewItem,
  handleAddItem,
  handleAddFeatures,
  handleCancelFeature,
  handleDeleteFeature
}) => {
  return (
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
            value={
              state.feature && state.feature.title.length > 0
                ? state.feature.title
                : ""
            }
            name="title"
            changeValue={handleChangeFeatureTitle}
          />
          {
            <p className="text-danger">
              {state.error.feature.title ? state.error.feature.title : ""}
            </p>
          }
        </div>
        {state.feature.items &&
          state.feature.items.map(item => (
            <React.Fragment
              key={item._id ? item._id : state.feature.items.indexOf(item)}
            >
              <div className="col-md-6 mb-2">
                <Input
                  id={item._id ? item._id : state.feature.items.indexOf(item)}
                  type="text"
                  word={words["feature key"]}
                  name="key"
                  value={item.key ? item.key : ""}
                  changeValue={handleChangeItem}
                />
              </div>
              <div className="col-md-6 mb-2">
                <Input
                  id={item._id ? item._id : state.feature.items.indexOf(item)}
                  type="text"
                  word={words["feature value"]}
                  name="value"
                  value={item.value ? item.value : ""}
                  changeValue={handleChangeItem}
                />
              </div>
            </React.Fragment>
          ))}
        <div className="col-md-5 mb-2">
          <Input
            type="text"
            word={words["feature key"]}
            name="key"
            value={state.item.key}
            changeValue={handleChangeNewItem}
          />
        </div>
        <div className="col-md-5 mb-2">
          <Input
            type="text"
            word={words["feature value"]}
            name="value"
            value={state.item.value}
            changeValue={handleChangeNewItem}
          />
          {<p className="text-danger">{state.error.item}</p>}
        </div>
        <div className="col-md-2 mt-4">
          <i
            className="fa fa-plus cursor-pointer add-icon"
            aria-hidden="true"
            onClick={handleAddItem}
          ></i>
        </div>
        <div className="col-12 text-center mt-3">
          <button className="btn btn-success mx-1" onClick={handleAddFeatures}>
            Save
          </button>
          <button
            className="btn btn-warning mx-1"
            onClick={handleCancelFeature}
          >
            Cancel
          </button>
          <button
            className="btn btn-danger mx-1"
            onClick={handleDeleteFeature}
            id={
              state.feature._id
                ? state.feature._id
                : state.extra_features.indexOf(state.feature)
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
