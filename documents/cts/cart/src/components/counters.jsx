import React, { Component } from "react";
import Counter from "./counter";


class Counters extends Component{
incr = id => {
  // console.log("inside incr ", id);

//   const counters = this.state.counters;

  counters.map(counter => {
    if (counter.id == id) counter.value += 1;
  });

  this.setState({ counters });
};

decr = id => {
  // console.log("inside decr", id);

//   const counters = this.state.counters;

  counters.map(counter => {
    if (counter.id == id && counter.value > 0) {
      counter.value -= 1;
    }
  });
  this.setState({ counters });
};

    render{

        return (
            <div>

     
            </div>
        );
    }
}

export default Counters;
