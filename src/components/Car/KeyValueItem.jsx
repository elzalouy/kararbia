import React from "react";

const KeyValueItem = ({ items, currentItem }) => {
  return (
    <React.Fragment>
      {items &&
        items.length > 0 &&
        items.map(item => (
          <div
            key={item.title}
            className="col-xl-5 shadow brd-2 my-3 mx-2 p-3"
            dir="ltr"
          >
            <div className="row jsutify-content-center align-items-center mb-3">
              <div className="col-2"></div>
              <div className="section-title col-8 p-0">{item.title}</div>
            </div>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                {item.items &&
                  item.items.map(feature => (
                    <div
                      key={feature.key}
                      className="col-12 p-0 m-0 mt-4  border-bottom key-value pl-0 custom-control-inline"
                    >
                      <div className="key p-2 text-left">
                        <p className="text-white f-18 p-0 m-0 px-2">
                          {feature.key}
                        </p>
                      </div>
                      <div className="value pt-2">
                        <p className="p-0 m-0 f-18">{feature.value}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      {currentItem && currentItem.title.length > 0 && (
        <div
          key={currentItem.title}
          className="col-xl-5 shadow brd-2 my-3 mx-2 p-3"
          dir="ltr"
        >
          <div className="row jsutify-content-center align-items-center mb-3">
            <div className="col-2"></div>
            <div className="section-title col-8 p-0">{currentItem.title}</div>
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {currentItem.items &&
                currentItem.items.map(item => (
                  <div
                    key={item.key}
                    className="col-12 p-0 m-0 mt-4  border-bottom key-value pl-0 custom-control-inline"
                  >
                    <div className="key p-2 text-left">
                      <p className="text-white f-18 p-0 m-0 px-2">{item.key}</p>
                    </div>
                    <div className="value pt-2">
                      <p className="p-0 m-0 f-18">{item.value}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default KeyValueItem;
