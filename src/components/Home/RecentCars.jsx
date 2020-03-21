/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import getWords from "../../utils/GetWords.js";
import { admin } from "../../httpServices/auth/auth.js";

const RecentCars = ({ cars, handleDeleteCar }) => {
  let { words } = getWords();
  return (
    <section>
      <div className="recent-cars">
        <div className="container">
          <div className="recent-car-content">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <div className="icon">
                    <i className="fa fa-car"></i>
                  </div>
                  <div className="text-content">
                    <h2>{words["some of our cars"]}</h2>
                    <span>{words["Check our recent cars"]}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {cars && cars.length > 0 ? (
                cars.map(item => (
                  <div
                    className="col-md-4 col-sm-6 d-flex align-items-stretch"
                    key={item._id}
                  >
                    <div className="car-item">
                      <div className="thumb-content">
                        <div className="car-banner">
                          <a href={`/car/${item._id}`}>{item.status}</a>
                        </div>
                        <div className="thumb-inner">
                          <a href={`/car/${item._id}`}>
                            <img src={item.images[0].url} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="down-content">
                        <a href={`/car/${item._id}`}>
                          <h4>
                            {item.name} - {item.model}
                          </h4>
                        </a>
                        {admin() && (
                          <div className="text-right mt-02">
                            <span
                              className="fa fa-ellipsis-h ellipsis f-18 cursor-pointer "
                              aria-hidden="true"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></span>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <a
                                className="dropdown-item cursor-pointer"
                                href={`/editcar/${item._id}`}
                              >
                                {words["edit"]}
                              </a>
                              <a
                                className="dropdown-item cursor-pointer"
                                onClick={handleDeleteCar}
                                id={item._id}
                              >
                                {words["delete"]}
                              </a>
                            </div>
                          </div>
                        )}
                        <span>${item.price}</span>
                        <p>{item.short_desc}</p>
                        <ul className="car-info">
                          <li>
                            <div className="item">
                              <i className="flaticon flaticon-calendar"></i>
                              <p>{item.body_type}</p>
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <i className="flaticon flaticon-speed"></i>
                              <p>{item.speed}</p>
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <i className="flaticon flaticon-road"></i>
                              <p>{item.kilometers}</p>
                            </div>
                          </li>
                          <li>
                            <div className="item">
                              <i className="flaticon flaticon-fuel"></i>
                              <p>{item.fuel_type}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <React.Fragment>
                  <div className="col text-center">
                    <i className="fa fa-car gray icon-no-car"></i>
                    <h4 className="mt-4 gray">No items now</h4>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentCars;
