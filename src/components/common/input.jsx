import React from "react";

const Input = ({ type, word, value, name, changeValue }) => {
  return (
    <React.Fragment>
      <label className="p-0 mb-1">{word}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={changeValue}
        className="form-control brd-0 p-3"
        placeholder={word}
      />
    </React.Fragment>
  );
};

export default Input;
