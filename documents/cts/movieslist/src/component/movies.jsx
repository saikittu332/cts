import React, { Component } from "react";
import Movie from "./movie";
import List from "./movielist";
// import Pagination from "./pagination";
import _ from "lodash";
import { Link } from "react-router-dom";

import terminator from "../images/ac1.jpg";
// import dieHard from "../images/diehard.jpg";
// import getOut from "../images/getout.jpg";
// import tripToItaly from "../images/triptoitaly.jpg";
// import airplane from "../images/airplane.jpg";
// import jumanji from "../images/jumanji.jpg";
// import toyStory from "../images/toystory.jpg";
// import theSixthSense from "../images/thesixthsense.jpg";
// import avengers from "../images/avengers.jpg";

class Movies extends Component {
  state = {
    movies: [
      {
        _id: "5c15",
        src: terminator,
        title: "Terminator",
        genre: "Action",
        desc:
          "In Mexico City, a newly modified liquid Terminator -- the Rev-9 model -- arrives from the future to kill a young factory worker named Dani Ramos. Also sent back in time is Grace, a hybrid cyborg human who must protect Ramos from the seemingly indestructible robotic assassin."
      },
      {
        _id: "5a16",
        // src: dieHard,
        title: "Die Hard",
        genre: "Action",
        desc:
          "The film follows off-duty New York City Police Department officer John McClane (Bruce Willis) who is caught in a Los Angeles skyscraper on Christmas Eve during a heist led by criminal mastermind Hans Gruber (Alan Rickman). Made for $28 million, Die Hard grossed over $141 million theatrically worldwide."
      },
      {
        _id: "5t17",
        // src: getOut,
        title: "Get Out",
        genre: "Thriller",
        desc:
          "Chris, an African-American man, decides to visit his Caucasian girlfriend's parents during a weekend getaway. Although they seem normal at first, he is not prepared to experience the horrors ahead."
      },
      {
        _id: "6c18",
        // src: tripToItaly,
        title: "Trip to Italy",
        genre: "Comedy",
        desc:
          "During a tour of Italy, two friends (Steve Coogan, Rob Brydon) enjoy sumptuous meals and lively conversations about such eclectic topics as Batman's vocal range."
      },
      {
        _id: "5d19",
        // src: airplane,
        title: "Airplane",
        genre: "Comedy",
        desc:
          "A spoof of the airport disaster movies. When the crew of an airplane are struck by a virus, the fate of the passengers now depend on an ex-war pilot who is the only one able to land the plane safely.              "
      },
      {
        _id: "5a20",
        // src: jumanji,
        title: "Jumanji",
        genre: "Animation",
        desc:
          "When four students play with a magical video game, they are drawn to the jungle world of Jumanji, where they are trapped as their avatars. To return to the real world, they must finish the game."
      },
      {
        _id: "6b23",
        // src: toyStory,
        title: "Toy Story",
        genre: "Thriller",
        desc:
          "Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody's slight detour leads him to his long-lost friend Bo Peep. As Woody and Bo discuss the old days"
      },
      {
        _id: "6b22",
        // src: theSixthSense,
        title: "The Sixth Sense",
        genre: "Thriller",
        desc:
          "Malcolm Crowe, a child psychologist, starts treating a young boy who acts as a medium of communication between the former and a slew of unhappy spirits."
      },
      {
        _id: "5b21",
        // src: avengers,
        title: "The Avengers",
        genre: "Action",
        desc:
          "To celebrate and thank the fans who have invested so deeply in the MCU, the filmmakers and talent from Marvel Studios' Avengers: Endgame will visit nine U.S. cities in July and August to treat fans at each tour stop."
      }
    ],
    genres: [
      { id: 1, name: "All" },
      { id: 2, name: "Action" },
      { id: 3, name: "Thriller" },
      { id: 4, name: "Animation" },
      { id: 5, name: "Comedy" }
    ],
    selectedGenre: 1,
    pageSize: 2,
    selectedPage: 1
  };
  handleSelectedGenre = genre => {
    console.log(genre);
    this.setState({ selectedGenre: genre.id });
  };

  handlePageSelect = page => {
    this.setState({ selectedPage: page });
  };

  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  render() {
    const { genres } = this.state;
    const { selectedGenre } = this.state;
    // filtering movies based on genre
    const genre = genres.filter(genre => genre.id === selectedGenre);

    const filteredMovies = this.state.movies.filter(
      movie => movie.genre === genre[0].name
    );

    const paginatedMovies = this.paginate(
      filteredMovies,
      this.state.selectedPage,
      this.state.pageSize
    );

    return (
      <div>
        <div className="row">
          <div className="col-3">
            <List
              genres={genres}
              selectedGenre={this.state.selectedGenre}
              handleSelectedGenre={this.handleSelectedGenre}
            />
          </div>
          <div className="col-6">
            {paginatedMovies.map(movie => (
              <Link
                to={{ pathname: `/movies/${movie._id}`, state: { movie } }}
                style={{ textDecoration: "none" }}
              >
                <Movie movie={movie} />
              </Link>
            ))}
          </div>
        </div>
        {/* <Pagination
          pageSize={this.state.pageSize}
          totalMovies={filteredMovies.length}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
        /> */}
      </div>
    );
  }
}

export default Movies;
