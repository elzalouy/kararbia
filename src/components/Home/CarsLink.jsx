import React, { Component } from "react";
import { getRedisItem, addRedis } from "../../httpServices/redis/redis";
import { toast } from "react-toastify";
import getWords from "../../utils/GetWords";
import admin from "../../middleware/admin";
import handle from "../../middleware/errorHandle";
import { validateServiceSchema } from "../../httpServices/redis/redisSchema";

class CarsLink extends Component {
  state = {
    content: {},
    contentArabic: {},
    currentEditKey: "",
  };
  async componentDidMount() {
    const state = this.state;
    const content = await getRedisItem("home search section");
    const Arabiccontent = await getRedisItem("home search section arabic");
    if (content.error) toast.warn(content.error.message);
    else {
      state.content = content.data;
    }
    if (Arabiccontent.error) toast.warn(Arabiccontent.error.message);
    else {
      state.contentArabic = Arabiccontent.data;
    }
    this.setState({ state });
  }
  handleEdit = handle(({ currentTarget: e }) => {
    this.setState({ currentEditKey: e.id });
  });
  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    if (e.name === "home search section") state.content.value = e.value;
    if (e.name === "home search section arabic") state.content.value = e.value;
    this.setState({ state });
  });
  handleCancel = ({ currentTarget: e }) => {
    const state = this.state;
    state.currentEditKey = "";
    this.setState({ state });
  };
  handleSubmit = async () => {
    const state = this.state;
    let result = validateServiceSchema({
      key: state.content.key,
      value: state.content.value,
    });
    if (result) toast.warn(result.message);
    else {
      let resultArabic = validateServiceSchema({
        key: state.contentArabic.key,
        value: state.contentArabic.value,
      });
      if (resultArabic) toast.warn(resultArabic.message);
      let response = await addRedis({
        key: state.content.key,
        value: state.content.value,
      });
      if (response.error) toast.warn(response.error.message);
      let responseArabic = await addRedis({
        key: state.contentArabic.key,
        value: state.contentArabic.value,
      });
      if (responseArabic.error) toast.warn(responseArabic.error.message);
      state.currentEditKey = "";
      this.setState({ state });
    }
  };
  render() {
    const { content, contentArabic, currentEditKey } = this.state;
    const { lang } = getWords();
    if (!content) return null;
    return (
      <section>
        <div className="call-to-action wow fadeIn" data-wow-duration="0.75s">
          <div className="container">
            <div className="call-to-action-content">
              <div
                className="row text-right"
                dir={lang === "eng" ? "ltr" : "rtl"}
              >
                <div className="col-md-12">
                  {admin() && currentEditKey.includes("home search section") ? (
                    <React.Fragment>
                      <input
                        type="text"
                        className="w-75 bg-transparent mr-5 text-white feature-input"
                        name={
                          lang === "eng"
                            ? "home search section"
                            : "home search section arabic"
                        }
                        value={
                          lang === "eng" ? content.value : contentArabic.value
                        }
                        onChange={this.handleChange}
                      />
                      <button
                        className="btn add-icon pt-0 mx-1"
                        onClick={this.handleSubmit}
                      >
                        <i class="fa fa-check" aria-hidden="true"></i>
                      </button>
                      <button
                        className="btn add-icon bg-danger pt-0 mx-1"
                        onClick={this.handleCancel}
                      >
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <p>
                        {lang === "eng" ? content.value : contentArabic.value}
                      </p>
                      <span
                        class="fas fa-edit  mt-2 text-white mx-2 cursor-pointer"
                        id={
                          lang === "eng"
                            ? "home search section"
                            : "home search section arabic"
                        }
                        onClick={this.handleEdit}
                      ></span>
                    </React.Fragment>
                  )}
                  <div className="secondary-button">
                    <a href="/cars">
                      Cars <i className="fa fa-shopping-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CarsLink;
