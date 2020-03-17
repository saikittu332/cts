import React, { Component } from "react";
import Pages from "./pagination";

class Movies extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="my-3 p-3" style={{ border: "solid" }}>
          <div className="row mt-3">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/originals/ac/2f/58/ac2f58d9275e2399279c1fda4220178c.jpg"
                width="100%"
                height="100%"
              ></img>
            </div>
            <div className="col-md-8 mt-3">{this.props.desc}</div>
          </div>
        </div>

        <Pages className="" style={{ margin: "10px" }} />
      </div>
    );
  }
}

export default Movies;
