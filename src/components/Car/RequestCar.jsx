import React from "react";
import getWords from "../../utils/GetWords";
const RequestCar = ({ handleRequestCar, loading }) => {
  let { lang } = getWords();
  return (
    <div
      className="modal fade bd-example-modal-lg requestCar mt-5 pt-5"
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
            <div className=" text-center w-100 add-icon-overflow">
              <button className="btn pt-0 add-icon">
                <i className="fa fa-car " aria-hidden="true"></i>
              </button>
            </div>
            <div className="col text-center">
              <h5>
                Are you sure that you want to Request that <mark> Car?</mark>
              </h5>
              <h6>
                We will send your request to the administrators and they will
                either call you or send an email to you
              </h6>
              <button
                type="button"
                className="btn btn-danger mx-1"
                data-dismiss="modal"
              >
                cancel
              </button>
              <button
                className={
                  loading
                    ? "btn btn-warning mx-1 loading"
                    : "btn btn-warning mx-1"
                }
                disabled={loading ? true : false}
                onClick={handleRequestCar}
              >
                Request Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestCar;
