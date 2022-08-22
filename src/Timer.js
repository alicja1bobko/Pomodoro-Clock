import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app centered container-fluid">
        <div className="board">
          <span className="main-title">Pomodoro timer</span>
          {/* <div className="time-circle ">
            <div id="timer">05:24</div>
            <span className="outer"></span>
            <span className="inner centered"></span>
          </div> */}
          <div className="wrapper centered">
            <div className="outer circle">
              <button id="timer">05:24</button>
              <span></span>
              <span></span>
            </div>
            <div className="btns">
              <button className="play">
                <FontAwesomeIcon icon={faPlay} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
