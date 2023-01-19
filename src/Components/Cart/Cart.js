import React, { Fragment, useContext } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../Store/CartContext";

// const cartItem = [
//     {
//         title: "Colors",
//         price: 100,
//         imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//         quantity: 2,
//     },
//     {
//         title: "Black and white Colors",
//         price: 50,
//         imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//         quantity: 3,
//     },
//     {
//         title: "Yellow and Black Colors",
//         price: 70,
//         imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//         quantity: 1,
//     },
// ];

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    let total = 0;
    // let cartItems = CartCtx.products.map((product) => {

    let cartElements = cartCtx.products.map((product) => { 
        // console.log(product.id)
        total = total + product.price * product.quantity;
        return (
            <CartItem
                key={product.id}
                id={product.id}
                image={product.imageUrl}
                title={product.title}
                price={product.price}
                quantity={product.quantity}
            ></CartItem>
        );
    });


    const cartCloseHandler = () => {
        props.onCartClose();
    };
    const backdropHandler = () => {
        props.onCartClose();
    };
    return (
        <div>
            <Modal onConfirm={backdropHandler} />
            <Fragment>
                <div className=" cart bg-info p-4 text-white">
                    <div className="text-end">
                        <button className="btn btn-outline-light" onClick={cartCloseHandler}>
                            {" "}
                            X
                        </button>
                    </div>
                    <h1 className=" text-center mb-4">Cart</h1>
                    <div className="pb-2 mb-2" style={{ borderBottom: "1px solid " }}>
                        <span className="fs-3 ms-4 me-4">Item</span>
                        <span className="fs-3 ms-5">Price</span>
                        <span className="fs-3 ms-5">Quantity</span>
                    </div>

                    <div>{cartElements}</div>

                    <div className="text-end mt-4">
                        <h2>Total : {total}</h2>
                    </div>
                    <div className="text-center mt-5">
                        <button className="btn btn-dark">Purchase</button>
                    </div>
                </div>
            </Fragment>
        </div>
    );
}
export default Cart;