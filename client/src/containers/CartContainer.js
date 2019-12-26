//container components làm nhiệm vụ trung gian lấy giữ state từ store  rồi truyền về  cho các components
import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import * as Message from "../constants/Message";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import {
  actRemoveProductInCart,
  actChangeMessage,
  actUpdateProductInCart
} from "../action/index";
class CartContainer extends Component {
  render() {
    let { cart } = this.props;
    // phương thức hiển thị sản phẩm đã mua
    return (
      <Cart>
        {this.showCartItem(cart)}
        {/* tính toán tiền */}
        {this.showTotalQuantity(cart)}
      </Cart>
    );
  }
  //hiển thị danh sách các products
  showCartItem = cart => {
    let {
      onDeleteProductInCart,
      onChangeMassage,
      onUpdateProductInCart
    } = this.props;
    let result = Message.MSG_EMPTY_CART;
    //cart ở trên store
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        // truyền cho CartItem 1 phần tử để xác định từng cái sản phẩm
        return (
          <CartItem
            onDeleteProductInCart={onDeleteProductInCart}
            key={index}
            item={item}
            index={index}
            onChangeMassage={onChangeMassage}
            onUpdateProductInCart={onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };
  showTotalQuantity = cart => {
    let result = null;
    if (cart.length > 0) {
      // truyền vào cho CartResult 1 cái props để nó nhận
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispathToProps = (dispath, props) => {
  return {
    onDeleteProductInCart: product => {
      dispath(actRemoveProductInCart(product));
    },
    onChangeMassage: message => {
      dispath(actChangeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispath(actUpdateProductInCart(product, quantity));
    }
  };
};
export default connect(mapStateToProps, mapDispathToProps)(CartContainer);
