import React, { useContext, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "../Cart/CartIcon";
import "./Navbar.css";
import CartContext from "../../Store/CartContext";
import { NavLink } from "react-router-dom";

const NavigationBar = (props) => {
  const cartHandler = () => {
    props.onCartClick();
  }

  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.products.forEach((product) => {
    quantity = quantity + (Number(product.quantity));
  });

  return (
    <header>
      <Fragment>
        <Navbar
          bg="dark"
          variant="dark"
          className="p-2 shadow   bg-success"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home" className="fs-2" >
              E-Commerce
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link
                activeClassName="active"
                to="/home"
                className="me-5 nav-item fs-5 ">
                Home
              </Nav.Link>
              <Nav.Link
                activeClassName="active"
                to="/store"
                className="me-5 nav-item fs-5 ">
                Store
              </Nav.Link>
              <Nav.Link
                activeClassName="active"
                to="/about"
                className="me-5 nav-item fs-5 ">
                About
              </Nav.Link>
            </Nav>
            <button className="button" onClick={cartHandler}>
              <span className="icon">
                <CartIcon />
              </span>
              <div className="badge">{quantity}</div>
            </button>
          </Container>
        </Navbar>
      </Fragment>
    </header>
  );
};

export default NavigationBar;