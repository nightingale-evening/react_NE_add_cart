import React, { Component } from "react";
import { Nav, Navbar, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
class NavigationBar extends Component {
  render() {
    let {totalQuantity} = this.props;
    return (
      <div>
        <Navbar bg="light" expand="lg">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Trang Chủ</Nav.Link>
              <Nav.Link href="/cart">Giỏ Hàng <FontAwesomeIcon icon={faCartArrowDown}/> {totalQuantity}</Nav.Link>
              <Nav.Link href="/about">Về Chúng Tôi</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
  };
}

export default connect(mapStateToProps)(NavigationBar);
