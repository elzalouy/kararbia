import React from "react";
import getWords from "../../utils/GetWords";
import cmeraImg from "../../images/camera.svg";

const EditCarouselImage = ({
  item,
  state,
  upload,
  handleChange,
  handleSaveItem,
  handleChangeImage,
  handleAddNewImage,
  handleCancel,
  loading,
}) => {
  let { lang } = getWords();
  return (
    <div
      className="modal fade bd-example-modal-lg editcarousel mt-5 pt-5"
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
                ? "row p-0 m-0 container rounded justify-content-center pb-5 bg-white"
                : "row p-0 m-0 container rounded justify-content-center pb-5 text-right bg-white"
            }
            dir={lang === "eng" ? "ltr" : "rtl"}
          >
            <div className="text-center w-100 add-icon-overflow">
              <i className="fa fa-car add-icon pt-2" aria-hidden="true"></i>
            </div>
            <div className="col-lg-5 text-center mt-5">
              <div className="position-relative">
                {item && item.image && item.image.url && !state.new ? (
                  <React.Fragment>
                    <img
                      src={item && item.image && item.image.url}
                      className="car_image"
                      alt=""
                    />
                    <button
                      className="btn image-delete"
                      onClick={handleChangeImage}
                    >
                      x
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {!state.image && !state.preview && state.new ? (
                      <React.Fragment>
                        <img
                          src={cmeraImg}
                          className="pt-0"
                          style={{ width: "100%", height: "120px" }}
                          alt=""
                        />
                        <input
                          id="profile_photo"
                          onChange={handleAddNewImage}
                          type="file"
                          ref={(ref) => (upload = ref)}
                          style={{ display: "none" }}
                        />
                        <button
                          className="btn pt-0 add-icon"
                          onClick={(e) => upload.click()}
                        >
                          <i className="fa fa-plus " aria-hidden="true"></i>
                        </button>
                      </React.Fragment>
                    ) : (
                      <div className="position-relative">
                        <img
                          src={state.preview && state.preview}
                          className="car_image"
                          alt=""
                        />
                        <button
                          className="btn image-delete"
                          onClick={handleChangeImage}
                        >
                          x
                        </button>
                      </div>
                    )}
                  </React.Fragment>
                )}
              </div>
            </div>
            <div className="col-lg-6 mt-5">
              <input
                type="text"
                placeholder="Title Here"
                name="title"
                onChange={handleChange}
                value={item && item.title && item.title}
                className="form-control brd-0 my-2"
              />
              <input
                type="text"
                placeholder="Link to your car here"
                name="link"
                onChange={handleChange}
                value={item && item.link && item.link}
                className="form-control brd-0 my-2"
              />
              <button
                className={
                  loading
                    ? "btn btn-success mx-1 loading"
                    : "btn btn-success mx-1"
                }
                disabled={loading ? true : false}
                onClick={handleSaveItem}
                type="button"
              >
                Save
              </button>
              <button
                className="btn btn-warning mx-1"
                type="button"
                data-dismiss="modal"
                onClick={handleCancel}
                disabled={loading ? true : false}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCarouselImage;
