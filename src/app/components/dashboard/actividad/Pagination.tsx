import React, { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  totalActivity: number;
  activityPerPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};
const Pagination = ({
  totalActivity,
  activityPerPage,
  setCurrentPage,
}: PaginationProps) => {
  let pages = [];

  for (let int = 1; int <= Math.ceil(totalActivity / activityPerPage); int++) {
    pages.push(int);
  }
  return (
    <div className="pagination_container">
      {pages.map((page, index) => (
        <div key={index}>
          <button onClick={() => setCurrentPage(page)}>{page}</button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
