/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <div className="page-numbers">
      <div className="pagination-content">
        <ul>
          {pages.map(page => (
            <li
              key={page}
              className={
                page === currentPage ? "active mb-2 ml-1" : "mb-2 ml-1"
              }
            >
              <a onClick={() => onPageChange(page)}>{page}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
