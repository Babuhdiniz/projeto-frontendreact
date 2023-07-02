import React from "react";
import "./App.css";
import Filters from "./Components/Filters/Filters";
import Home from "./Components/ProductList/Home/Home";
import ProductCard from "./Components/ProductList/ProductCard/ProductCard";
import Cart from "./Components/ShoppingCart/Cart/Cart";
import Items from "./Components/ShoppingCart/Items/Items";
import GlobalStyles from "./globalStyles";


function App() {
  return (
    <>
      {/* <GlobalStyles /> */}
      <div className="estilo">
        <Filters />
        <Home />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <Cart />
        {/* <Items /> */}
      </div>
    </>
  );
}

export default App;
