import React, { Component } from "react";

class MovieDetails extends Component {
  state = {};

  handleBack = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1 className="text-center">Movie Details</h1>
        <h1>Movie Id: #{this.props.match.params.id}</h1>

        {/* from components in google extension */}
        <h2 className="text-center">{this.props.location.state.movie.title}</h2>

        <p className="text-center">{this.props.location.state.movie.desc}</p>

        <button className="btn btn-secondary" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  }
}

export default MovieDetails;
