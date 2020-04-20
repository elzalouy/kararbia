import React, { Component } from "react";
import getWords from "../../utils/GetWords.js";
import { getRedis, addRedis } from "../../httpServices/redis/redis.js";
import {
  getRedis as getRedisImage,
  updateSubItemImage,
} from "../../httpServices/redisImage/redisImage";
import { toast } from "react-toastify";
import { validateServiceSchema } from "../../httpServices/redis/redisSchema.jsx";
import handle from "../../middleware/errorHandle";
import FeatureItem from "../common/FeatureItem.jsx";
import _ from "lodash";
import { admin } from "../../httpServices/auth/auth.js";
class About extends Component {
  fileUpload = React.createRef();
  state = {
    content: [],
    currentEditKey: "",
    redisImage: {},
    newImageFile: null,
    newImagePreview: null,
    loading: false,
  };
  async componentDidMount() {
    try {
      const state = this.state;
      const content = await getRedis();
      if (content.error) toast.warn(content.error.message);
      else {
        state.content = content.data;
      }
      const redisImage = await getRedisImage("about image");
      if (redisImage.error) toast.warn(redisImage.error.message);
      else {
        state.redisImage = redisImage.data;
      }
      this.setState({ state });
    } catch (ex) {
      toast.warn(ex);
    }
  }
  handleEdit = handle(({ currentTarget: e }) => {
    const state = this.state;
    state.currentEditKey = e.id;
    this.setState({ state });
  });

  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    let item = state.content.find((s) => s.key === e.name);
    let index = state.content.indexOf(item);
    state.content[index].value = e.value;
    this.setState({ state });
  });
  handleSubmit = handle(async () => {
    const state = this.state;
    let items = _.filter(state.content, (s) =>
      s.key.includes(state.currentEditKey)
    );
    items.map(async (item) => {
      let keyval = { key: item.key, value: item.value };
      const result = validateServiceSchema(keyval);
      if (result) toast.error(result.message);
      const response = await addRedis(keyval);
      if (response.error) toast.warn(response.error.message);
    });
    state.currentEditKey = "";
    this.setState({ state });
  });
  handleGetRedisItem = (key) => {
    const item = this.state.content.find((s) => s.key === key);
    return item && item.value ? item.value : "";
  };
  handleCancel = () => {
    const state = this.state;
    state.currentEditKey = "";
    state.newImageFile = state.newImagePreview = null;
    this.setState({ state });
  };
  handleChangeImage = ({ currentTarget: e }) => {
    const state = this.state;
    state.newImageFile = e.files[0];
    state.newImagePreview = URL.createObjectURL(e.files[0]);
    this.setState({ state });
  };
  handleSubmitImage = async () => {
    this.setState({ loading: true });
    const state = this.state;
    let result = await updateSubItemImage({
      itemId: state.redisImage.items[0]._id,
      redisId: state.redisImage._id,
      image: state.newImageFile,
    });
    if (result.error) {
      toast.warn(result.error.message);
      this.setState({ loading: false });
    } else {
      state.newImageFile = state.newImagePreview = null;
      this.setState({ state });
      window.location.reload();
    }
  };
  render() {
    let { words, lang } = getWords();
    const { currentEditKey, content, redisImage } = this.state;
    return (
      <React.Fragment>
        <div className="page-heading wow fadeIn" data-wow-duration="0.5s">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="heading-content-bg wow fadeIn"
                  data-wow-delay="0.75s"
                  data-wow-duration="1s"
                >
                  <div className="row">
                    <div
                      className={
                        lang === "eng"
                          ? "heading-content col-lg-12"
                          : "heading-content col-lg-12 text-right"
                      }
                    >
                      <p>
                        <a href="/">{words["homepage"]}</a> /{" "}
                        <em> {words["about us"]}</em>
                      </p>
                      <h2>
                        {words["about"]} <em>{words["us"]}</em>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {content && content.length > 0 ? (
          <React.Fragment>
            <div
              className="services-first about-services wow fadeIn"
              data-wow-delay="0.5s"
              data-wow-duration="1s"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <FeatureItem
                      handleEdit={this.handleEdit}
                      currentEditKey={currentEditKey}
                      handleGetRedisItem={this.handleGetRedisItem}
                      handleChange={this.handleChange}
                      keyItem="Sell & Buy Cars"
                      handleSubmit={this.handleSubmit}
                      handleCancel={this.handleCancel}
                      icon="fa fa-car"
                    />
                  </div>
                  <div className="col-lg-4">
                    <FeatureItem
                      handleEdit={this.handleEdit}
                      currentEditKey={currentEditKey}
                      handleGetRedisItem={this.handleGetRedisItem}
                      handleChange={this.handleChange}
                      keyItem="Defect Cars"
                      handleSubmit={this.handleSubmit}
                      handleCancel={this.handleCancel}
                      icon="fa fa-gear"
                    />
                  </div>
                  <div className="col-lg-4">
                    <FeatureItem
                      handleEdit={this.handleEdit}
                      currentEditKey={currentEditKey}
                      handleGetRedisItem={this.handleGetRedisItem}
                      handleChange={this.handleChange}
                      keyItem="Road Assistant"
                      handleSubmit={this.handleSubmit}
                      handleCancel={this.handleCancel}
                      icon="fa fa-truck"
                    />
                  </div>
                  <div className="col-lg-4">
                    <FeatureItem
                      handleEdit={this.handleEdit}
                      currentEditKey={currentEditKey}
                      handleGetRedisItem={this.handleGetRedisItem}
                      handleChange={this.handleChange}
                      keyItem="Car Dealer Research"
                      handleSubmit={this.handleSubmit}
                      handleCancel={this.handleCancel}
                      icon="fa fa-search"
                    />
                  </div>
                  <div className="col-lg-4">
                    <FeatureItem
                      handleEdit={this.handleEdit}
                      currentEditKey={currentEditKey}
                      handleGetRedisItem={this.handleGetRedisItem}
                      handleChange={this.handleChange}
                      keyItem="World Wide Known"
                      handleSubmit={this.handleSubmit}
                      handleCancel={this.handleCancel}
                      icon="fa fa-globe"
                    />
                  </div>
                  <div className="col-lg-4">
                    <FeatureItem
                      handleEdit={this.handleEdit}
                      currentEditKey={currentEditKey}
                      handleGetRedisItem={this.handleGetRedisItem}
                      handleChange={this.handleChange}
                      keyItem="best dealers"
                      handleSubmit={this.handleSubmit}
                      handleCancel={this.handleCancel}
                      icon="fa fa-users"
                    />
                  </div>
                </div>
              </div>
            </div>

            <section>
              <div className="more-about-us mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      {admin() &&
                      this.state.newImageFile &&
                      this.state.newImagePreview ? (
                        <React.Fragment>
                          <img
                            src={this.state.newImagePreview}
                            // style={{ width: "555px", height: "310px" }}
                            alt=""
                          />
                          <button
                            className={
                              this.state.loading
                                ? "btn add-icon pt-0 add-icon-overflow-3 mx-1 loading"
                                : "btn add-icon pt-0 add-icon-overflow-3 mx-1"
                            }
                            onClick={this.handleSubmitImage}
                          >
                            <i className="fa fa-check" aria-hidden="true"></i>
                          </button>
                          <button
                            className="btn add-icon bg-danger pt-0 add-icon-overflow-3 mx-1"
                            onClick={this.handleCancel}
                          >
                            <i className="fa fa-times" aria-hidden="true"></i>
                          </button>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <img
                            src={
                              redisImage &&
                              redisImage.items &&
                              redisImage.items[0] &&
                              redisImage.items[0].image
                                ? redisImage.items[0].image.url
                                : "http://placehold.it/555x310"
                            }
                            // style={{ width: "555px", height: "310px" }}
                            alt=""
                          />
                          {admin() && (
                            <React.Fragment>
                              <input
                                onChange={this.handleChangeImage}
                                type="file"
                                style={{ display: "none" }}
                                ref={(ref) => (this.fileUpload = ref)}
                              />
                              <button
                                className="btn add-icon pt-0 add-icon-overflow-3  ml-2"
                                onClick={(e) => this.fileUpload.click()}
                              >
                                <i
                                  className="fa fa-camera"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </React.Fragment>
                          )}
                        </React.Fragment>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <div
                        className={
                          lang === "eng"
                            ? "right-content text-left"
                            : "right-content text-right"
                        }
                      >
                        {admin() && currentEditKey.includes("about us long") ? (
                          <React.Fragment>
                            <input
                              type="text"
                              className="feature-input bg-transparent w-75 "
                              name={
                                lang === "eng"
                                  ? "about us long 1"
                                  : "'about us long 1 arabic'"
                              }
                              value={
                                lang === "eng"
                                  ? this.handleGetRedisItem("about us long 1")
                                  : this.handleGetRedisItem(
                                      "about us long 1 arabic"
                                    )
                              }
                              onChange={this.handleChange}
                            />
                            <input
                              type="text"
                              name={
                                lang === "eng"
                                  ? "about us long 2"
                                  : "about us long 2 arabic"
                              }
                              value={
                                lang === "eng"
                                  ? this.handleGetRedisItem("about us long 2")
                                  : this.handleGetRedisItem(
                                      "about us long 2 arabic"
                                    )
                              }
                              className="feature-input bg-transparent w-75 f-20 bold my-4"
                              onChange={this.handleChange}
                            />
                            <textarea
                              name={
                                lang === "eng"
                                  ? "about us long 3"
                                  : "about us long 3 arabic"
                              }
                              cols="10"
                              rows="5"
                              value={
                                lang === "eng"
                                  ? this.handleGetRedisItem("about us long 3")
                                  : this.handleGetRedisItem(
                                      "about us long 3 arabic"
                                    )
                              }
                              onChange={this.handleChange}
                              className="feature-input w-100 my-2"
                            ></textarea>
                            <div className="w-100 custom-control-inline">
                              <button
                                className="btn pt-0 add-icon mx-1"
                                onClick={this.handleSubmit}
                              >
                                <i
                                  className="fa fa-check"
                                  aria-hidden="true"
                                ></i>
                              </button>
                              <button
                                className="btn bg-danger pt-0 add-icon mx-1"
                                onClick={this.handleCancel}
                              >
                                <i
                                  className="fa fa-times"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {lang === "eng" ? (
                              <div className="custom-control-inline m-0">
                                <span>
                                  {lang === "eng"
                                    ? this.handleGetRedisItem("about us long 1")
                                    : this.handleGetRedisItem(
                                        "about us long 1 arabic"
                                      )}
                                </span>
                                {admin() && currentEditKey === "" && (
                                  <i
                                    className="fas fa-edit cursor-pointer ml-5"
                                    id="about us long"
                                    onClick={this.handleEdit}
                                  ></i>
                                )}
                              </div>
                            ) : (
                              <div className="custom-control-inline m-0">
                                {admin() && currentEditKey === "" && (
                                  <i
                                    className="fas fa-edit cursor-pointer mr-5"
                                    id="about us long"
                                    onClick={this.handleEdit}
                                  ></i>
                                )}
                                <span>
                                  {lang === "eng"
                                    ? this.handleGetRedisItem("about us long 1")
                                    : this.handleGetRedisItem(
                                        "about us long 1 arabic"
                                      )}
                                </span>
                              </div>
                            )}
                            <h4>
                              {lang === "eng"
                                ? this.handleGetRedisItem("about us long 2")
                                : this.handleGetRedisItem(
                                    "about us long 2 arabic"
                                  )}
                            </h4>
                            <p>
                              {lang === "eng"
                                ? this.handleGetRedisItem("about us long 3")
                                : this.handleGetRedisItem(
                                    "about us long 3 arabic"
                                  )}
                            </p>
                          </React.Fragment>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="col text-center mb-5">
              <i className="fa fa-car gray icon-no-car"></i>
              <h4 className="mt-4 gray">No items now</h4>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default About;
