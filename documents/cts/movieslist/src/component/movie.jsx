import React from "react";

const Movie = props => {
  return (
    <div>
      <div className="row  mb-3 mt-5">
        <div className="col-md-4 pl-0">
          {/* <img src="https://picsum.photos/75" /> */}
          {props.movie.src}
        </div>
        <div className="col-md-8">
          <h4>{props.book.title}</h4>About: {props.movie.desc}
        </div>
      </div>
    </div>
  );
};

export default Movie;
