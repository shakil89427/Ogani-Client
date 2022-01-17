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
  const { userCheck } = useUserCheck();
  const { loadCart } = useLoadCart();
  const accesstoken = localStorage.getItem("accessToken");
  const cart = JSON.parse(localStorage.getItem("cart"));

  /* Load All Products */
  useEffect(() => {
    axios
      .get("http://localhost:5000/allproducts")
      .then((res) => setAllProducts(res.data));
  }, []);

  /* Check Token Activity */
  useEffect(() => {
    userCheck(accesstoken, setUser, setLoading);
  }, [accesstoken]);

  /* Check Cart Activity */
  useEffect(() => {
    loadCart(user, setCartItems, cart);
  }, [user]);

  return {
    loading,
    setLoading,
    searchValue,
    setSearchValue,
    cartItems,
    setCartItems,
    user,
    setUser,
    allProducts,
  };
};

export default Store;
