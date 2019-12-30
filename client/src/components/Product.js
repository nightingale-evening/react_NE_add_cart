import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../static/css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faStarHalf
} from "@fortawesome/free-solid-svg-icons";

import "../static/css/Product.css";
import * as Message from "../constants/Message";
import Col from "react-bootstrap/Col";
class Product extends Component {
  render() {
    // lấy product từ components Products
    let { product } = this.props;
    // hiển thị sản phẩm lên màn hình
    return (
      <Col sm={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <ul className="list-unstyled">
              {/* hiển thị rating trong store */}
              <li>{this.showRatings(product.rating)}</li>
            </ul>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price} $</Card.Text>
            <Button variant="primary" onClick={() => this.onAddToCart(product)}>
              Thêm Vào Giỏ Hàng <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  onAddToCart = product => {
    //kết nối lên store và dispath 1 cái action để thêm sản phẩm vào cart
    this.props.onAddToCart(product);
    this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCES);
  };
  showRatings(rating) {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(
        <FontAwesomeIcon key={i} className="color_1" icon={faStar} />
      );
    }
    // kiểm tra con bao nhiêu ngôi sao rỗng
    for (let j = 1; j <= 5 - rating; j++) {
      result.push(
        <FontAwesomeIcon key={j + 10} className="color_1" icon={faStarHalf} />
      );
    }
    return result;
  }
}

export default Product;
