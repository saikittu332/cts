import React, { Component } from "react";

class SideNav extends Component {
  render() {
    return (
      <div>
        <div className="list-group mt-3">
          <h1 className="list-group-item list-group-item-action active">
            Genres
          </h1>

          <button className="list-group-item list-group-item-action">
            {this.props.genre.map(genre => (
              <li>{genre.name}</li>
            ))}
          </button>
        </div>
      </div>
    );
  }
}

export default SideNav;
