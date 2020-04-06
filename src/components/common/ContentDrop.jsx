/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./common.css";
import getWords from "../../utils/GetWords";
const ContentDrop = ({ itemKey, handleEdit }) => {
  let { lang } = getWords();
  return (
    <div
      className={
        lang === "eng" ? "col p-0 m-0 text-right" : "col p-0 m-0 text-left"
      }
    >
      <span
        className={
          itemKey === "footer about us"
            ? "fa fa-ellipsis-h ellipsis f-18 cursor-pointer text-white"
            : "fa fa-ellipsis-h ellipsis f-18 cursor-pointer"
        }
        aria-hidden="true"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      ></span>
      <div
        className="dropdown-menu content-edit"
        aria-labelledby="dropdownMenuButton"
      >
        <a
          className="dropdown-item"
          type="button"
          data-toggle="modal"
          data-target="#changecontent"
          aria-hidden="false"
        >
          Change Content
        </a>
      </div>
    </div>
  );
};

export default ContentDrop;
