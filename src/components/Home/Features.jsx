/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./home.css";
import { Component } from "react";
import { validateServiceSchema } from "../../httpServices/redis/redisSchema";
import { toast } from "react-toastify";
import { addRedis, getRedis } from "../../httpServices/redis/redis.js";
import handle from "../../middleware/errorHandle";
import HomeSearch from "./homeSearch.jsx";
import FeatureItem from "../common/FeatureItem.jsx";
import _ from "lodash";
class Features extends Component {
  state = {
    content: [],
    currentEditKey: "",
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
    this.setState({ currentEditKey: e.id });
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
    if (this.state.content && this.state.content.length > 0) {
      const item = this.state.content.find((s) => s.key === key);
      return item && item.value ? item.value : "";
    } else return "";
  };
  handleCancel = () => {
    const state = this.state;
    state.currentEditKey = "";
    this.setState({ state });
  };
  render() {
    const { currentEditKey } = this.state;
    return (
      <section>
        <div className="features-search-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
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
                  <div className="col-lg-6">
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
                  <div className="col-lg-6">
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
                  <div className="col-lg-6">
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
                </div>
              </div>
              <div className="col-lg-4">
                <HomeSearch />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
