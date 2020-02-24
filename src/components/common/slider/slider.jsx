import React, { Component } from "react";
import "./slider.css";
class Slider extends Component {
  render() {
    const { min, max, value, handleChange, name } = this.props;
    return (
      <React.Fragment>
        <input
          type="range"
          min={min}
          max={max}
          name={name}
          value={value}
          onChange={handleChange}
          className="slider"
          id="myRange"
        />
        <div className="range_vals flex">
          <span className="min">${value > 0 ? value : min}</span>
          <span className="max">${max}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default Slider;
