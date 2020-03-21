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
import HomeSearch from "./homeSearch.jsx";

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
      const state = this.state;
      const content = await getRedis();
      if (content.error) toast.warn(content.error.message);
      else {
        state.content = content.data;
      }
      this.setState({ state });
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
    let result = await validateServiceSchema(content);
    if (result) toast.warn(result.message);
    else {
      let addresult = await addRedis(content);
      if (addresult.error) toast.warn(addresult.error.message);
      else window.location.reload();
    }
  });
  render() {
    let { lang } = getWords();
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
                <HomeSearch />
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
