import React, { useEffect, useState } from "react";
import "./Shop.css";
import useAuth from "../AuthProvider/useAuth";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const { allProducts } = useAuth();
  const [products, setProducts] = useState([]);
  const filteredby = useLocation();
  console.log(filteredby.state);

  useEffect(() => {
    if (allProducts.length === 0) return;
    if (!filteredby) setProducts(allProducts);
  }, [allProducts]);
  return (
    <div>
      <h1 className="text-center">Shop</h1>
    </div>
  );
};

export default Shop;
