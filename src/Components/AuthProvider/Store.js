import axios from "axios";
import { useEffect, useState } from "react";

const Store = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allproducts").then((res) => {
      setAllProducts(res.data);
    });
  }, []);
  return {
    allProducts,
  };
};

export default Store;
