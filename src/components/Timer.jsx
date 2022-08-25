import React, { Component } from "react";


export default class Timer extends Component {
  render() {
    return (
      <>
        <div className="bcg circle">
          <div className="outer circle"></div>
          <div className="inner "></div>
          <button id="time-left">{this.props.timeLeft}</button>
          <div className="indicator-path">
            <div className="indicator"></div>
          </div>
        </div>
      </>
    );
  }
}
