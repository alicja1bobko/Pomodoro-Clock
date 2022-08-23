import "./App.css";
import React from "react";

import TimerLength from "./components/TimerLength";
import Timer from "./components/Timer";

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

            <Timer pause={this.state.pause} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
