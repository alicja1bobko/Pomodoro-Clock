import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export class TimerLength extends Component {
  render() {
    return (
      <>
        <div className="length-control">
          <span className="field-title" id={this.props.titleID}>
            {this.props.title}
          </span>
          <span className="field-value" id={this.props.lengthID}>
            {this.props.length} min
          </span>
          <div className="arrow-btns">
            <button
              id={this.props.minID}
              className="arrow-btn"
              onClick={this.props.onClick}
              value="increment"
            >
              <FontAwesomeIcon icon={faChevronUp} />
            </button>
            <button
              id={this.props.maxID}
              className="arrow-btn"
              onClick={this.props.onClick}
              value="decrement"
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default TimerLength;
