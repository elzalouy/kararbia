import React from "react";
import { Component } from "react";
import {
  getRedis,
  updateSubItemImage,
  updateSubItemData,
  deleteSubItemData
} from "../../httpServices/redisImage/redisImage";
import { admin } from "../../httpServices/auth/auth";
import { toast } from "react-toastify";
import EditCarouselImage from "./editCarouselImage";
import { validateRedisImageItem } from "../../httpServices/redisImage/redisImageSchema";
import DeleteCarouselItem from "./deleteCarouselItem";
import carImg from "../../images/car.svg";
import AddCarouselItem from "./addCarouselItem";
class Carousel extends Component {
  upload = React.createRef();
  state = {
    carousel: { key: {}, items: [] },
    item: { title: "", link: "", image: {} },
    image: {},
    preview: {},
    newItem: { image: null, title: null, link: null },
    new: false
  };
  async componentDidMount() {
    const result = await getRedis("carousel images");
    if (result.error) return toast.warn(result.error.message);
    const state = this.state;
    state.carousel = result.data;
    this.setState({ state });
  }

  handleChooseItem = ({ currentTarget: e }) => {
    const state = this.state;
    const item = state.carousel.items.find(s => s._id === e.id);
    state.item = item;
    this.setState({ state });
  };

  handleChange = ({ currentTarget: e }) => {
    const state = this.state;
    state.item[e.name] = e.value;
    this.setState({ state });
  };

  handleSaveItem = async () => {
    const state = this.state;
    const error = await validateRedisImageItem({
      title: state.item.title,
      link: state.item.link,
      image: state.item.image
    });
    if (error) toast.error(error.message);
    else {
      if (state.image && state.preview && state.new) {
        let result = await updateSubItemImage({
          redisId: state.carousel._id,
          itemId: state.item._id,
          image: state.image
        });
        if (result.error) toast.warn(result.error.message);
      }
      const result = await updateSubItemData({
        redisId: state.carousel._id,
        itemId: state.item._id,
        title: state.item.title,
        link: state.item.link
      });
      if (result.error) toast.warn(result.error.message);
      else {
        let index = state.carousel.items.indexOf(state.item);
        state.carousel.items[index] = state.item;
        this.setState({ state });
        window.location.reload();
      }
    }
    this.setState({ state });
  };

  handleChangeImage = () => {
    const state = this.state;
    state.new = true;
    state.preview = null;
    state.image = null;
    this.setState({ state });
  };

  handleAddNewImage = ({ currentTarget: e }) => {
    const state = this.state;
    state.image = e.files[0];
    state.preview = URL.createObjectURL(e.files[0]);
    this.setState({ state });
  };
  handleCancel = () => {
    const state = this.state;
    state.item = {};
    state.new = false;
    state.preview = state.image = {};
    this.setState({ state });
  };
  handleDeleteItem = async () => {
    const state = this.state;
    const result = await deleteSubItemData({
      redisId: state.carousel._id,
      itemId: state.item._id
    });
    if (result.error) toast.error(result.error.message);
    else {
      window.location.reload();
    }
  };
  render() {
    const { carousel } = this.state;
    if (!carousel) return null;
    return (
      <React.Fragment>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          style={{ display: "contents" }}
          data-ride="carousel"
        >
          <div
            className="carousel-inner"
            style={{ background: "rgb(0, 0, 1)", height: "668px" }}
          >
            {carousel && carousel.items && carousel.items.length > 0 ? (
              carousel.items.map(item => (
                <div
                  key={item._id}
                  className={
                    carousel.items.indexOf(item) === 0
                      ? "carousel-item active"
                      : "carousel-item"
                  }
                >
                  <img
                    className="d-block"
                    src={item.image.url}
                    alt="First slide"
                    style={{ opacity: "0.5", width: "100%", height: "720px" }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="bold carousel-item-title">{item.title}</h2>
                    <h5>
                      Check the latest cars on <mark>KarArabia!</mark>
                    </h5>
                    <a className="btn carousel-btn px-4" href={item.link}>
                      Check It Now
                      <i className="fa fa-car px-2" aria-hidden="true"></i>
                    </a>
                    {admin() && (
                      <div className="row justify-content-center  mt-3">
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target=".editcarousel"
                          className="btn add-icon pt-0 mx-1"
                          onClick={this.handleChooseItem}
                          id={item._id}
                        >
                          <i className="fa fa-cog pt-0" aria-hidden="true"></i>
                        </button>
                        <button
                          className="btn add-icon pt-0 mx-1"
                          type="button"
                          data-toggle="modal"
                          data-target=".deleteitem"
                          onClick={this.handleChooseItem}
                          id={item._id}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target=".additem"
                          className="btn add-icon pt-0 mx-1"
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <React.Fragment>
                <div className="carousel-item active bg-white">
                  <img
                    className="d-block"
                    alt="First slide"
                    src={carImg}
                    style={{ opacity: "0.5", width: "100%", height: "720px" }}
                  />
                  <div className="carousel-caption d-none d-md-block pt-5">
                    {admin() && (
                      <h2 className="bold carousel-item-title">
                        Please Add new Items
                      </h2>
                    )}
                    <h5 className="text-dark">
                      Check the latest cars on <mark>KarArabia!</mark>
                    </h5>
                    {admin() && (
                      <div className="row justify-content-center  mt-3">
                        <button
                          className="btn add-icon pt-0 mx-1"
                          type="button"
                          data-toggle="modal"
                          data-target=".additem"
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </React.Fragment>
            )}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <EditCarouselImage
          item={this.state.item}
          state={this.state}
          upload={this.upload}
          handleChange={this.handleChange}
          handleSaveItem={this.handleSaveItem}
          handleAddNewImage={this.handleAddNewImage}
          handleChangeImage={this.handleChangeImage}
        />
        <DeleteCarouselItem handleDeleteItem={this.handleDeleteItem} />
        <AddCarouselItem state={this.state} />
      </React.Fragment>
    );
  }
}

export default Carousel;
