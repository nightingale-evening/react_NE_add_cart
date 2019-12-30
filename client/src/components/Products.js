import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
class Products extends Component {
  render() {
    return (
      <div>
        <h3>Danh sách sản phẩm</h3>
        <Container>
          <Row>{this.props.children}</Row>
        </Container>
      </div>
    );
  }
}

export default Products;
