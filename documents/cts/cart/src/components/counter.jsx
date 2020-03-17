import React, { Component } from "react";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary"
          onClick={() => this.props.handleIncr(id)}
        >
          Increment
        </button>
        <span>0</span>
        <button
          className="btn btn-warning"
          onClick={() => this.props.handleDecr(id)}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counters;
