import React from "react";
import getWords from "../../utils/GetWords.js";
const News = () => {
  let { words } = getWords();
  return (
    <section>
      <div className="latest-news">
        <div className="container">
          <div className="latest-news-content">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <div className="icon">
                    <i className="fa fa-file"></i>
                  </div>
                  <div className="text-content">
                    <h2>{words["eng"]}</h2>
                    <span>{words["here are our latest posts"]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="item wow fadeIn" data-wow-duration="0.75s">
                <div className="thumb-content">
                  <div className="date-post">
                    <a href="single-post.html">14 January</a>
                  </div>
                  <div className="thumb-inner">
                    <a href="single-post.html">
                      <img src="http://placehold.it/370x260" alt="" />
                    </a>
                  </div>
                </div>
                <div className="down-content">
                  <a href="single_car.html">
                    <h4>Pabst Gastropub Synth Edge</h4>
                  </a>
                  <span>
                    Posted by: <em>Admin</em>
                  </span>
                  <p>
                    Next level Pinterest farm-to-table selvage gentrify street
                    raw denim helvetica street art pork.
                  </p>
                  <div className="text-button">
                    <a href="single-post.html">
                      Continue Reading <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item wow fadeIn" data-wow-duration="0.75s">
                <div className="thumb-content">
                  <div className="date-post">
                    <a href="single-post.html">12 January</a>
                  </div>
                  <div className="thumb-inner">
                    <a href="single-post.html">
                      <img src="http://placehold.it/370x260" alt="" />
                    </a>
                  </div>
                </div>
                <div className="down-content">
                  <a href="single_car.html">
                    <h4>Hammock Echo Park Braid</h4>
                  </a>
                  <span>
                    Posted by: <em>Admin</em>
                  </span>
                  <p>
                    Next level Pinterest farm-to-table selvage gentrify street
                    raw denim helvetica street art pork.
                  </p>
                  <div className="text-button">
                    <a href="single-post.html">
                      Continue Reading <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="item wow fadeIn" data-wow-duration="0.75s">
                <div className="thumb-content">
                  <div className="date-post">
                    <a href="single-post.html">9 January</a>
                  </div>
                  <div className="thumb-inner">
                    <a href="single-post.html">
                      <img src="http://placehold.it/370x260" alt="" />
                    </a>
                  </div>
                </div>
                <div className="down-content">
                  <a href="single_car.html">
                    <h4>Waistcoat Wayfarers Selfies</h4>
                  </a>
                  <span>
                    Posted by: <em>Admin</em>
                  </span>
                  <p>
                    Next level Pinterest farm-to-table selvage gentrify street
                    raw denim helvetica street art pork.
                  </p>
                  <div className="text-button">
                    <a href="single-post.html">
                      Continue Reading <i className="fa fa-arrow-right"></i>
                    </a>
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

export default News;
