import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { ButtonToolbar } from "react-bootstrap";
class CartResult extends Component {
  render() {
    //  nhận props truyền từ CartContainer
    let { cart } = this.props;
    return (
     <tbody>
        <tr>
        <td></td>
        <td></td>
        <td>
          <h4>Tổng Tiền:</h4>
        </td>
        <td>
          <h4>{this.showTotalQuantity(cart)} $</h4>
        </td>
        <td>
          <ButtonToolbar>
            <Button variant="info">Thanh Toán</Button>
          </ButtonToolbar>
        </td>
      </tr>
     </tbody>
    );
  }
  showTotalQuantity = cart => {
    let total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  };
}

export default CartResult;
