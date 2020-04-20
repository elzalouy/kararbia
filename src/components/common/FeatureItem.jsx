/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords";
import { admin } from "../../httpServices/auth/auth";

const FeatureItem = ({
  handleEdit,
  currentEditKey,
  handleGetRedisItem,
  handleChange,
  keyItem,
  handleSubmit,
  handleCancel,
  icon,
}) => {
  const { lang } = getWords();
  return (
    <div
      className={
        lang === "eng"
          ? "service-item wow fadeIn"
          : "service-item wow fadeIn text-right"
      }
      dir={lang === "eng" ? "ltr" : "rtl"}
      data-wow-duration="0.75s"
    >
      <div className="custom-control-inline row d-flex flex-row">
        <div
          className={
            lang === "eng" ? "col text-left" : "col p-0 m-0 text-right mr-01"
          }
        >
          <i className={icon}></i>
        </div>
        {admin() && (
          <a
            className="fas fa-edit cursor-pointer pt-3"
            id={keyItem}
            onClick={handleEdit}
          ></a>
        )}
      </div>
      <div className="text-content">
        {admin() && currentEditKey === keyItem ? (
          <input
            type="text"
            name={
              lang === "eng" ? keyItem + " title" : keyItem + " title arabic"
            }
            value={
              lang === "eng"
                ? handleGetRedisItem(keyItem + " title")
                : handleGetRedisItem(keyItem + " title arabic")
            }
            onChange={handleChange}
            className="brd-0 p-3 my-1 mt-3 feature-input w-100"
          />
        ) : (
          <h6>
            {lang === "eng"
              ? handleGetRedisItem(keyItem + " title")
              : handleGetRedisItem(keyItem + " title arabic")}
          </h6>
        )}
        {admin() && currentEditKey === keyItem ? (
          <textarea
            name={
              lang === "eng"
                ? keyItem + " description"
                : keyItem + " description arabic"
            }
            value={
              lang === "eng"
                ? handleGetRedisItem(keyItem + " description")
                : handleGetRedisItem(keyItem + " description arabic")
            }
            onChange={handleChange}
            className=" brd-0 p-3 feature-input w-100"
          />
        ) : (
          <p>
            {lang === "eng"
              ? handleGetRedisItem(keyItem + " description")
              : handleGetRedisItem(keyItem + " description arabic")}
          </p>
        )}
        {admin() && currentEditKey === keyItem && (
          <div className="w-100 align-items-end">
            <button className="btn add-icon pt-0 m-1" onClick={handleSubmit}>
              <span className="fa fa-check" aria-hidden="true"></span>
            </button>
            <button
              className="btn add-icon bg-danger pt-0 m-1"
              onClick={handleCancel}
            >
              <span className="fa fa-times" aria-hidden="true"></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureItem;
