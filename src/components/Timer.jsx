import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRotate } from "@fortawesome/free-solid-svg-icons";

export default class Timer extends Component {
  render() {
    return (
      <>
        <div className="bcg circle">
          <div className="outer animated circle"></div>
          <div className="inner animated "></div>
          <div className="indicator"></div>
          <button id="time-left">05:24</button>
        </div>
        <div className="btns">
          <button className="play">
            {this.props.pause ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
          <button className="reset">
            <FontAwesomeIcon icon={faRotate} />
          </button>
        </div>
      </>
    );
  }
}
