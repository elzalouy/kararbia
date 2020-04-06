import React, { Component } from "react";
import getWords from "../../utils/GetWords";

class ChangeSocailMedia extends Component {
  state = {};
  render() {
    const { lang, words } = getWords();
    return (
      <section
        className={
          lang === "eng"
            ? "modal fade mt-5 pt-5"
            : "modal fade mt-5 pt-5 text-right"
        }
        id="changeSocialMedia"
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
                  name=""
                  className="form-control brd-0 mb-2"
                  placeholder="Facebook Link"
                />
                <input
                  type="text"
                  name=""
                  className="form-control brd-0 mb-2"
                  placeholder="Twitter Link"
                />
                <input
                  type="text"
                  name=""
                  className="form-control brd-0 mb-2"
                  placeholder="Linked In Link"
                />
              </React.Fragment>
            </div>
            <div className="modal-footer row justify-content-center border-0">
              <button className="btn save">
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
}

export default ChangeSocailMedia;
