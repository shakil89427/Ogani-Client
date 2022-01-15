import axios from "axios";
import { useState } from "react";

const useLoadProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  axios
    .get("http://localhost:5000/allproducts")
    .then((res) => setAllProducts(res.data));
  return { allProducts };
};

export default useLoadProducts;
