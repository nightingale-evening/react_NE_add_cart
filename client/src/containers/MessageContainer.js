//container components làm nhiệm vụ trung gian lấy giữ state từ store  rồi truyền về  cho các components
import React, { Component } from "react";
import { connect } from "react-redux";
import Message from "../components/Message";
class MessageContainer extends Component {
  render() {
    let { message } = this.props;
    return <Message message={message} />;
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

export default connect(mapStateToProps, null)(MessageContainer);
