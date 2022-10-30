import { useState, useEffect } from "react";
import Products from "../api/products.json";
import ProductItem from "./ui/ProductItem";

const Favourites = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="text-sm font-semibold my-3">Favoriler</h3>
      <div className="grid grid-cols-7 mt-8 gap-1">
        {products &&
          products.map((product, index) => (
            <div key={index}>
              <ProductItem product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favourites;
