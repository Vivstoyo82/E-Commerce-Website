import React, { useContext, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartIcon from "../Cart/CartIcon";
import "./Navbar.css";
import CartContext from "../../Store/CartContext";
import { Link, useHistory } from "react-router-dom";

const NavigationBar = (props) => {
  const cartHandler = () => {
    // props.onCartClick();
    cartCtx.cartOpen();
  }

  const cartCtx = useContext(CartContext);

  const isLoggedIn = cartCtx.isLoggedIn;
  const history = useHistory();

  const logoutHandler = () => {
    cartCtx.logout();
    history.replace("/login");
  };

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
              {isLoggedIn && (
                <Link
                  activeClassName="active"
                  to="/home"
                  className="me-5 nav-item fs-5 ">
                  Home
                </Link>)}
              {isLoggedIn && (
                <Link
                  activeClassName="active"
                  to="/store"
                  className="me-5 nav-item fs-5 ">
                  Store
                </Link>)}
              {isLoggedIn && (
                <Link
                  activeClassName="active"
                  to="/about"
                  className="me-5 nav-item fs-5 ">
                  About
                </Link>)}
              {isLoggedIn && (
                <Link
                  activeClassName="active"
                  to="/contact"
                  className="me-5 nav-item fs-5 ">
                  Contact Us
                </Link>)}
              {!isLoggedIn && (
                <Link
                  activeClassName="active"
                  to="/login"
                  className="btn btn-light me-5 nav-item fs-5 ">
                  Login
                </Link>)}
            </Nav>
            {isLoggedIn && (
              <button className="button" onClick={cartHandler}>
                <span className="icon">
                  <CartIcon />
                </span>
                <div className="badge">{quantity}</div>
              </button>)}
            {isLoggedIn && (
              <button className="btn btn-outline-danger mx-2" onClick={logoutHandler}>
                Logout
              </button>
            )}
          </Container>
        </Navbar>
        <div
          style={{
            height: "250px",
            backgroundColor: "#FFFFFF",
          }}
          className="d-flex justify-content-center align-items-center pt-5"
        >
          <h1 style={{ fontSize: "90px", fontFamily: "brush-script" }}>
            E-commerce
          </h1>
        </div>
      </Fragment>
    </header>
  );
};

export default NavigationBar;