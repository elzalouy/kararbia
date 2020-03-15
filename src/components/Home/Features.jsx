/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords.js";
import "./home.css";
import ContentDrop from "../common/ContentDrop.jsx";
import Content from "../common/content.jsx";
import { Component } from "react";
import { validateServiceSchema } from "../../httpServices/redis/redisSchema";
import { toast } from "react-toastify";
import { addRedis, getRedis } from "../../httpServices/redis/redis.js";
import { admin } from "../../httpServices/auth/auth";
import handle from "../../middleware/errorHandle";

class Features extends Component {
  state = {
    content: [],
    currentEditKey: "",
    value: {
      short_english: "",
      short_arabic: "",
      long_english: "",
      long_arabic: ""
    }
  };
  async componentDidMount() {
    try {
      const content = await getRedis();
      if (content.error) toast.warn(content.error.message);
      else {
        const state = this.state;
        state.content = content.data;
        this.setState({ state });
      }
    } catch (ex) {
      toast.warn(ex);
    }
  }
  handleEdit = handle(({ currentTarget: e }) => {
    const state = this.state;
    state.currentEditKey = e.id;
    state.value = state.content.find(s => s.key === state.currentEditKey).value;
    this.setState({ state });
  });

  handleChange = handle(async ({ currentTarget: e }) => {
    const state = this.state;
    state.value[e.name] = e.value;
    this.setState({ state });
  });
  handleSubmit = handle(async () => {
    const state = this.state;
    let content = { key: state.currentEditKey, value: state.value };
    console.log("handleSubmit -> content", content);
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
    const { content, currentEditKey, value } = this.state;
    if (!content || content.length === 0) return null;
    let buysel = content.find(s => s.key === "Sell & Buy Cars");
    let carDealerResearch = content.find(s => s.key === "Car Dealer Research");
    let bestDealers = content.find(s => s.key === "Best Dealers");
    let worldWideKnown = content.find(s => s.key === "World Wide Known");
    return (
      <section>
        <div className="features-search-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className={
                        lang === "eng"
                          ? "service-item wow fadeIn"
                          : "service-item wow fadeIn text-right"
                      }
                      dir={lang === "eng" ? "ltr" : "rtl"}
                      data-wow-duration="0.75s"
                    >
                      <div className="custom-control-inline row d-flex flex-row">
                        <div
                          className={
                            lang === "eng"
                              ? "col text-left"
                              : "col p-0 m-0 text-right mr-01"
                          }
                        >
                          <i className="fa fa-car"></i>
                        </div>
                        {admin() && (
                          <ContentDrop
                            handleEdit={this.handleEdit}
                            itemKey={buysel.key}
                          />
                        )}
                      </div>
                      <div className="text-content">
                        <h6>
                          {lang === "eng"
                            ? buysel.value["short_english"]
                            : buysel.value["short_arabic"]}
                        </h6>
                        <p>
                          {lang === "eng"
                            ? buysel.value["long_english"]
                            : buysel.value["long_arabic"]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className={
                        lang === "eng"
                          ? "service-item wow fadeIn"
                          : "service-item wow fadeIn text-right"
                      }
                      dir={lang === "eng" ? "ltr" : "rtl"}
                      data-wow-duration="0.75s"
                    >
                      <div className="custom-control-inline row d-flex flex-row">
                        <div
                          className={
                            lang === "eng"
                              ? "col text-left"
                              : "col p-0 m-0 text-right mr-01"
                          }
                        >
                          <i className="fa fa-search"></i>
                        </div>
                        {admin() && (
                          <ContentDrop
                            handleEdit={this.handleEdit}
                            itemKey={carDealerResearch.key}
                          />
                        )}
                      </div>

                      <div className="text-content">
                        <h6>
                          {lang === "eng"
                            ? carDealerResearch.value["short_english"]
                            : carDealerResearch.value["short_arabic"]}
                        </h6>
                        <p>
                          {lang === "eng"
                            ? carDealerResearch.value["long_english"]
                            : carDealerResearch.value["long_arabic"]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className={
                        lang === "eng"
                          ? "service-item wow fadeIn"
                          : "service-item wow fadeIn text-right"
                      }
                      dir={lang === "eng" ? "ltr" : "rtl"}
                      data-wow-duration="0.75s"
                    >
                      <div className="custom-control-inline row d-flex flex-row">
                        <div
                          className={
                            lang === "eng"
                              ? "col text-left"
                              : "col p-0 m-0 text-right mr-01"
                          }
                        >
                          <i className="fa fa-user"></i>
                        </div>
                        {admin() && (
                          <ContentDrop
                            handleEdit={this.handleEdit}
                            itemKey={bestDealers.key}
                          />
                        )}
                      </div>
                      <div className="text-content">
                        <h6>
                          {lang === "eng"
                            ? bestDealers.value["short_english"]
                            : bestDealers.value["short_arabic"]}
                        </h6>
                        <p>
                          {lang === "eng"
                            ? bestDealers.value["long_english"]
                            : bestDealers.value["long_arabic"]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className={
                        lang === "eng"
                          ? "service-item wow fadeIn"
                          : "service-item wow fadeIn text-right"
                      }
                      dir={lang === "eng" ? "ltr" : "rtl"}
                      data-wow-duration="0.75s"
                    >
                      <div className="custom-control-inline row d-flex flex-row">
                        <div
                          className={
                            lang === "eng"
                              ? "col text-left"
                              : "col p-0 m-0 text-right mr-01"
                          }
                        >
                          <i className="fa fa-globe"></i>
                        </div>
                        {admin() && (
                          <ContentDrop
                            handleEdit={this.handleEdit}
                            itemKey={worldWideKnown.key}
                          />
                        )}
                      </div>
                      <div className="text-content">
                        <h6>
                          {lang === "eng"
                            ? worldWideKnown.value["short_english"]
                            : worldWideKnown.value["short_arabic"]}
                        </h6>
                        <p>
                          {lang === "eng"
                            ? worldWideKnown.value["long_english"]
                            : worldWideKnown.value["long_arabic"]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="search-content wow fadeIn"
                  data-wow-duration="0.75s"
                >
                  <div className="search-heading">
                    <div className="icon">
                      <i className="fa fa-search"></i>
                    </div>
                    <div className="text-content">
                      <h2>{words["quick search"]}</h2>
                      <span>{words["quick search subtitle"]}</span>
                    </div>
                  </div>
                  <div className="search-form">
                    <div className="row">
                      <div className="col-md-12">
                        <div>
                          <select name="brand" id="brand">
                            <option value="-1">{words["select brand"]}</option>
                            <option>Wolkswagen</option>
                            <option>Audi</option>
                            <option>Bmw</option>
                            <option>Opel</option>
                            <option>Citroen</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input-select">
                          <select name="mark" id="mark">
                            <option value="-1">{words["select model"]}</option>
                            <option>Audi A3</option>
                            <option>Audi A4</option>
                            <option>Audi A5</option>
                            <option>Audi A6</option>
                            <option>Audi A7</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-select">
                          <select name="min-price" id="min-price">
                            <option value="-1">{words["min price"]}</option>
                            <option>$500</option>
                            <option>$1.000</option>
                            <option>$1.500</option>
                            <option>$2.000</option>
                            <option>$2.500</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-select">
                          <select name="max-price" id="max-price">
                            <option value="-1">{words["max price"]}</option>
                            <option>$5.000</option>
                            <option>$7.500</option>
                            <option>$10.000</option>
                            <option>$15.500</option>
                            <option>$20.000</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="secondary-button">
                          <a href="#">
                            {words["search"]} <i className="fa fa-search"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {admin() && (
          <Content
            itemKey={currentEditKey ? currentEditKey : ""}
            itemValues={value ? value : ""}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit && this.handleSubmit}
          />
        )}
      </section>
    );
  }
}

export default Features;
