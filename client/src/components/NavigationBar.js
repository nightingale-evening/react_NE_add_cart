import React, { Component } from "react";
import { Nav, Navbar, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Trang Chủ</Nav.Link>
              <Nav.Link href="/cart">Giỏ Hàng</Nav.Link>
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

export default NavigationBar;
