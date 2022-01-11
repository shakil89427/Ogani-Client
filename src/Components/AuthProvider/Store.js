import axios from "axios";
import { useEffect, useState } from "react";

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/allproducts").then((res) => {
      setAllProducts(res.data);
      setLoading(false);
    });
  }, []);
  return {
    loading,
    allProducts,
    searchValue,
    setSearchValue,
  };
};

export default Store;
