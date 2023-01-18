import './App.css';
import React, { useState } from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from './Store/CartProvider';
import About from './Pages/About';
import { Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import axios from 'axios';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);


  const cartClickHandler = () => {
    setCartIsShown(true);
  }

  const cartCloseHandler = () => {
    setCartIsShown(false);
  }

  const userDetailPostHandler = (user) => {
    axios.post("https://e-commerce-project-4b6e6-default-rtdb.firebaseio.com/userDetails.json",
      {
        body: JSON.stringify(user),
      })
  };

  return (
    <div className="App" style={{ backgroundColor: "#84CEEB" }}>
      <CartProvider >
        {cartIsShown && <Cart onCartClose={cartCloseHandler}></Cart>}
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact userDetail={userDetailPostHandler}></Contact>
        </Route>
        <Route path="/store">
          <NavigationBar onCartClick={cartClickHandler}></NavigationBar>
          <ProductPage />
          <Footer />
        </Route>
      </CartProvider>
    </div>
  );
}

export default App;
