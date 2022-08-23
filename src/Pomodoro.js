import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRotate } from "@fortawesome/free-solid-svg-icons";
import TimerLength from "./components/TimerLength";
import Timer from "./components/Timer";

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: true,
      breakLength: 5,
      sessionLength: 25,
      timer: 1500,
      timerType: "session",
    };
    this.intervalID = null;
    this.displayTime = this.displayTime.bind(this);
    this.setSessionLength = this.setSessionLength.bind(this);
    this.setBreakLength = this.setBreakLength.bind(this);
    this.handleLengthControl = this.handleLengthControl.bind(this);
    this.controlClock = this.controlClock.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.controlPhase = this.controlPhase.bind(this);
    this.switchTimerLength = this.switchTimerLength.bind(this);
  }

  controlClock() {
    //start stop timer
    if (this.state.pause) {
      this.intervalID = setInterval(() => {
        this.decrementTimer();
        this.controlPhase();
      }, 1000);
      this.setState({
        pause: false,
      });
    } else {
      clearInterval(this.intervalID);
      this.setState({
        pause: true,
      });
    }
  }

  controlPhase() {
    let timer = this.state.timer;

    if (timer <= 0) {
      clearInterval(this.intervalID);
      if (this.state.timerType === "session") {
        this.controlClock();
        this.switchTimerLength(this.state.breakLength * 60, "break");
      } else {
        this.controlClock();
        this.switchTimerLength(this.state.sessionLength * 60, "session");
      }
    }
  }

  switchTimerLength(t, name) {
    this.setState({
      timer: t,
      timerType: name,
    });
  }

  decrementTimer() {
    this.setState({ timer: this.state.timer - 1 });
  }

  setSessionLength(e) {
    this.handleLengthControl(
      "sessionLength",
      this.state.sessionLength,
      e.currentTarget.value,
      "session"
    );
  }

  setBreakLength(e) {
    this.handleLengthControl(
      "breakLength",
      this.state.breakLength,
      e.currentTarget.value,
      "break"
    );
  }

  handleLengthControl(stateToChange, currentState, operation, timerType) {
    if (this.state.timerType === timerType) {
      if (operation === "increment") {
        this.setState({
          [stateToChange]: currentState + 1,
          timer: currentState * 60 + 60,
        });
      } else if (operation === "decrement" && currentState !== 1) {
        this.setState({
          [stateToChange]: currentState - 1,
          timer: currentState * 60 - 60,
        });
      }
    } else {
      if (operation === "increment") {
        this.setState({
          [stateToChange]: currentState + 1,
        });
      } else if (operation === "decrement" && currentState !== 1) {
        this.setState({
          [stateToChange]: currentState - 1,
        });
      }
    }
  }

  displayTime() {
    let minutes = Math.floor(this.state.timer / 60);
    let seconds = this.state.timer - minutes * 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
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
              length={this.state.sessionLength}
              lengthID="session-length"
              onClick={this.setSessionLength}
            />
            <TimerLength
              titleID="break-label"
              title="Break"
              minID="break-decrement"
              maxID="break-increment"
              length={this.state.breakLength}
              lengthID="break-length"
              onClick={this.setBreakLength}
            />

            <Timer pause={this.state.pause} timeLeft={this.displayTime()} />
            <div className="btns">
              <button className="play">
                <FontAwesomeIcon
                  icon={this.state.pause ? faPlay : faPause}
                  onClick={this.controlClock}
                />
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
