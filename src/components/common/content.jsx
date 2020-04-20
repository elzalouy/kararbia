/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords";
const Content = ({ items, handleEditItems, handleChange, handleSubmit }) => {
  const { words, lang } = getWords();
  if (!items || items.length === 0) return null;
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
          <div className="text-center w-100 add-icon-overflow">
            <button className="btn add-icon pt-0">
              <i className="fa fa-car" aria-hidden="true"></i>
            </button>
          </div>
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
              {items &&
                items.length > 0 &&
                items.map((item) => {
                  if (item.inputType === "input")
                    return (
                      <input
                        type="text"
                        key={item.key}
                        name={item.key}
                        id={item.key}
                        value={item.value}
                        onChange={handleChange}
                        className="form-control brd-0 mb-2"
                        placeholder={item.placeholder}
                      />
                    );
                  if (item.inputType === "textarea")
                    return (
                      <textarea
                        key={item.key}
                        name={item.key}
                        id={item.key}
                        cols="3"
                        rows="3"
                        className="form-control brd-0 mb-2"
                        placeholder={item.placeholder}
                      ></textarea>
                    );
                  else return null;
                })}
              {error && (
                <p className="text-warning">
                  <i class="fa fa-question-circle pr-2" aria-hidden="true"></i>
                  {error}
                </p>
              )}
            </React.Fragment>
          </div>
          <div className="modal-footer row justify-content-center border-0">
            <button className="btn save" onClick={handleSubmit}>
              <i className="fa fa-check-circle p-0 m-0" aria-hidden="true"></i>
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
};

export default Content;
