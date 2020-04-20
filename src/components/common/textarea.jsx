import React from "react";
const TextArea = ({ word, value, name, changeValue, Class, ...props }) => {
  return (
    <React.Fragment>
      <label className="p-0 mb-1">{word}</label>
      <textarea
        {...props}
        rows="3"
        cols="3"
        name={name}
        value={value}
        onChange={changeValue}
        className={"form-control brd-0 p-3" + Class}
        placeholder={word}
      />
    </React.Fragment>
  );
};

export default TextArea;
