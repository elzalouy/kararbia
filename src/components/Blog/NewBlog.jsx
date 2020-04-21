import React, { Component } from "react";
import BlogHeader from "./BlogHeader";
import { validateBlog } from "../../httpServices/blog/blogSchema";
import cmeraImg from "../../images/camera.svg";
import "./blog.css";
import { toast } from "react-toastify";
import getWords from "../../utils/GetWords";
import { addBlog } from "../../httpServices/blog/blog";
class NewBlog extends Component {
  upload = React.createRef();
  state = { blog: "", image: null, preview: null, loading: false };
  handleAddStyle = ({ currentTarget: e }) => {
    const state = this.state;
    if (e.id === "h1") state.blog += `<h1>Type your text here</h1>`;
    if (e.id === "h2") state.blog += `<h2>Type your text here</h2>`;
    if (e.id === "h3") state.blog += `<h3>Type your text here</h3>`;
    if (e.id === "h4") state.blog += `<h4>Type your text here</h4>`;
    if (e.id === "h5") state.blog += `<h5>Type your text here</h5>`;
    if (e.id === "link") state.blog += `<a href=''>type a link</a>`;
    if (e.id === "mark") state.blog += `<mark>Mark Here</mark>`;
    if (e.id === "bold") state.blog += `<pre>Bold Here</pre>`;
    if (e.id === "space") state.blog += `&nbsp;`;
    if (e.id === "gray") state.blog += "<span>Type your text here</span>";
    this.setState({ state });
  };
  handleChange = ({ currentTarget: e }) => {
    const state = this.state;
    state.blog = e.value;
    this.setState({ state });
    this.addContent();
  };
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const state = this.state;
      let index = this.refs.blogarea.selectionStart;
      state.blog = [
        state.blog.slice(0, index),
        "<br>",
        state.blog.slice(index),
      ].join("");
      this.setState({ state });
    }
  };
  handleSaveBlog = async () => {
    this.setState({ loading: true });
    const state = this.state;
    const error = await validateBlog({ blog: state.blog });
    if (error) {
      this.setState({ loading: false });
      return toast.warn(error.message);
    }
    if (state.image === null) {
      this.setState({ loading: false });
      return toast.warn("The image is required data");
    } else {
      const result = await addBlog({ blog: state.blog, image: state.image });
      if (result.error) {
        toast.warn(result.error.message);
        this.setState({ loading: false });
      } else {
        window.location = "/blogs";
      }
    }
  };
  handleCancel = () => {
    window.location = "/";
  };
  handleAddImage = ({ currentTarget: e }) => {
    const state = this.state;
    state.image = e.files[0];
    state.preview = URL.createObjectURL(e.files[0]);
    this.setState({ state });
  };
  handleChangeImage = () => {
    const state = this.state;
    state.image = null;
    state.preview = null;
    this.setState({ state });
  };
  addContent = () => {
    if (document.getElementById("convert")) {
      let element = document.getElementById("convert");
      let length = element.childNodes.length;
      if (element)
        for (let i = 0; i < length; i++) {
          document.getElementById("convert").removeChild(element.firstChild);
        }
      document
        .getElementById("convert")
        .insertAdjacentHTML("afterbegin", this.state.blog);
    }
  };
  render() {
    this.addContent();
    const state = this.state;
    const { words } = getWords();
    return (
      <React.Fragment>
        <div className="bg-gray">
          <BlogHeader title="blog" to="blog" />
          <div className="container">
            <div className="row">
              <div className="col-12 text-left blog">
                <div className="attr">
                  <button
                    id="h1"
                    className="btn style bold"
                    onClick={this.handleAddStyle}
                  >
                    h1
                  </button>
                  <button
                    className="btn style bold"
                    onClick={this.handleAddStyle}
                    id="h2"
                  >
                    h2
                  </button>
                  <button
                    className="btn style bold"
                    onClick={this.handleAddStyle}
                    id="h3"
                  >
                    h3
                  </button>
                  <button
                    className="btn style bold"
                    onClick={this.handleAddStyle}
                    id="h4"
                  >
                    h4
                  </button>
                  <button
                    className="btn style bold"
                    onClick={this.handleAddStyle}
                    id="link"
                  >
                    {"</>"}
                  </button>
                  <button
                    className="btn style bold"
                    id="mark"
                    onClick={this.handleAddStyle}
                  >
                    <i className="fa fa-thumbtack"></i>
                  </button>
                  <button
                    className="btn style bold"
                    id="bold"
                    onClick={this.handleAddStyle}
                  >
                    b
                  </button>
                  <button
                    className="btn style bold"
                    id="space"
                    onClick={this.handleAddStyle}
                  >
                    big space
                  </button>
                  <button
                    className="btn style bold"
                    id="gray"
                    onClick={this.handleAddStyle}
                  >
                    gray
                  </button>
                </div>
                <textarea
                  ref="blogarea"
                  value={state.blog}
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                  name="blog"
                  rows="20"
                  className="w-100 blogArea bg-gray"
                >
                  {state.blog}
                </textarea>
              </div>
              <div className="col-12 text-center mt-5 shadow">
                <div className="text-center w-100  add-icon-overflow">
                  <button className="btn add-icon p-0 mb-5">
                    <i className="fa fa-car" aria-hidden="true"></i>
                  </button>
                </div>
                {!state.image ? (
                  <React.Fragment>
                    <img src={cmeraImg} alt="" className="w-25 h-25" />
                    <p>{words["no photos selected"]}</p>
                    <input
                      id="profile_photo"
                      onChange={this.handleAddImage}
                      type="file"
                      multiple
                      ref={(ref) => (this.upload = ref)}
                      style={{ display: "none" }}
                    />
                    <button
                      onClick={(e) => this.upload.click()}
                      className="btn add-icon pt-0"
                    >
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <img
                      src={state.preview}
                      alt=""
                      className="brd-1 w-100 h-auto mb-3"
                    />
                    <button
                      className="btn image-delete"
                      onClick={this.handleChangeImage}
                    >
                      x
                    </button>
                  </React.Fragment>
                )}
              </div>
              <div className="col-12 mt-5 shadow mb-5">
                <div className="text-center w-100  add-icon-overflow">
                  <button className="btn add-icon p-0 mb-5">
                    <i className="fas fa-file-word"></i>
                  </button>
                </div>
                <div className="convert" id="convert"></div>
              </div>
              <div className="text-center col mb-5">
                <button
                  className={
                    state.loading
                      ? "btn add-icon pt-0 mx-1 loading"
                      : "btn add-icon pt-0 mx-1"
                  }
                  disabled={state.loading ? true : false}
                  onClick={this.handleSaveBlog}
                >
                  <i className="fa fa-check" aria-hidden="true"></i>
                </button>
                <button
                  onClick={this.handleCancel}
                  className="btn add-icon pt-0 mx-1 bg-danger"
                  disabled={state.loading ? true : false}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default NewBlog;
