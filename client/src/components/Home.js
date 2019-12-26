import React, { Component } from "react";
import ProductsContainer from "../containers/ProductsContainer";
import MessageContainer from "../containers/MessageContainer";
class Home extends Component {
  render() {
    return (
      <div>
        {/* gọi ProductsContainer để nó kết nối,render ra giao diện */}
        <MessageContainer />
        <ProductsContainer />
      </div>
    );
  }
}

export default Home;
