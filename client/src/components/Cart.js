import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "../static/css/Home.css";
class Cart extends Component {
  render() {
    let { children } = this.props;
    return (
      <div className="wrapper_item">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Ảnh Sản Phẩm</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá</th>
              <th>Số Lượng</th>
              <th>Tổng Cộng</th>
              <th></th>
            </tr>
          </thead>
          {children}
        </Table>
      </div>
    );
  }
}

export default Cart;
