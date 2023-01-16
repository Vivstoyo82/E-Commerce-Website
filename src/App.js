import './App.css';
import React, { useState } from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from './Store/CartProvider';
import About from './Pages/About';
import { Route } from "react-router-dom";

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
      <CartProvider >
        {cartIsShown && <Cart onCartClose={cartCloseHandler}></Cart>}
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/store">
          <NavigationBar onCartClick={cartClickHandler}></NavigationBar>
          <ProductPage></ProductPage>
          <Footer></Footer>
        </Route>
      </CartProvider>
    </div>
  );
}

export default App;
