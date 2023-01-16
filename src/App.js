// import logo from './logo.svg';
import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from './Store/CartProvider';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);


  const cartClickHandler = () => {
    setCartIsShown(true);
  }

  const cartCloseHandler = () => {
    setCartIsShown(false);
  }
  return (
    <div className="App" style={{ backgroundColor: "#84CEEB" }}>
      <CartProvider className="App">
        <NavigationBar onCartClick={cartClickHandler}></NavigationBar>
        {cartIsShown && <Cart onCartClose={cartCloseHandler}></Cart>}
        <ProductPage></ProductPage>
        <Footer></Footer>
      </CartProvider>
    </div>
  );
}

export default App;
