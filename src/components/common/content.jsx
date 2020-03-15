/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords";
import handle from "../../middleware/errorHandle";
const Content = handle(
  ({ itemValues, itemKey, handleChange, handleSubmit }) => {
    const { words, lang } = getWords();
    let error = "";
    return (
      <section
        className={
          lang === "eng"
            ? "modal fade mt-5 pt-5"
            : "modal fade mt-5 pt-5 text-right"
        }
        id="changecontent"
        dir={lang === "eng" ? "ltr" : "rtl"}
        style={{ transition: "all 0.9s" }}
      >
        <div className="modal-dialog">
          <div className="modal-content border-0 brd-0">
            <div
              className="modal-header border-0"
              dir={lang === "eng" ? "ltr" : "rtl"}
            >
              <h3 className="modal-title text-orange">
                {words["change content"]}
              </h3>
            </div>
            <div className="modal-body border-0">
              <React.Fragment>
                <input
                  type="text"
                  name="short_english"
                  value={itemValues["short_english"]}
                  onChange={handleChange}
                  className="form-control brd-0 mb-2"
                  placeholder="Short English Title"
                />
                <input
                  type="text"
                  name="short_arabic"
                  value={itemValues["short_arabic"]}
                  onChange={handleChange}
                  className="form-control brd-0 mb-2"
                  placeholder="Short English Title"
                />
                <textarea
                  name="long_english"
                  value={itemValues["long_english"]}
                  onChange={handleChange}
                  cols="3"
                  rows="3"
                  className="form-control brd-0 mb-2"
                  placeholder="write your english description"
                />
                <textarea
                  name="long_arabic"
                  value={itemValues["long_arabic"]}
                  onChange={handleChange}
                  cols="3"
                  rows="3"
                  className="form-control brd-0 mb-2"
                  placeholder="write your english description"
                />
                {error && (
                  <p className="text-warning">
                    <i
                      class="fa fa-question-circle pr-2"
                      aria-hidden="true"
                    ></i>
                    {error}
                  </p>
                )}
              </React.Fragment>
            </div>
            <div className="modal-footer row justify-content-center border-0">
              <button className="btn save" onClick={handleSubmit}>
                <i
                  className="fa fa-check-circle p-0 m-0"
                  aria-hidden="true"
                ></i>
              </button>
              <button
                type="button"
                className="btn p-0 m-0 close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Content;
