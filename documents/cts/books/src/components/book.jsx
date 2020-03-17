import React from "react";

const Book = props => {
  return (
    <div>
      <div className="row  mb-3 mt-5">
        <div className="col-md-6 pl-0">
          <div className="card">
            <img
              src="https://picsum.photos/75"
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">{props.book.title}</h3>
              <p className="card-text">Count : {props.book.pageCount}</p>

              <p className="card-text">
                Published Date : {props.book.publishedDate}{" "}
              </p>

              <p className="card-text">Author : {props.book.authors}</p>

              <a href="#" className="btn btn-primary">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

// import React from "react";

// const Book = props => {
//   return (
//     <div>
//       <div className="row  mb-3 mt-5">
//         <div className="col-md-4 pl-0 ">
//           <img src="https://picsum.photos/75" />
//           {/* {props.book.src} */}
//         </div>
//         <div className="col-md-8">
//           <h4>{props.book.title}</h4>Count: {props.book.pageCount}
//           Published Date: {props.book.publishedDate}
//           Author: {props.book.authors}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Book;
