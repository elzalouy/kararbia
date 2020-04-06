/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords.js";
import { Component } from "react";
import { getRedisItem, addRedis } from "../../httpServices/redis/redis.js";
import { toast } from "react-toastify";
import { admin } from "../../httpServices/auth/auth.js";
import ContentDrop from "./ContentDrop.jsx";
import Content from "./content.jsx";
import handle from "../../middleware/errorHandle";
import { validateServiceSchema } from "../../httpServices/redis/redisSchema.jsx";
import { getRandomImages } from "../../httpServices/car/car.js";
class Footer extends Component {
  state = {
    redisItem: {
      key: "",
      value: {
        long_arabic: "",
        long_english: "",
        short_english: "",
        short_arabic: "",
      },
    },
    randomImages: [],
  };
  async componentDidMount() {
    const redisItem = await getRedisItem("footer about us");
    if (redisItem.error) return toast.warn(redisItem.error.message);
    const randomImages = await getRandomImages(6);
    if (randomImages.error) toast.warn(randomImages.error);
    const state = this.state;
    state.redisItem = redisItem.data;
    state.randomImages = randomImages.data;
    this.setState({ state });
  }
  handleEdit = handle(({ currentTarget: e }) => {
    const state = this.state;
    state.key = e.id;
    this.setState({ state });
  });

  handleChange = handle(async ({ currentTarget: e }) => {
    const state = this.state;
    state.redisItem.value[e.name] = e.value;
    this.setState({ state });
  });

  handleSubmit = handle(async () => {
    const state = this.state;
    let content = { key: state.redisItem.key, value: state.redisItem.value };
    let result = await validateServiceSchema(content);
    if (result) toast.warn(result.message);
    else {
      let addresult = await addRedis(content);
      if (addresult.error) toast.warn(addresult.error.message);
      else window.location.reload();
    }
  });
  render() {
    let { words, lang } = getWords();
    const { redisItem, randomImages } = this.state;
    if (!redisItem) return null;
    return (
      <footer className="mt-0">
        <div className="container">
          <div className="row" dir={lang === "eng" ? "ltr" : "rtl"}>
            <div className="col-md-4">
              <div className="footer-item">
                <div className="about-us">
                  <div className="custom-control-inline">
                    {lang === "eng" ? (
                      <React.Fragment>
                        <h2 className="pr-5">{words["about us"]}</h2>
                        {admin() && <ContentDrop itemKey={redisItem.key} />}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {admin() && <ContentDrop itemKey={redisItem.key} />}
                        <h2 className="pr-5">{words["about us"]}</h2>
                      </React.Fragment>
                    )}
                  </div>
                  <p>
                    {lang === "eng" && redisItem && redisItem.value
                      ? redisItem.value.long_english
                      : redisItem.value.long_arabic}
                  </p>
                  <ul>
                    <li className="mx-1">
                      <a href="#">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li className="mx-1">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="mx-1">
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    {/* {admin() && (
                      <li className="mx-1">
                        <a
                          href=""
                          type="button"
                          data-toggle="modal"
                          data-target="#changeSocialMedia"
                          aria-hidden="false"
                        >
                          <i class="fas fa-edit"></i>
                        </a>
                      </li>
                    )} */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <div className="what-offer">
                  <h2>{words["what we offer"]}</h2>
                  <ul>
                    <li>
                      <a href="/contact">Rent a car now</a>
                    </li>
                    <li>
                      <a href="/contact">Search for sale</a>
                    </li>
                    <li>
                      <a href="/contact">Try search form</a>
                    </li>
                    <li>
                      <a href="/contact">Best daily dealers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-item">
                <div className="need-help">
                  <h2>{words["need help"]}</h2>
                  <ul>
                    <li>
                      <a href="/contact">Modern wheels</a>
                    </li>
                    <li>
                      <a href="/contact">Awesome spoilers</a>
                    </li>
                    <li>
                      <a href="/contact">Dynamic Enetrior</a>
                    </li>
                    <li>
                      <a href="/contact">Save accidents </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-item">
                <div className="our-gallery">
                  <h2>{words["our galary"]}</h2>
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

            <div className="col-md-12">
              <div className="sub-footer">
                <p>
                  Copyright 2020. All rights reserved by:{" "}
                  <a href="#"> Kar Arabia</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {admin() && (
          <Content
            itemKey={redisItem.key && redisItem.key}
            itemValues={redisItem.value && redisItem.value}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </footer>
    );
  }
}

export default Footer;
