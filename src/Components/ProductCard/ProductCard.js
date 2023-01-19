import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductCard.css";
import CartContext from "../../Store/CartContext";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const cartCtx = useContext(CartContext);
  const addCartHandler = () => {
    cartCtx.addItem({ ...props, quantity: 1 });
  };
  // {console.log(props)}
  return (
    <Card
      style={{
        width: "18rem",
      }}
      className="shadow mb-5 "
    >
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex justify-content-between">
          <h4>Price : {props.price}</h4>
          <Button variant="primary" onClick={addCartHandler}>Add to cart</Button>
        </div>
        <Link to={"/product_Info/" + props.id}>
          <button className="btn btn-outline-warning w-100 mt-2">
            Product details
          </button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;