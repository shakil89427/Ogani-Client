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
  const [cartPdLoading, setCartPdLoading] = useState(true);
  const [filterBy, setFilterBy] = useState({ page: 0 });
  const [count, setCount] = useState(0);
  const { loadAllProducts } = useLoadAllProducts();
  const { userCheck } = useUserCheck();
  const { loadCart } = useLoadCart();
  const { loadCartProducts } = useLoadCartProducts();
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
    userCheck(setUser, setUserLoading);
  }, []);

  /* Check Cart Activity */
  useEffect(() => {
    loadCart(user, setCartItems, cart);
  }, [user]);

  useEffect(() => {
    if (!cartItems._id) return;
    if (cartItems?.products?.length === 0) return;
    loadCartProducts(cartItems.products, setCartProducts, setCartPdLoading);
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
    cartProducts,
    setCartProducts,
    cartPdLoading,
    filterBy,
    setFilterBy,
    count,
  };
};

export default Store;
