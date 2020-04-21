import React from "react";
import getWords from "../../utils/GetWords";

const DeleteCarouselItem = ({ handleDeleteItem, loading }) => {
  let { lang } = getWords();
  return (
    <div
      className="modal fade bd-example-modal-lg deleteitem mt-5 pt-5"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg mt-5">
        <div className="modal-content mt-5">
          <div
            className={
              lang === "eng"
                ? "row p-0 m-0 container rounded justify-content-center pb-2 bg-white"
                : "row p-0 m-0 container rounded justify-content-center pb-2 text-right bg-white"
            }
            dir={lang === "eng" ? "ltr" : "rtl"}
          >
            <div className="text-center w-100 add-icon-overflow">
              <i className="fa fa-car add-icon" aria-hidden="true"></i>
            </div>
            <div className="col text-center">
              <h5>
                Are you sure that you want to delete that <mark> item?</mark>
              </h5>
              <button
                className={
                  loading
                    ? "btn btn-warning mx-1 loading"
                    : "btn btn-warning mx-1"
                }
                disabled={loading ? true : false}
                onClick={handleDeleteItem}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-danger mx-1"
                data-dismiss="modal"
                disabled={loading ? true : false}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCarouselItem;
