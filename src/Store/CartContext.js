import React from "react";

const CartContext = React.createContext({
  productDetails : [],
  products: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;