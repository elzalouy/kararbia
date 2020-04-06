import React from "react";
import getWords from "../../utils/GetWords";
import { admin } from "../../httpServices/auth/auth";
const BlogHeader = ({ title, to }) => {
  let { words, lang } = getWords();
  return (
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
                    <a href="/">{words["homepage"]}</a> / <em> {words[to]}</em>
                  </p>
                  <div className="row" dir={lang === "eng" ? "ltr" : "rtl"}>
                    <h2>{words[title]}</h2>
                    {admin() && (
                      <a href="/newBlog" className="mt-2 ml-3 mr-3 add-icon">
                        <i className="fa fa-plus " aria-hidden="true"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
