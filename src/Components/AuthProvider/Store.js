import axios from "axios";
import { useEffect, useState } from "react";
import useLoadCart from "../Hooks/useLoadCart";
import useUserCheck from "../Hooks/useUserCheck";

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState({});
  const [cartItems, setCartItems] = useState({});
  const [user, setUser] = useState({});
  const accesstoken = localStorage.getItem("accessToken");
  const { loadCart } = useLoadCart();
  const { userCheck } = useUserCheck();
  const result = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    loadCart(user, setCartItems, result);
  }, [user]);

  /* Load All Products */
  useEffect(() => {
    axios
      .get("http://localhost:5000/allproducts")
      .then((res) => setAllProducts(res.data));
  }, []);

  /* Logout Method */
  const logout = () => {
    setUser({});
    localStorage.removeItem("accessToken");
  };

  /* Check Token Activity */
  useEffect(() => {
    userCheck(accesstoken, setUser, setLoading);
  }, [accesstoken]);

  return {
    user,
    allProducts,
    searchValue,
    setSearchValue,
    cartItems,
    setCartItems,
    logout,
    loading,
    setLoading,
  };
};

export default Store;
