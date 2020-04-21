/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import getWords from "../../utils/GetWords.js";
import { validateContact } from "../../httpServices/contact/contactSchema";
import { addContect } from "../../httpServices/contact/contact.js";
import { toast } from "react-toastify";
import { admin } from "../../httpServices/auth/auth";
import { getRedisItem, addRedis } from "../../httpServices/redis/redis.js";
import handle from "../../middleware/errorHandle";
import { validateServiceSchema } from "../../httpServices/redis/redisSchema.jsx";
import _ from "lodash";
class ContactUs extends Component {
  state = {
    contact: { name: "", email: "", subject: "", message: "" },
    error: "",
    loading: false,
    ContactRedis: [],
    currentEditKey: "",
  };
  async componentDidMount() {
    try {
      const state = this.state;
      let phone = await getRedisItem("contacts phone");
      let email = await getRedisItem("contacts email");
      let description = await getRedisItem("contacts description");
      let arabicDescription = await getRedisItem("contacts description arabic");
      if (phone && phone.data) state.ContactRedis.push(phone.data);
      if (email && email.data) state.ContactRedis.push(email.data);
      if (description && description.data)
        state.ContactRedis.push(description.data);
      if (arabicDescription && arabicDescription.data)
        state.ContactRedis.push(arabicDescription.data);
    } catch (ex) {
      toast.warn("something wrong happened while loading contact information");
    }
  }
  handleChange = handle(({ currentTarget: e }) => {
    const state = this.state;
    state.contact[e.name] = e.value;
    this.setState({ state });
  });
  handleSubmit = handle(async () => {
    this.setState({ loading: true });
    const state = this.state;
    let result = validateContact(state.contact);
    if (result) {
      state.error = result.message;
      this.setState({ loading: false });
    } else {
      let response = await addContect(state.contact);
      if (response.error) {
        toast.warn(response.error.message);
        this.setState({ loading: false });
      } else {
        window.location = "/";
      }
    }
  });
  handleChangeRedis = handle(({ currentTarget: e }) => {
    const state = this.state;
    state.ContactRedis.value[e.name] = e.value;
    this.setState({ state });
  });

  handleGetRedisItem = (key) => {
    if (this.state.ContactRedis && this.state.ContactRedis.length > 0) {
      const item = this.state.ContactRedis.find((s) => s.key === key);
      return item && item.value ? item.value : "";
    } else return "";
  };
  handleEdit = handle(({ currentTarget: e }) => {
    const state = this.state;
    state.currentEditKey = e.id;
    this.setState({ state });
  });

  handleChangeContact = handle(({ currentTarget: e }) => {
    const state = this.state;
    let item = state.ContactRedis.find((s) => s.key === e.name);
    let index = state.ContactRedis.indexOf(item);
    state.ContactRedis[index].value = e.value;
    this.setState({ state });
  });
  handleSubmitContact = handle(async () => {
    const state = this.state;
    let items = _.filter(state.ContactRedis, (s) =>
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
  handleCancel = () => {
    const state = this.state;
    state.currentEditKey = "";
    this.setState({ state });
  };

  render() {
    let { words, lang } = getWords();
    const { ContactRedis, currentEditKey } = this.state;
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
                    <div className="heading-content col-md-12">
                      <p>
                        <a href="/">{words["homepage"]}</a> /{" "}
                        <em> {words["contact us"]}</em>
                      </p>
                      <h2>
                        {words["contact"]} <em>{words["us2"]}</em>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="p-0">
          <div
            className="contact-content wow fadeIn mb-5"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="send-message">
                    <div className="sep-section-heading">
                      <h2>
                        {words["send"]} {words["us3"]}{" "}
                        <em>{words["message"]}</em>
                      </h2>
                    </div>
                    <form>
                      <div className="row">
                        <div className=" col-md-4 col-sm-4 col-xs-6">
                          <input
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            className="form-control"
                            placeholder="Your name..."
                          />
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-6">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            placeholder="Your email..."
                          />
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                          <input
                            type="text"
                            className="form-control"
                            name="subject"
                            onChange={this.handleChange}
                            value={this.state.subject}
                            placeholder="Subject..."
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <textarea
                            id="message"
                            className="form-control"
                            name="message"
                            onChange={this.handleChange}
                            value={this.state.message}
                            placeholder="Message..."
                          ></textarea>
                          <p className="pt-2 text-warning">
                            {this.state.error.length > 0 && this.state.error}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="submit-coment col-md-12">
                          <div
                            className={
                              this.state.loading
                                ? "loading border border-warning"
                                : "btn primary-button"
                            }
                          >
                            {!this.state.loading && (
                              <a onClick={this.handleSubmit}>
                                Send now <i className="fa fa-paper-plane"></i>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {ContactRedis &&
                  ContactRedis.length > 0 &&
                  ContactRedis[0].key && (
                    <div className="col-md-4">
                      <div className="contact-info">
                        <div className="sep-section-heading custom-control-inline w-100">
                          <h2>
                            {lang === "eng" ? (
                              <React.Fragment>
                                {words["contact"]}{" "}
                                <em>{words["information"]}</em>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <em>{words["information"]}</em>{" "}
                                {words["contact"]}
                              </React.Fragment>
                            )}
                          </h2>
                          {admin() && (
                            <button
                              id="contacts"
                              onClick={this.handleEdit}
                              className="btn p-0 m-0 mx-5 cursor-pointer"
                            >
                              <i className="fas fa-edit"></i>
                            </button>
                          )}
                        </div>
                        {admin() && currentEditKey.length > 0 ? (
                          <React.Fragment>
                            <textarea
                              cols="30"
                              rows="5"
                              className="feature-input"
                              name={
                                lang === "eng"
                                  ? "contacts description"
                                  : "contacts description arabic"
                              }
                              value={
                                lang === "eng"
                                  ? this.handleGetRedisItem(
                                      "contacts description"
                                    )
                                  : this.handleGetRedisItem(
                                      "contacts description arabic"
                                    )
                              }
                              onChange={this.handleChangeContact}
                            ></textarea>
                            <input
                              type="text"
                              className="feature-input w-100 text-dark py-2"
                              name="contacts phone"
                              placeholder="Phone Number"
                              value={this.handleGetRedisItem("contacts phone")}
                              onChange={this.handleChangeContact}
                            />
                            <input
                              type="text"
                              className="feature-input w-100 py-2 text-dark"
                              name="contacts email"
                              placeholder="Email"
                              value={this.handleGetRedisItem("contacts email")}
                              onChange={this.handleChangeContact}
                            />
                            <button
                              className="btn add-icon pt-0 m-1 "
                              onClick={this.handleSubmitContact}
                            >
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                            <button
                              className="btn add-icon bg-danger m-1 pt-0"
                              onClick={this.handleCancel}
                            >
                              <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <p>
                              {lang === "eng"
                                ? this.handleGetRedisItem(
                                    "contacts description"
                                  )
                                : this.handleGetRedisItem(
                                    "contacts description arabic"
                                  )}
                            </p>
                            <div className="info-list">
                              <ul>
                                <li>
                                  <i className="fa fa-phone"></i>
                                  <span>
                                    {this.handleGetRedisItem("contacts phone")}
                                  </span>
                                </li>
                                <li>
                                  <i className="fa fa-envelope"></i>
                                  <span>
                                    {this.handleGetRedisItem("contacts email")}
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </React.Fragment>
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ContactUs;
