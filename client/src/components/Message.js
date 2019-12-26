import React, { Component } from "react";
import "../static/css/Message.css";
class Message extends Component {
  render() {
    let { message } = this.props;
    return (
      <div>
        <h3 className="text_mess">{message}</h3>
      </div>
    );
  }
}

export default Message;
