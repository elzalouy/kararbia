/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import BlogHeader from "./BlogHeader.jsx";
import { Component } from "react";
import { getBlogById, deleteBlog } from "../../httpServices/blog/blog.js";
import { toast } from "react-toastify";
import DeleteBlogItem from "./deleteBlog.jsx";
const { admin } = require("../../httpServices/auth/auth");
class Blog extends Component {
  state = { blog: {}, loading: false };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const blog = await getBlogById(id);
    if (blog.error) window.location.replace = "/404";
    else {
      const state = this.state;
      state.blog = blog.data;
      this.setState({ state });
      this.renderElements();
    }
  }
  renderElements = () => {
    const state = this.state;
    if (state.blog)
      document
        .getElementById("convert")
        .insertAdjacentHTML("afterbegin", state.blog.blog);
  };
  handleDeleteItem = async ({ currentTarget: e }) => {
    this.setState({ loading: true });
    const id = this.props.match.params.id;
    const reuslt = await deleteBlog(id);
    if (reuslt.error) toast.error(reuslt.error.message);
    else {
      window.location.replace("/blogs");
    }
  };
  render() {
    const { blog } = this.state;
    return (
      <React.Fragment>
        <BlogHeader title="blog" to="blog" />
        <div className="blog-page mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="single-post">
                  <div className="item">
                    <img
                      src={blog && blog.image && blog.image.url}
                      className="pb-3 blog-image"
                      alt=""
                    />
                    <div className="down-content" id="convert"></div>
                  </div>
                  {admin() && blog && (
                    <div className="text-left">
                      <a
                        href={`/editBlog/${blog._id}`}
                        className="btn add-icon pt-0 mx-1"
                      >
                        <i className="fas fa-edit"></i>
                      </a>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target=".deleteBlog"
                        className="btn add-icon pt-0 bg-danger mx-1"
                      >
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <DeleteBlogItem
          handleDeleteItem={this.handleDeleteItem}
          loading={this.state.loading}
        />
      </React.Fragment>
    );
  }
}

export default Blog;
