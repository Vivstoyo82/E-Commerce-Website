// import logo from './logo.svg';
import logo from './logo.svg';
import './App.css';
import React from "react";
import NavigationBar from "./Components/Navbar/Navbar";
import ProductPage from "./Components/ProductPage/ProductPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#84CEEB" }}>
      <NavigationBar></NavigationBar>
      <ProductPage></ProductPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
