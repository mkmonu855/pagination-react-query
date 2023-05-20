/** @format */

import React from "react";
import { ITEM_PER_PAGE } from "../utils/constants";

const Pagination = ({
  currentPage,
  totalItems,
  onPageChange,
  isPreviousData,
}) => {
  const pageCount = Math.ceil(totalItems / ITEM_PER_PAGE);

  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <>
      <div className='btn-group'>
        <button
          disabled={currentPage === 1 || isPreviousData}
          className='btn'
          onClick={handlePrevClick}>
          «
        </button>
        <button className='btn'>{currentPage}</button>
        <button
          disabled={currentPage === pageCount || isPreviousData}
          className='btn'
          onClick={handleNextClick}>
          »
        </button>
      </div>
    </>
  );
};

export default Pagination;
