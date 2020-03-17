import React from "react";
import _ from "lodash";

const Pagination = props => {
  const noOfPages = Math.ceil(props.totalData / props.pageSize);

  const pages = _.range(1, noOfPages + 1);

  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination pagination-lg justify-content-center">
          {pages.map(page => (
            <li
              className={
                props.selectedPage === page ? "page-item active" : "page-item"
              }
              onClick={() => props.handlePageSelect(page)}
              aria-current="page"
            >
              <span className="page-link">
                {page}
                <span className="sr-only">(current)</span>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
