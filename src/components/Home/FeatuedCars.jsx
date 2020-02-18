import React, { Component } from "react";
import FeaturedCarsList from "./FeaturedCarsList";
class FeaturedCars extends Component {
  state = {
    items: [
      {
        year: "2015",
        style: "Premium",
        price: "$44,380",
        name: "Nissan Maxima SV Premium 2016",
        Kilometres: "35000",
        status: "used",
        ExteriorColor: "Orange",
        Fuel_Type: "Gasoline Fue"
      },
      {
        year: "2016",
        style: "Premium",
        price: "$44,380",
        name: "Nissan Maxima SV Premium 2016",
        Kilometres: "35000",
        status: "used",
        ExteriorColor: "Orange",
        Fuel_Type: "Gasoline Fue"
      },
      {
        year: "2017",
        style: "Premium",
        price: "$44,380",
        name: "Nissan Maxima SV Premium 2016",
        Kilometres: "35000",
        status: "used",
        ExteriorColor: "Orange",
        Fuel_Type: "Gasoline Fue"
      },
      {
        year: "2018",
        style: "Premium",
        price: "$44,000",
        name: "Nissan Maxima SV Premium 2016",
        Kilometres: "35000",
        status: "used",
        transimision: "Manual",
        ExteriorColor: "Orange",
        Fuel_Type: "Gasoline Fue"
      },
      {
        year: "2019",
        transimision: "Manual",

        style: "Premium",
        price: "$15,500",
        name: "Nissan Maxima SV Premium 2016",
        Kilometres: "35000",
        status: "used",
        ExteriorColor: "Orange",
        Fuel_Type: "Gasoline Fue"
      },
      {
        year: "2020",
        transimision: "Manual",

        style: "Premium",
        price: "$44,380",
        name: "Nissan Maxima SV Premium 2016",
        Kilometres: "35000",
        status: "used",
        ExteriorColor: "Orange",
        Fuel_Type: "Gasoline Fue"
      },
      {
        transimision: "Manual",
        year: "2010",

        style: "Premium",
        price: "$44,380",
        name: "Nissan Maxima SV Premium 2016",
        Kilometres: "35000",
        status: "used",
        ExteriorColor: "Orange",
        Fuel_Type: "Gasoline Fue"
      }
    ]
  };
  render() {
    const { items } = this.state;
    return (
      <section className="b-featured">
        <div className="container">
          <h2 className="s-title " data-aos="zoom-in-up">
            Featured Vehicles
          </h2>
          <FeaturedCarsList items={items} />
        </div>
      </section>
    );
  }
}

export default FeaturedCars;
