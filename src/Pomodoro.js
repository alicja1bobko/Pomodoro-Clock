import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRotate } from "@fortawesome/free-solid-svg-icons";
import TimerLength from "./components/TimerLength";

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: false,
    };
  }
  render() {
    return (
      <div className="app centered container-fluid">
        <div className="board">
          <span className="main-title">Pomodoro timer</span>
          <div className="wrapper centered">
            <TimerLength
              titleID="session-label"
              title="Focuse time"
              minID="session-decrement"
              maxID="session-increment"
              length="25"
              lengthID="session-length"
            />
            <TimerLength
              titleID="break-label"
              title="Break"
              minID="break-decrement"
              maxID="break-increment"
              length="5"
              lengthID="break-length"
            />

            <div className="bcg circle">
              <div className="outer animated circle"></div>
              <div className="inner animated "></div>
              <div className="indicator"></div>
              <button id="time-left">05:24</button>
            </div>
            <div className="btns">
              <button className="play">
                {this.state.pause ? (
                  <FontAwesomeIcon icon={faPause} />
                ) : (
                  <FontAwesomeIcon icon={faPlay} />
                )}
              </button>
              <button className="reset">
                <FontAwesomeIcon icon={faRotate} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
