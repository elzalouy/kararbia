import React from "react";
import getWords from "../../utils/GetWords.js";
import { getBlogsByQuery } from "../../httpServices/blog/blog";
import { Component } from "react";
import { toast } from "react-toastify";
import { getDate } from "../../utils/formatDate";
import handle from "../../middleware/errorHandle";

class News extends Component {
  state = { blogs: [] };
  async componentDidMount() {
    const blogs = await getBlogsByQuery(2, "date");
    if (blogs.error) return toast.warn(blogs.error.message);
    const state = this.state;
    state.blogs = blogs.data;
    this.setState({ state });
    this.renderElements();
  }
  componentDidUpdate() {
    this.renderElements();
  }

  renderElements = handle(() => {
    const state = this.state;
    state.blogs.forEach((item) => {
      document
        .getElementById(item._id)
        .insertAdjacentHTML("afterbegin", item.blog);
    });
  });

  render() {
    let { words } = getWords();
    return (
      <section>
        <div className="latest-news">
          <div className="container">
            <div className="latest-news-content">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <div className="icon">
                      <i className="fa fa-file"></i>
                    </div>
                    <div className="text-content">
                      <h2>{words["latest news"]}</h2>
                      <span>{words["here are our latest posts"]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {this.state.blogs && this.state.blogs.length > 0 ? (
                this.state.blogs.map((item) => {
                  const date = getDate(item.date);
                  return (
                    <div className="col-lg-6" key={item._id}>
                      <div
                        className="item wow fadeIn"
                        data-wow-duration="0.75s"
                      >
                        <div className="thumb-content">
                          <div className="date-post">
                            <a
                              href={`/blog/${item._id}`}
                            >{`${date.day} ${date.month}`}</a>
                          </div>
                          <div className="thumb-inner">
                            <a href={`/blog/${item._id}`}>
                              <img src={item.image.url} alt="" />
                            </a>
                          </div>
                        </div>
                        <div className="news-content">
                          <div className="down-content">
                            <div id={item._id} className="convert">
                              {document &&
                                document.getElementById(item._id) &&
                                item &&
                                document
                                  .getElementById(item._id)
                                  .insertAdjacentHTML("afterbegin", item.blog)}
                            </div>
                          </div>
                        </div>
                        <div className="text-button pl-3 pb-2 pt-4">
                          <a href={`/blog/${item._id}`}>
                            Continue Reading{" "}
                            <i className="fa fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <React.Fragment>
                  <div className="text-center">
                    <i
                      className="fa fa-file gray icon-no-car"
                      aria-hidden="true"
                    ></i>
                    <h4 className="mt-4 gray">No items now</h4>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
