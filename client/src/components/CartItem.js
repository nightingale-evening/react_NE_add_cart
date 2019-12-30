import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { ButtonToolbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import * as Message from "../constants/Message";
class CartItem extends Component {
  render() {
    //props là của components CartContainer
    let { item } = this.props;
    let { quantity } = item;
    return (
      <tbody>
        <tr>
          <td>
            <img src={item.product.image} alt={item.product.name} style={{maxHeight: "200px"}}></img>
          </td>
          <td>{item.product.name}</td>
          <td>{item.product.price}</td>
          <td>
            {quantity}
            <ButtonGroup size="sm">
              <Button
                onClick={() =>
                  this.onUpdateQuantity(item.product, item.quantity + 1)
                }
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <Button
                onClick={() =>
                  this.onUpdateQuantity(item.product, item.quantity - 1)
                }
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
            </ButtonGroup>
          </td>
          <td>{this.subTotal(item.product.price, item.quantity)} $</td>
          <td>
            <ButtonToolbar>
              <Button
                variant="primary"
                onClick={() => this.onDelete(item.product)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </Button>
            </ButtonToolbar>
          </td>
        </tr>
      </tbody>
    );
  }
  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      let { onUpdateProductInCart, onChangeMassage } = this.props;
      onUpdateProductInCart(product, quantity);
      onChangeMassage(Message.MSG_UPDATE_CART_SUCCES);
    }
  };
  onDelete = product => {
    //truyền props đã dispath để làm nhiệm vụ xóa
    let { onDeleteProductInCart, onChangeMassage } = this.props;
    onDeleteProductInCart(product);
    onChangeMassage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCES);
  };
  subTotal = (price, quantity) => {
    return price * quantity;
  };
}

export default CartItem;
