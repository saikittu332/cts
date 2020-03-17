import React, { Component } from "react";

class List extends Component {
  state = {
    movies: [
      {
        id: "5c15",
        title: "Terminator",
        genre: "Action",
        numberInStock: 6,
        dailyRentalRate: 2.5,
        img: "public/bike.jpg"
      },
      {
        id: "5a16",
        title: "Die Hard",
        genre: "Action",
        numberInStock: 5,
        dailyRentalRate: 4
      },
      {
        id: "5t17",
        title: "Get Out",
        genre: "Thriller",
        numberInStock: 8,
        dailyRentalRate: 3
      },
      {
        id: "6c18",
        title: "Trip to Italy",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        id: "5d19",
        title: "Airplane",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        id: "5a20",
        title: "Jumanji",
        genre: "Animation",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        id: "6b23",
        title: "Toy Story",
        genre: "Thriller",
        numberInStock: 7,
        dailyRentalRate: 4.5
      },
      {
        id: "6b22",
        title: "The Sixth Sense",
        genre: "Thriller",
        numberInStock: 4,
        dailyRentalRate: 3.5
      },
      {
        id: "5b21",
        title: "The Avengers",
        genre: "Action",
        numberInStock: 7,
        dailyRentalRate: 3.5
      }
    ]
  };

  render() {
    if (this.state.movies.length == 0) {
      return <p className="alert alert-danger">* couldn't find</p>;
    }

    return (
      <div>
        <h1 className="text-center my-2">
          Movies Available- {this.state.movies.length}
        </h1>
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>Id</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Numbers In Stock</th>
              <th>Daily Rental Rate</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map(movielist => (
              <tr className="text-center">
                <td>{movielist.id}</td>
                <td>{movielist.title}</td>
                <td>{movielist.genre}</td>
                <td>{movielist.numberInStock}</td>
                <td>{movielist.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.delete(movielist)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  delete = movielist => {
    const movies = this.state.movies.filter(movi => movielist.id !== movi.id);
    this.setState({ movies });
  };
}

export default List;
