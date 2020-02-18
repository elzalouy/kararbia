import React from "react";
import reviewsImg from "../../images/backgrounds/reviews.jpg";
import OwlCarouselElement from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Feedbacks = () => {
  let feedbacks = [
    {
      customer: "Donald broaks",
      itemsSelled: "Ferrari 488 GTB Owner",
      feedback: `Donec facilisis velit eust. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequsem
      velde metus imperdiet lacinia.  Nam rutrum congue diam. Vestibulum acda risus eros auctor egestas. Morbids sem magna, viverra quis sollicitudin quis consectetuer quis nec magna.`
    },
    {
      customer: "Donald broaks",
      itemsSelled: "Ferrari 488 GTB Owner",
      feedback: `Donec facilisis velit eust. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequsem
      velde metus imperdiet lacinia.  Nam rutrum congue diam. Vestibulum acda risus eros auctor egestas. Morbids sem magna, viverra quis sollicitudin quis consectetuer quis nec magna.`
    },
    {
      customer: "Donald broaks",
      itemsSelled: "Ferrari 488 GTB Owner",
      feedback: `Donec facilisis velit eust. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequsem
      velde metus imperdiet lacinia.  Nam rutrum congue diam. Vestibulum acda risus eros auctor egestas. Morbids sem magna, viverra quis sollicitudin quis consectetuer quis nec magna.`
    },
    {
      customer: "Donald broaks",
      itemsSelled: "Ferrari 488 GTB Owner",
      feedback: `Donec facilisis velit eust. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequsem
      velde metus imperdiet lacinia.  Nam rutrum congue diam. Vestibulum acda risus eros auctor egestas. Morbids sem magna, viverra quis sollicitudin quis consectetuer quis nec magna.`
    },
    {
      customer: "Donald broaks ",
      itemsSelled: "Ferrari 488 GTB Owner",
      feedback: `Donec facilisis velit eust. Phasellus cons quat. Aenean vitae quam. Vivamus et nunc. Nunc consequsem
      velde metus imperdiet lacinia.  Nam rutrum congue diam. Vestibulum acda risus eros auctor egestas. Morbids sem magna, viverra quis sollicitudin quis consectetuer quis nec magna.`
    }
  ];
  return (
    <React.Fragment>
      {feedbacks.length && (
        <section className="b-review">
          <div className="container">
            <div
              className="col-sm-10 col-sm-offset-1 text-center col-xs-12"
              data-aos="zoom-in-up"
            >
              <OwlCarouselElement
                className="owl-theme"
                data-aos="fade-in-up"
                loop={true}
                autoplay={true}
                autoplayTimeout={3000}
                autoplaySpeed={600}
                nav={false}
                dots={false}
                navContainerClass="owl-buttons m-0"
                navClass={["owl-prev j-tab btn", "btn owl-next j-tab"]}
                items={1}
              >
                {feedbacks.map(item => (
                  <div className="b-review__main">
                    <div className="b-review__main-person">
                      <div className="b-review__main-person-inside"></div>
                    </div>
                    <h5>
                      <span>{item.customer}</span>, Customer, {item.itemsSelled}
                      <em>"</em>
                    </h5>
                    <p>{item.feedback}</p>
                  </div>
                ))}
              </OwlCarouselElement>
            </div>
          </div>
          <img
            src={reviewsImg}
            alt=""
            className="img-responsive center-block"
          />
        </section>
      )}
    </React.Fragment>
  );
};

export default Feedbacks;
