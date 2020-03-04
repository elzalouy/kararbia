import React from "react";
import getWords from "../../utils/GetWords.js";

const RecentCars = () => {
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
                    <h2>{words["recent cars"]}</h2>
                    <span>{words["Check our recent cars"]}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="car-item wow fadeIn" data-wow-duration="0.75s">
                  <div className="thumb-content">
                    <div className="car-banner">
                      <a href="/car">For Rent</a>
                    </div>
                    <div className="thumb-inner">
                      <a href="/car">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="down-content">
                    <a href="/cars">
                      <h4>Perfect Sport Car</h4>
                    </a>
                    <span>$1.200</span>
                    <p>
                      Leggings edison bulb hexagon, hashtag coloring book
                      ethical echo park austin fam succulents.
                    </p>
                    <ul className="car-info">
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-calendar"></i>
                          <p>2018</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-speed"></i>
                          <p>160p/h</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-road"></i>
                          <p>26.00km</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-fuel"></i>
                          <p>Petrol</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="car-item wow fadeIn" data-wow-duration="0.75s">
                  <div className="thumb-content">
                    <div className="car-banner">
                      <a href="/car">For Sale</a>
                    </div>
                    <div className="thumb-inner">
                      <a href="/car">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="down-content">
                    <a href="/car">
                      <h4>Perfect Sport Car</h4>
                    </a>
                    <span>$49.950</span>
                    <p>
                      Leggings edison bulb hexagon, hashtag coloring book
                      ethical echo park austin fam succulents.
                    </p>
                    <ul className="car-info">
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-calendar"></i>
                          <p>2018</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-speed"></i>
                          <p>160p/h</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-road"></i>
                          <p>26.00km</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-fuel"></i>
                          <p>Petrol</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="car-item wow fadeIn" data-wow-duration="0.75s">
                  <div className="thumb-content">
                    <div className="car-banner">
                      <a href="/car">For Rent</a>
                    </div>
                    <div className="thumb-inner">
                      <a href="/car">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="down-content">
                    <a href="/car">
                      <h4>Perfect Sport Car</h4>
                    </a>
                    <span>$1.500</span>
                    <p>
                      Leggings edison bulb hexagon, hashtag coloring book
                      ethical echo park austin fam succulents.
                    </p>
                    <ul className="car-info">
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-calendar"></i>
                          <p>2018</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-speed"></i>
                          <p>160p/h</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-road"></i>
                          <p>26.00km</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-fuel"></i>
                          <p>Petrol</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="car-item wow fadeIn" data-wow-duration="0.75s">
                  <div className="thumb-content">
                    <div className="car-banner">
                      <a href="/car">For Rent</a>
                    </div>
                    <div className="thumb-inner">
                      <a href="/car">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="down-content">
                    <a href="/car">
                      <h4>Perfect Sport Car</h4>
                    </a>
                    <span>$1.550</span>
                    <p>
                      Leggings edison bulb hexagon, hashtag coloring book
                      ethical echo park austin fam succulents.
                    </p>
                    <ul className="car-info">
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-calendar"></i>
                          <p>2018</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-speed"></i>
                          <p>160p/h</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-road"></i>
                          <p>26.00km</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-fuel"></i>
                          <p>Petrol</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="car-item wow fadeIn" data-wow-duration="0.75s">
                  <div className="thumb-content">
                    <div className="car-banner">
                      <a href="/car">For Sale</a>
                    </div>
                    <div className="thumb-inner">
                      <a href="/car">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="down-content">
                    <a href="/car">
                      <h4>Perfect Sport Car</h4>
                    </a>
                    <span>$30.000</span>
                    <p>
                      Leggings edison bulb hexagon, hashtag coloring book
                      ethical echo park austin fam succulents.
                    </p>
                    <ul className="car-info">
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-calendar"></i>
                          <p>2018</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-speed"></i>
                          <p>160p/h</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-road"></i>
                          <p>26.00km</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-fuel"></i>
                          <p>Petrol</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="car-item wow fadeIn" data-wow-duration="0.75s">
                  <div className="thumb-content">
                    <div className="car-banner">
                      <a href="/car">For Rent</a>
                    </div>
                    <div className="thumb-inner">
                      <a href="/car">
                        <img src="http://placehold.it/370x260" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="down-content">
                    <a href="/car">
                      <h4>Perfect Sport Car</h4>
                    </a>
                    <span>$1.500</span>
                    <p>
                      Leggings edison bulb hexagon, hashtag coloring book
                      ethical echo park austin fam succulents.
                    </p>
                    <ul className="car-info">
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-calendar"></i>
                          <p>2018</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-speed"></i>
                          <p>160p/h</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-road"></i>
                          <p>26.00km</p>
                        </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="flaticon flaticon-fuel"></i>
                          <p>Petrol</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentCars;
