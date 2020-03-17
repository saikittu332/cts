import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    total: 0,

    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 }
    ]
  };

  render() {
    return (
      <div>
        <NavBar />
        <Counters
          counters={this.state.counters}
          handleIncr={this.incr}
          handleDecr={this.decr}
        />
      </div>
    );
  }
}
export default App;
