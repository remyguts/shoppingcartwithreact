import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncremnt() {
    console.log("Increment Clicked", this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncremnt}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  //export default Counter;
}
