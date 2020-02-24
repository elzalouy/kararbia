import React from "react";

const Search = () => {
  return (
    <div id="search">
      <button type="button" className="close">
        ×
      </button>
      <form>
        <input type="search" placeholder="type keyword(s) here" />
        <button type="submit" className="primary-button">
          Search <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
