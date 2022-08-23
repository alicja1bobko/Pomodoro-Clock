import React, { Component } from "react";


export default class Timer extends Component {
  render() {
    return (
      <>
        <div className="bcg circle">
          <div className="outer animated circle"></div>
          <div className="inner animated "></div>
          <div className="indicator"></div>
          <button id="time-left">{this.props.timeLeft}</button>
        </div>
      </>
    );
  }
}
