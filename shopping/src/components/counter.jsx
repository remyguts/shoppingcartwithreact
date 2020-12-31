import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </React.Fragment>
      );
      
      formatCount() {
          const { count } = this.state;
      }
  }
}

export default Counter;
