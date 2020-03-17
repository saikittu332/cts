import React, { Component } from "react";
import SideNav from "./sidenav";
import Movies from "./movies";

class Func extends Component {
  state = {
    movies: [
      {
        id: 1,
        category: "action",

        // poster:
        //   "https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg",

        desc:
          "sfdffdsLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 2,
        category: "action",

        // poster:
        //   "https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg",

        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 3,
        category: "thriller",

        // poster:
        //   "https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg",

        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 4,
        category: "comedy",

        // poster:
        //   "https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg",

        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 5,
        category: "comedy",

        // poster:
        //   "https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg",

        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 6,
        category: "animation",

        // poster:
        //   "https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg",

        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 7,
        category: "thriller",

        // poster:
        //   "https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg",

        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 8,
        category: "thriller",

        // poster:
        //   "https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg",

        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        id: 9,
        category: "action",

        // poster:
        //   "https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg",

        desc:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
    ],

    newmov: [],

    genres: [
      { id: 1, name: "action" },
      { id: 2, name: "thriller" },
      { id: 3, name: "animation" },
      { id: 4, name: "comedy" }
    ]
  };

  display1 = movie1 => {
    // const movies = this.state.movies;
    const done = this.state.movies.filter(final => name == final.category);
    this.setState((this.state.movies = newmov));
  };

  render() {
    // const genres = this.state.movies;

    return (
      <div>
        {this.state.movies.map(movie => (
          <Movies movie={movie} />
        ))}
        <SideNav
          genres={this.state}
          selectedGenres={thi
            s.state.selectedGenre}
          handleSelectedGenre={this.handleSelectedGenre}
        />
        {/*           
          <SideNav
            display={this.display1}
            id={list.id}
            gene={this.state.genre}
            category={list.category}
            desc={list.desc}
          /> */}
      </div>
    );
  }
}

export default Func;
