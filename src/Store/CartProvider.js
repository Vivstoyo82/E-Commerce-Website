import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [products, updateProducts] = useState([]);

    const addItemToCartHandler = (product) => {
        let idx = products.findIndex((ele) => {
            return ele.id === product.id;
        });
        let existingProduct = products[idx];
        if (existingProduct) {
            existingProduct.quantity = Number(existingProduct.quantity) + 1;
            updateProducts([...products]);
        } else {
            updateProducts([...products, product]);
        }
        console.log(cartContext);
    };

    const removeItemFromCartHandler = (id) => {
        let idx = products.findIndex((ele) => {
            return ele.id === id;
        });
        products.splice(idx, 1);
        updateProducts([...products]);
    };

    const cartContext = {
        products: products,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;