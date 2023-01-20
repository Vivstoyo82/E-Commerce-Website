import React from "react";

const CartContext = React.createContext({
  productDetails: [],
  products: [],
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;