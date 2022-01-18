import axios from "axios";
import { useEffect, useState } from "react";
import useLoadCart from "../Hooks/useLoadCart";
import useUserCheck from "../Hooks/useUserCheck";

const Store = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [allProductsLoading, setAllProductsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [cartLoading, setCartLoading] = useState();
  const [filterBy, setFilterBy] = useState({ page: 0 });
  const [count, setCount] = useState(0);
  const { userCheck } = useUserCheck();
  const { loadCart } = useLoadCart();
  const accesstoken = localStorage.getItem("accessToken");
  const cart = JSON.parse(localStorage.getItem("cart"));

  /* Load All Products */
  useEffect(() => {
    setAllProductsLoading(true);
    axios.post("http://localhost:5000/allproducts", filterBy).then((res) => {
      setCount(Math.ceil(res.data.count / 8));
      setAllProducts(res.data.result);
      setAllProductsLoading(false);
    });
  }, [filterBy]);

  /* Check Token Activity */
  useEffect(() => {
    userCheck(accesstoken, setUser, setUserLoading);
  }, [accesstoken]);

  /* Check Cart Activity */
  useEffect(() => {
    loadCart(user, setCartItems, cart, setCartLoading);
  }, [user]);

  return {
    allProducts,
    allProductsLoading,
    user,
    setUser,
    userLoading,
    setUserLoading,
    cartItems,
    setCartItems,
    cartLoading,
    filterBy,
    setFilterBy,
    count,
  };
};

export default Store;
