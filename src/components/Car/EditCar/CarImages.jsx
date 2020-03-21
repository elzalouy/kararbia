import React from "react";
import cmeraImg from "../../../images/camera.svg";
const CarImages = ({
  state,
  handleDeleteImage,
  words,
  handleAddImages,
  upload,
  handleSaveCar,
  handleCancel,
  handleDeleteNewImage
}) => {
  return (
    <div className="row p-0 m-0 mt-5  rounded justify-content-center pb-3 bg-white">
      <div className="text-center w-100 add-icon-overflow  p-0">
        <i className="fa fa-camera add-icon" aria-hidden="true"></i>
      </div>
      <div className="row w-100 overflow_hidden justify-content-center">
        {state.imagesPreview.length > 0 || state.newImagesPreview.length > 0 ? (
          <div className="col-12 container p-5">
            <div className="row justify-content-center  align-item-center">
              {state.imagesPreview.map(item => {
                return (
                  <React.Fragment
                    key={
                      item._id ? item._id : state.imagesPreview.indexOf(item)
                    }
                  >
                    <div className="position-relative">
                      <img src={item.url} className="car_image " alt="" />
                      <button
                        className="btn image-delete"
                        id={state.imagesPreview.indexOf(item)}
                        onClick={handleDeleteImage}
                      >
                        x
                      </button>
                    </div>
                  </React.Fragment>
                );
              })}
              {state.newImagesPreview.map(item => (
                <React.Fragment key={state.newImagesPreview.indexOf(item)}>
                  <div className="position-relative">
                    <img src={item} className="car_image " alt="" />
                    <button
                      className="btn image-delete"
                      id={state.newImagesPreview.indexOf(item)}
                      onClick={handleDeleteNewImage}
                    >
                      x
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          <React.Fragment>
            <div className="col-4"></div>
            <div className="col-4 text-center">
              <img src={cmeraImg} alt="" className="w-50 h-50 mt-5" />
              <p>{words["no photos selected"]}</p>
            </div>
            <div className="col-4"></div>
          </React.Fragment>
        )}
        <div className="col-12 text-center">
          <input
            onChange={handleAddImages}
            type="file"
            multiple
            ref={ref => (upload = ref)}
            style={{ display: "none" }}
          />
          <i
            className="fa fa-plus cursor-pointer add-icon"
            aria-hidden="true"
            onClick={e => upload.click()}
          ></i>
        </div>
      </div>
      <div className="col-12">
        <div className="row justify-content-center aling-items-center">
          <div className="col-sm-8"></div>
          <div className="col-2 text-right">
            <button
              className="save bg-transparent border-0"
              onClick={handleSaveCar}
              disabled={state.disabled}
            >
              <i className="fa fa-check-circle p-0 m-0" aria-hidden="true"></i>
            </button>
          </div>
          <div className="col-2 text-left">
            <button
              className="close bg-warn pt-2"
              onClick={handleCancel}
              disabled={state.disabled}
            >
              <i className="fa fa-times m-0 p-0" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarImages;
