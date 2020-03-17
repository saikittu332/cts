import React, { Component } from "react";

class BookDetails extends Component {
  state = {};

  handleBack = () => {
    this.props.history.push("/books");
  };
  render() {
    return (
      <div className="col-md-4 m-auto">
        <h1 className="text-center">Book Details</h1>

        <h2 className="text-center" style={{ color: "blue" }}>
          Book Name: {this.props.location.state.book.title}
        </h2>
        <p className="mt-3 text-center" style={{ color: "grey" }}>
          (Book Id: #{this.props.match.params.id})
        </p>

        <p className="text-center" style={{ color: "red" }}>
          Count: {this.props.location.state.book.pageCount}
        </p>

        <p className="text-center" style={{ color: "Tomato" }}>
          Published Date: {this.props.location.state.book.publishedDate}
        </p>

        <p className="text-center" style={{ color: "violet" }}>
          Author: {this.props.location.state.book.authors}
        </p>

        <button className="btn btn-secondary m-auto" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  }
}

export default BookDetails;
