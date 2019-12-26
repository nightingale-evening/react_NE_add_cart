//container components làm nhiệm vụ trung gian lấy giữ state từ store  rồi truyền về  cho các components
import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";
import Product from "../components/Product";
import {
  actAddToCart,
  actChangeMessage,
  actFecthDataProductsReq
} from "../action/index";
class ProductsContainer extends Component {
  componentDidMount = () => {
    this.props.fetchAllProducts();
  };
  render() {
    //truyền vào 1 props children để components Products nhận được props đó
    let { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
  showProducts(products) {
    let result = null;
    let { onAddToCart, onChangeMessage } = this.props;
    if (products.length > 0) {
      result = products.map((item, index) => {
        // điều kiện hiện thị danh sách sản phẩm
        return (
          <Product
            key={index}
            product={item}
            onAddToCart={onAddToCart}
            onChangeMessage={onChangeMessage}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  //gọi lên store lấy các state là danh sách các sản phẩm
  // chuyển nó thành props của components này
  return {
    // state.product chính là product được combine ở reducers/index.js
    products: state.products
  };
};
const mapDispathToProps = (dispatch, props) => {
  return {
    //dispath 1 cái action thành 1 cái props
    fetchAllProducts: () => {
      dispatch(actFecthDataProductsReq());
    },
    onAddToCart: product => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage: message => {
      dispatch(actChangeMessage(message));
    }
  };
};

export default connect(mapStateToProps, mapDispathToProps)(ProductsContainer);
