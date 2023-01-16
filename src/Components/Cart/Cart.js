import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import Modal from "../UI/Modal/Modal";

const cartItem = [
    {
        title: "Colors",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 2,
    },
    {
        title: "Black and white Colors",
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 3,
    },
    {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
    },
];

const Cart = (props) => {
    let cartElements = cartItem.map((item) => {
        return (
            <CartItem
                image={item.imageUrl}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
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
                        <h2>Total : 220</h2>
                    </div>
                    <div className="text-center mt-5">
                        <button className="btn btn-dark">Purchase</button>
                    </div>
                </div>
        </div>
    );
}
export default Cart;