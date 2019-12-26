import React, { Component } from "react";
class Products extends Component {
  render() {
    return (
      <div>
        <h3>Danh sách sản phẩm</h3>
        {this.props.children}
      </div>
    );
  }
}

export default Products;
