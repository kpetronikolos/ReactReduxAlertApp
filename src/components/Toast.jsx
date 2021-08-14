import React, { Component } from "react";

class Toast extends Component {
  render() {
    return (
      <li className="toast" style={{ backgroundColor: this.props.color }}>
        <p className="toast__content">
          {this.props.text}
        </p>
        <button className="toast__dismiss" onClick={this.props.onDismissClick}>
          x
        </button>
      </li>
    );
  }
}

export default Toast;