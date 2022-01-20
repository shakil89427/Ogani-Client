import { useEffect, useState } from "react";
import useLoadAllProducts from "../Hooks/useLoadAllProducts";
import useUserCheck from "../Hooks/useUserCheck";
import useLoadCart from "../Hooks/useLoadCart";
import useLoadCartProducts from "../Hooks/useLoadCartProducts";

const Store = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [allProductsLoading, setAllProductsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [cartLoading, setCartLoading] = useState();
  const [filterBy, setFilterBy] = useState({ page: 0 });
  const [count, setCount] = useState(0);
  const { loadAllProducts } = useLoadAllProducts();
  const { userCheck } = useUserCheck();
  const { loadCart } = useLoadCart();
  const { loadCartProducts } = useLoadCartProducts();
  const accesstoken = localStorage.getItem("accessToken");
  const cart = JSON.parse(localStorage.getItem("cart"));

  /* Load All Products */
  useEffect(() => {
    loadAllProducts(
      filterBy,
      setCount,
      setAllProducts,
      setAllProductsLoading,
      featuredProducts.length,
      setFeaturedProducts
    );
  }, [filterBy]);

  /* Check Token Activity */
  useEffect(() => {
    userCheck(accesstoken, setUser, setUserLoading);
  }, [accesstoken]);

  /* Check Cart Activity */
  useEffect(() => {
    loadCart(user, setCartItems, cart, setCartLoading);
  }, [user]);

  /* load Cart products */
  useEffect(() => {
    if (!cartItems?.products) return;
    if (cartItems?.products?.length === 0) return;
    loadCartProducts(cartItems.products, setCartProducts, setCartLoading);
  }, [cartItems]);

  return {
    allProducts,
    featuredProducts,
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
    cartProducts,
    setCartProducts,
  };
};

export default Store;
