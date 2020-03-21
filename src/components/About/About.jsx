import React, { Component } from "react";
import getWords from "../../utils/GetWords.js";
import { getRedis, addRedis } from "../../httpServices/redis/redis.js";
import { toast } from "react-toastify";
import { admin } from "../../httpServices/auth/auth";
import { validateServiceSchema } from "../../httpServices/redis/redisSchema.jsx";
import ContentDrop from "../common/ContentDrop.jsx";
import Content from "../common/content.jsx";
import handle from "../../middleware/errorHandle";
class About extends Component {
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
    let buysel =
      content && content.length > 0
        ? content.find(s => s.key === "Sell & Buy Cars")
        : { key: "", value: "" };
    let defectCars =
      content && content.length > 0
        ? content.find(s => s.key === "Defect Cars")
        : { key: "", value: "" };
    let roadAsstistant =
      content && content.length > 0
        ? content.find(s => s.key === "Road Assistant")
        : { key: "", value: "" };
    let carDealerResearch =
      content && content.length > 0
        ? content.find(s => s.key === "Car Dealer Research")
        : { key: "", value: "" };
    let bestDealers =
      content && content.length > 0
        ? content.find(s => s.key === "Best Dealers")
        : { key: "", value: "" };
    let worldWideKnown =
      content && content.length > 0
        ? content.find(s => s.key === "World Wide Known")
        : { key: "", value: "" };
    return (
      <React.Fragment>
        <div className="page-heading wow fadeIn" data-wow-duration="0.5s">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="heading-content-bg wow fadeIn"
                  data-wow-delay="0.75s"
                  data-wow-duration="1s"
                >
                  <div className="row">
                    <div
                      className={
                        lang === "eng"
                          ? "heading-content col-md-12"
                          : "heading-content col-md-12 text-right"
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
                  <div className="col-md-4">
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
                  <div className="col-md-4">
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
                          <i className="fa fa-gear"></i>
                        </div>
                        {admin() && (
                          <ContentDrop
                            handleEdit={this.handleEdit}
                            itemKey={defectCars.key}
                          />
                        )}
                      </div>
                      <div className="text-content">
                        <h6>
                          {lang === "eng"
                            ? defectCars.value["short_english"]
                            : defectCars.value["short_arabic"]}
                        </h6>
                        <p>
                          {lang === "eng"
                            ? defectCars.value["long_english"]
                            : defectCars.value["long_arabic"]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
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
                          <i className="fa fa-truck"></i>
                        </div>
                        {admin() && (
                          <ContentDrop
                            handleEdit={this.handleEdit}
                            itemKey={roadAsstistant.key}
                          />
                        )}
                      </div>
                      <div className="text-content">
                        <h6>
                          {lang === "eng"
                            ? roadAsstistant.value["short_english"]
                            : roadAsstistant.value["short_arabic"]}
                        </h6>
                        <p>
                          {lang === "eng"
                            ? roadAsstistant.value["long_english"]
                            : roadAsstistant.value["long_arabic"]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
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
                  <div className="col-md-4">
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
                  <div className="col-md-4">
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
                          <i className="fa fa-users"></i>
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
                </div>
              </div>
            </div>

            <section>
              <div className="more-about-us mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <img src="http://placehold.it/555x310" alt="" />
                    </div>
                    <div className="col-md-6">
                      <div className="right-content">
                        <span>Lorem ipsum consectetur.</span>
                        <h4>Who we are, what we do?</h4>
                        <p>
                          Thundercats gentrify flannel, raw denim before they
                          sold out PBRB meggings. Godard stumptown forage, tote
                          bag narwhal viral Austin actually.
                          <br />
                          <br />
                          Pop-up flannel direct trade, High Life sriracha chia
                          Pinterest photo booth. Narwhal PBR dreamcatcher,
                          taxidermy stumptown.
                        </p>
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
            {/* 
      <section>
      <div className="our-clients mb-5">
      <div className="container">
      <div className="row">
      <div className="col-md-12">
      <div className="section-heading">
      <div className="icon">
      <i className="fa fa-users"></i>
      </div>
      <div className="text-content">
      <h2>Our Happy Clients</h2>
      <span>Here are our happy clients</span>
      </div>
      </div>
      </div>
      </div>
      <div className="row">
      <div className="col-md-12">
      <div id="owl-clients" className="owl-carousel owl-theme">
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      <div className="item">
      <img src="http://placehold.it/180x120" alt="" />
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </section> */}
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
