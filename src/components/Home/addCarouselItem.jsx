import React from "react";
import getWords from "../../utils/GetWords";
import cmeraImg from "../../images/camera.svg";
import { Component } from "react";
import { validateRedisImageItem } from "../../httpServices/redisImage/redisImageSchema";
import { toast } from "react-toastify";
import { addSubItemData } from "../../httpServices/redisImage/redisImage";
class AddCarouselItem extends Component {
  upload = React.createRef();
  state = {
    newItem: { image: null, title: null, link: null },
    preview: {},
    loading: false,
  };
  handleAddNewImage = ({ currentTarget: e }) => {
    const state = this.state;
    state.newItem.image = e.files[0];
    state.preview = URL.createObjectURL(e.files[0]);
    this.setState({ state });
  };
  handleChangeImage = () => {
    const state = this.state;
    state.preview = {};
    state.newItem.image = null;
    this.setState({ state });
  };
  handleChange = ({ currentTarget: e }) => {
    const state = this.state;
    state.newItem[e.name] = e.value;
    this.setState({ state });
  };
  handleAddNewItem = async () => {
    this.setState({ loading: true });
    const state = this.state;
    let item = {
      title: state.newItem.title,
      link: state.newItem.link ? state.newItem.link : "",
      image: state.newItem.image,
    };
    let result = await validateRedisImageItem(item);
    if (result) {
      toast.warn(result.message);
      this.setState({ loading: false });
    } else {
      item.key = "carousel images";
      let response = await addSubItemData(item);
      if (response.error) {
        toast.error(response.error.message);
        this.setState({ loading: false });
      } else {
        window.location.reload();
      }
    }
  };
  render() {
    let { lang } = getWords();
    const state = this.state;
    return (
      <div
        className="modal fade bd-example-modal-lg additem mt-5 pt-5"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg mt-5">
          <div className="modal-content mt-5">
            <div
              className={
                lang === "eng"
                  ? "row p-0 m-0 container rounded justify-content-center pb-2 bg-white"
                  : "row p-0 m-0 container rounded justify-content-center pb-2 text-right bg-white"
              }
              dir={lang === "eng" ? "ltr" : "rtl"}
            >
              <div className="text-center w-100 add-icon-overflow">
                <i className="fa fa-car add-icon" aria-hidden="true"></i>
              </div>
              <div className="col-12 text-center w-auto">
                {!this.state.newItem.image ? (
                  <React.Fragment>
                    <img
                      src={cmeraImg}
                      className="pt-0"
                      style={{ width: "100%", height: "120px" }}
                      alt=""
                    />
                    <input
                      onChange={this.handleAddNewImage}
                      type="file"
                      ref={(ref) => (this.upload = ref)}
                      style={{ display: "none" }}
                    />
                    <button
                      className="btn pt-0 add-icon"
                      onClick={(e) => this.upload.click()}
                    >
                      <i className="fa fa-plus " aria-hidden="true"></i>
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div className="position-relative w-auto">
                      <img
                        src={this.state.preview}
                        className="car_image w-100 h-100"
                        alt=""
                      />
                      <button
                        className="btn image-delete"
                        onClick={this.handleChangeImage}
                      >
                        x
                      </button>
                    </div>
                  </React.Fragment>
                )}
              </div>
              <div className="col mt-5 mb-5">
                <input
                  type="text"
                  placeholder="Title Here"
                  name="title"
                  onChange={this.handleChange}
                  value={
                    state.newItem && state.newItem.title
                      ? state.newItem.title
                      : ""
                  }
                  className="form-control brd-0 my-2"
                />
                <input
                  type="text"
                  placeholder="Link to youe here"
                  name="link"
                  onChange={this.handleChange}
                  value={
                    state.newItem && state.newItem.link
                      ? state.newItem.link
                      : ""
                  }
                  className="form-control brd-0 my-2"
                />
                <button
                  className={
                    state.loading
                      ? "btn btn-warning mx-1 loading"
                      : "btn btn-warning mx-1"
                  }
                  disabled={state.loading ? true : false}
                  onClick={this.handleAddNewItem}
                >
                  Add
                </button>
                <button
                  className="btn btn-danger mx-1"
                  disabled={state.loading ? true : false}
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddCarouselItem;
