/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords.js";
import { Component } from "react";
import { addRedis, getRedis } from "../../httpServices/redis/redis.js";
import { toast } from "react-toastify";
import { admin } from "../../httpServices/auth/auth.js";
import handle from "../../middleware/errorHandle";
import { validateServiceSchema } from "../../httpServices/redis/redisSchema.jsx";
import { getRandomImages } from "../../httpServices/car/car.js";
import _ from "lodash";
class Footer extends Component {
  state = {
    key: "",
    randomImages: [],
    currentEditKey: "",
    redis: [],
  };
  async componentDidMount() {
    const redisItems = await getRedis();
    if (redisItems.error) toast.warn(redisItems.error.message);
    const randomImages = await getRandomImages(6);
    if (randomImages.error) toast.warn(randomImages.error);
    const state = this.state;
    state.randomImages = randomImages.data;
    state.redis = redisItems.data;
    this.setState({ state });
  }
  handleEdit = handle(({ currentTarget: e }) => {
    const state = this.state;
    state.currentEditKey = e.id;
    this.setState({ state });
  });

  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    const item = state.redis.find((s) => s.key === e.name);
    const index = state.redis.indexOf(item);
    state.redis[index].value = e.value;
    this.setState({ state });
  });
  handleSubmit = handle(async () => {
    const state = this.state;
    let updatedItems = _.filter(state.redis, (s) =>
      s.key.includes(state.currentEditKey)
    );
    updatedItems.map(async (item) => {
      let keyVal = { key: item.key, value: item.value };
      const result = validateServiceSchema(keyVal);
      if (result) toast.warn(result.message);
      else {
        const response = await addRedis(keyVal);
        if (response.error) toast.warn(response.error.message);
        else {
          state.currentEditKey = "";
          this.setState({ state });
        }
      }
    });
    state.currentEditKey = "";
    this.setState({ state });
  });
  handleGetRedisItem = (key) => {
    const state = this.state;
    const item = _.find(state.redis, (s) => s.key === key);
    return item && item.value ? item.value : "";
  };
  handleCancel = () => {
    const state = this.state;
    state.currentEditKey = "";
    this.setState({ state });
  };
  render() {
    let { words, lang } = getWords();
    const { randomImages, currentEditKey } = this.state;
    return (
      <footer className="mt-0">
        <div className="container">
          <div className="row" dir={lang === "eng" ? "ltr" : "rtl"}>
            <div className="col-lg-4">
              <div className="footer-item">
                <div className="about-us">
                  <div className="custom-control-inline row w-100 p-0 m-0">
                    <React.Fragment>
                      <h2>{words["about us"]}</h2>
                      {admin() && currentEditKey === "" && (
                        <i
                          className="fas fa-edit text-white cursor-pointer mx-2"
                          id={
                            lang === "eng"
                              ? "about us description"
                              : "about us description arabic"
                          }
                          onClick={this.handleEdit}
                        ></i>
                      )}
                    </React.Fragment>
                  </div>
                  {admin() && currentEditKey.includes("about us") ? (
                    <div className="row w-100">
                      <textarea
                        value={
                          lang === "eng"
                            ? this.handleGetRedisItem("about us description")
                            : this.handleGetRedisItem(
                                "about us description arabic"
                              )
                        }
                        onChange={this.handleChange}
                        name={
                          lang === "eng"
                            ? "about us description"
                            : "about us description arabic"
                        }
                        cols="3"
                        rows="3"
                        className="feature-input w-100 bg-transparent text-white"
                      ></textarea>
                      <button
                        className="btn add-icon pt-0 m-1"
                        onClick={this.handleSubmit}
                      >
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </button>
                    </div>
                  ) : (
                    <p className={lang === "eng" ? "text-left" : "text-right"}>
                      {lang === "eng"
                        ? this.handleGetRedisItem("about us description")
                        : this.handleGetRedisItem(
                            "about us description arabic"
                          )}
                    </p>
                  )}
                  <ul className={lang === "eng" ? "text-left" : "text-right"}>
                    {admin() && currentEditKey.includes("contacts") ? (
                      <React.Fragment>
                        <label className="text-white">Facebook</label>
                        <input
                          type="text"
                          className="feature-input w-100 bg-transparent text-white"
                          name="contacts facebook"
                          value={this.handleGetRedisItem("contacts facebook")}
                          onChange={this.handleChange}
                        />
                        <label className="text-white">Twitter</label>
                        <input
                          type="text"
                          className="feature-input w-100 bg-transparent text-white"
                          name="contacts twitter"
                          value={this.handleGetRedisItem("contacts twitter")}
                          onChange={this.handleChange}
                        />
                        <label className="text-white">Linked In</label>
                        <input
                          type="text"
                          className="feature-input w-100 bg-transparent text-white"
                          name="contacts linkedin"
                          value={this.handleGetRedisItem("contacts linkedin")}
                          onChange={this.handleChange}
                        />
                        <button
                          className="btn add-icon pt-0 mt-2 px-1 mx-1"
                          onClick={this.handleSubmit}
                        >
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </button>
                        <button
                          className="btn add-icon pt-0 mt-2 px-1 mx-1 bg-danger"
                          onClick={this.handleCancel}
                        >
                          <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <li className="mx-1">
                          <a
                            href={this.handleGetRedisItem("contacts facebook")}
                            target="blank"
                          >
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li className="mx-1">
                          <a
                            href={this.handleGetRedisItem("contacts twitter")}
                            target="blank"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li className="mx-1">
                          <a
                            href={this.handleGetRedisItem("contacts linkedin")}
                            target="blank"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        {admin() && currentEditKey === "" && (
                          <button
                            className="btn my-2 text-white"
                            type="button"
                            id="contacts"
                            onClick={this.handleEdit}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                        )}
                      </React.Fragment>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-item">
                <div className="what-offer">
                  <div
                    className={
                      lang === "eng"
                        ? "row mx-2 text-left"
                        : "row mx-2 text-right"
                    }
                  >
                    <h2>{words["what we offer"]}</h2>
                  </div>
                  <ul>
                    <li>
                      {admin() && currentEditKey.includes("offers") ? (
                        <React.Fragment>
                          <input
                            type="text"
                            className="feature-input text-white w-75 bg-transparent"
                            name="offers 1"
                            value={this.handleGetRedisItem("offers 1")}
                            onChange={this.handleChange}
                          />
                        </React.Fragment>
                      ) : (
                        <a href="/contact">
                          {this.handleGetRedisItem("offers 1")}
                        </a>
                      )}
                    </li>
                    <li>
                      {admin() && currentEditKey.includes("offers") ? (
                        <React.Fragment>
                          <input
                            type="text"
                            className="bg-transparent text-white w-75 feature-input"
                            name="offers 2"
                            value={this.handleGetRedisItem("offers 2")}
                            onChange={this.handleChange}
                          />
                        </React.Fragment>
                      ) : (
                        <a href="/contact">
                          {this.handleGetRedisItem("offers 2")}
                        </a>
                      )}
                    </li>
                    <li>
                      {admin() && currentEditKey.includes("offers") ? (
                        <React.Fragment>
                          <input
                            type="text"
                            className="bg-transparent text-white w-75 feature-input"
                            name="offers 3"
                            value={this.handleGetRedisItem("offers 3")}
                            onChange={this.handleChange}
                          />
                        </React.Fragment>
                      ) : (
                        <a href="/contact">
                          {this.handleGetRedisItem("offers 3")}
                        </a>
                      )}
                    </li>
                    <li>
                      {admin() && currentEditKey.includes("offers") ? (
                        <React.Fragment>
                          <input
                            type="text"
                            className="bg-transparent text-white w-75 feature-input"
                            name="offers 4"
                            value={this.handleGetRedisItem("offers 4")}
                            onChange={this.handleChange}
                          />
                        </React.Fragment>
                      ) : (
                        <a href="/contact">
                          {this.handleGetRedisItem("offers 4")}
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-item">
                <div className="need-help">
                  <div
                    className={
                      lang === "eng" ? "row mx-2 text-left" : "row text-right"
                    }
                  >
                    <h2 className="pr-4">{words["need help"]}</h2>
                    {admin() && currentEditKey === "" && (
                      <i
                        className="fas fa-edit text-white cursor-pointer mx-1"
                        id="offers"
                        onClick={this.handleEdit}
                      ></i>
                    )}
                  </div>
                  <ul>
                    <li>
                      {admin() && currentEditKey.includes("offers") ? (
                        <React.Fragment>
                          <input
                            type="text"
                            className="bg-transparent text-white w-75 feature-input"
                            name="offers 5"
                            value={this.handleGetRedisItem("offers 5")}
                            onChange={this.handleChange}
                          />
                        </React.Fragment>
                      ) : (
                        <a href="/contact">
                          {this.handleGetRedisItem("offers 5")}
                        </a>
                      )}
                    </li>
                    <li>
                      {admin() && currentEditKey.includes("offers") ? (
                        <React.Fragment>
                          <input
                            type="text"
                            className="bg-transparent text-white w-75 feature-input"
                            name="offers 6"
                            value={this.handleGetRedisItem("offers 6")}
                            onChange={this.handleChange}
                          />
                        </React.Fragment>
                      ) : (
                        <a href="/contact">
                          {this.handleGetRedisItem("offers 6")}
                        </a>
                      )}
                    </li>
                    <li>
                      {admin() && currentEditKey.includes("offers") ? (
                        <React.Fragment>
                          <input
                            type="text"
                            className="bg-transparent text-white w-75 feature-input"
                            name="offers 7"
                            value={this.handleGetRedisItem("offers 7")}
                            onChange={this.handleChange}
                          />
                        </React.Fragment>
                      ) : (
                        <a href="/contact">
                          {this.handleGetRedisItem("offers 7")}
                        </a>
                      )}
                    </li>
                    <li>
                      {admin() && currentEditKey.includes("offers") ? (
                        <React.Fragment>
                          <input
                            type="text"
                            className="bg-transparent text-white w-75 feature-input"
                            name="offers 8"
                            value={this.handleGetRedisItem("offers 8")}
                            onChange={this.handleChange}
                          />
                        </React.Fragment>
                      ) : (
                        <a href="/contact">
                          {this.handleGetRedisItem("offers 8")}
                        </a>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              {admin() && currentEditKey.includes("offers") && (
                <React.Fragment>
                  <button
                    className="btn add-icon pt-0 mx-1"
                    onClick={this.handleSubmit}
                  >
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </button>
                  <button
                    className="btn add-icon bg-danger pt-0 mx-1"
                    onClick={this.handleCancel}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </React.Fragment>
              )}
            </div>
            <div className="col-lg-4">
              <div className="footer-item">
                <div className="our-gallery">
                  <div
                    className={
                      lang === "eng"
                        ? "row mx-2 text-left"
                        : "row mx-2 text-right"
                    }
                  >
                    <h2>{words["our galary"]}</h2>
                  </div>
                  <ul>
                    {randomImages &&
                      randomImages.length > 0 &&
                      randomImages.map((item) => (
                        <li key={randomImages.indexOf(item)}>
                          <a href="#">
                            <img
                              src={item.url}
                              style={{ height: "70px", width: "70px" }}
                              alt=""
                            />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="sub-footer">
                <p>
                  Copyright 2020. All rights reserved by:{" "}
                  <a href="#"> Kar Arabia</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
