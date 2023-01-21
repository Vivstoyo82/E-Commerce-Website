import React, { Fragment, useContext } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../ProductCard/ProductCard";
import Title from "../Title/Title";
import { Button } from "react-bootstrap";
import CartContext from "../../Store/CartContext";
import NavigationBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// const products = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     id: Math.random() * 10000000
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     id: Math.random() * 10000000
//   },
//   {
//     title: "Yellow and Black Color",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     id: Math.random() * 10000000
//   },
//   {
//     title: "Blue Color",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//     id: Math.random() * 10000000
//   },
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     id: Math.random() * 10000000
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     id: Math.random() * 1000000
//   },
// ];

const ProductPage = (props) => {
  const cartCtx = useContext(CartContext);

  const onClickHandler = () => {
    // props.openCart();
      cartCtx.cartOpen();
  };
  const ctx = useContext(CartContext);
  // console.log(ctx.productDetails)

  return (
    <div>
      {/* <div
        style={{
          height: "50px",
          backgroundColor: "#fefefe",
        }} */}
        {/* // className="d-flex justify-content-center align-items-center" */}
      {/* > */}
        {/* E-Commerce */}
      {/* </div> */}
      <Fragment>
        {/* <NavigationBar></NavigationBar> */}
        <Container>
          <Title >Music collections</Title>
          <Row>

            {ctx.productDetails.map((product) => {
              return (
                <Col className="d-flex justify-content-center p-5 col-md-4">
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    imageUrl={product.imageUrl}
                  ></ProductCard>
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="d-flex justify-content-center p-3 mt-4">
          <Button variant="outline-primary" onClick={onClickHandler}>See the cart</Button>
        </div>
      </Fragment>
    </div>
  );
}

export default ProductPage;