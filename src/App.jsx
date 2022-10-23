import "./App.css";
import { useState, useEffect } from "react";
import HeaderSpace from "./components/Header";
import { api } from "./lib/axios";
import ProductSpace from "./components/SectionProducts";
import ShopCartSpace from "./components/ShopCart";
import { MainBody } from "./components/mainBody/mainBody";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <HeaderSpace setFilteredProducts={setFilteredProducts} />
      <MainBody>
        <ProductSpace
          products={products}
          filteredProducts={filteredProducts}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
        <ShopCartSpace
          currentSale={currentSale}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
          setCurrentSale={setCurrentSale}
        />
      </MainBody>
    </div>
  );
};

export default App;
