import React, { Component } from "react";
import { getRedisItem } from "../../httpServices/redis/redis";
import { toast } from "react-toastify";
import getWords from "../../utils/GetWords";

class CarsLink extends Component {
  state = {
    conent: {}
  };
  async componentDidMount() {
    const content = await getRedisItem("home search section");
    if (content.error) toast.warn(content.error.message);
    else {
      const state = this.state;
      state.content = content.data;
      this.setState({ state });
    }
  }
  render() {
    const { content } = this.state;
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
                  <p>
                    {lang === "eng"
                      ? content.value.long_english
                      : content.value.long_arabic}
                  </p>
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
