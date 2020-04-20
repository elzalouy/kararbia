import React from "react";

const ContactItem = ({ item }) => {
  return (
    <React.Fragment>
      <section
        className="modal fade mt-5 pt-5"
        id="ContactItem"
        style={{ opacity: 1, zIndex: 9999, transition: "all 0.9s" }}
      >
        <div className="modal-dialog">
          <div className="modal-content border-0 brd-0">
            <div className="text-center w-100 add-icon-overflow">
              <button className="btn add-icon pt-0">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </button>
            </div>
            <div className="modal-header border-0"></div>
            <div className="modal-body border-0">
              <div className="row align-items-start justify-content-start">
                <div className="col-4 py-2 ">
                  <h5 className="bold">Name</h5>
                </div>
                <div className="col-6 py-2 text-left">{item.name}</div>
                <div className="col-4 py-2">
                  <h5 className="bold">Email</h5>
                </div>
                <div className="col-6 py-2 text-left">{item.email}</div>
                <div className="col-4 py-2">
                  <h5 className="bold">Subject</h5>
                </div>
                <div className="col-6 py-2 text-left">{item.subject}</div>
                <div className="col-4 py-2">
                  <h5 className="bold">Message</h5>
                </div>
                <div className="col-6 py-2 text-left">{item.message}</div>
                <div className="col-12 text-center pt-3">
                  <button
                    className="btn add-icon bg-danger pt-0"
                    data-dismiss="modal"
                  >
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactItem;
