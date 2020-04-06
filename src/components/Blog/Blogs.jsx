/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import BlogHeader from "./BlogHeader.jsx";
import { getBlogs } from "../../httpServices/blog/blog.js";
import { toast } from "react-toastify";
import { Component } from "react";
import { getDate } from "../../utils/formatDate.js";
import handle from "../../middleware/errorHandle";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/pagination.jsx";

class Blogs extends Component {
  state = { blogs: [], filtered: [], currentPage: 1, pageSize: 2 };
  async componentDidMount() {
    const state = this.state;
    let blogs = await getBlogs();
    if (blogs.error) return toast.warn(blogs.error.message);
    state.blogs = blogs.data;
    state.filtered = blogs.data;
    this.setState({ state });
    this.getPagedData();
  }

  handleChangePage = handle((page) => {
    const state = this.state;
    state.currentPage = page;
    this.setState({ state });
    this.renderElements();
    this.getPagedData();
  });
  getPagedData = () => {
    const { pageSize, currentPage, blogs } = this.state;
    const state = this.state;
    state.filtered = paginate(blogs, currentPage, pageSize);
    this.setState({ state });
  };
  componentDidUpdate() {
    this.renderElements();
  }

  renderElements = handle(() => {
    const state = this.state;
    state.filtered.forEach((item) => {
      document
        .getElementById(item._id)
        .insertAdjacentHTML("afterbegin", item.blog);
    });
  });
  render() {
    const { filtered: blogs } = this.state;
    return (
      <React.Fragment>
        <BlogHeader to="blogs" title="blogs" />
        <div className="blog-page mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="blog-classic-post">
                  {blogs && blogs.length > 0 ? (
                    blogs.map((item) => {
                      let date = getDate(item.date);
                      return (
                        <div className="item blog-item" key={item._id}>
                          <div className="thumb-content">
                            <div className="date-post">
                              <a href={`/blog/${item._id}`}>
                                {date.day + " " + date.month}
                              </a>
                            </div>
                            <div className="thumb-inner">
                              <a href={`/blog/${item._id}`}>
                                <img src={item.image.url} alt="" />
                              </a>
                            </div>
                          </div>
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
                          <div className="text-button pl-3 pb-2">
                            <a href={`/blog/${item._id}`}>
                              Continue Reading
                              <i className="fa fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <React.Fragment>
                      <div className="text-center">
                        <i
                          class="fa fa-file gray icon-no-car"
                          aria-hidden="true"
                        ></i>
                        <h4 className="mt-4 gray">No items now</h4>
                      </div>
                    </React.Fragment>
                  )}
                  <Pagination
                    itemsCount={
                      blogs && blogs.length ? this.state.blogs.length : 0
                    }
                    pageSize={this.state.pageSize}
                    currentPage={this.state.currentPage}
                    onPageChange={this.handleChangePage}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blogs;
