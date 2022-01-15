import axios from "axios";
import { useEffect, useState } from "react";
import useLoadProducts from "./useLoadProducts";

const Store = () => {
  const { allProducts } = useLoadProducts();
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState({});
  const [cartItems, setCartItems] = useState({});
  const [user, setUser] = useState({ _id: "bvghjkgyuifuytgyuiohbyu" });

  /* Save cart info to Database */
  const saveCartToDb = (value) => {
    axios.post("http://localhost:5000/savecart", value);
  };

  /* Set CartItems to local Storage */
  const setToLocal = (value) => {
    if (!user?._id) {
      localStorage.setItem("cart", JSON.stringify(value));
      return setCartItems(value);
    }
    if (user?._id) {
      localStorage.setItem(`${user._id}`, JSON.stringify(value));
      setCartItems(value);
      saveCartToDb(value);
    }
  };

  /* Add single quantity */
  const addSingleQuantity = (id, value) => {
    const price = allProducts.find((single) => single._id === id);
    const matched = cartItems.products.find(
      (single) => single.productId === id
    );
    if (!matched) {
      const product = { quantity: 1, productId: id, price: price.price };
      if (value) {
        product.quantity = value;
      }
      cartItems.products.push(product);
      return setToLocal(cartItems);
    }
    if (value) {
      matched.quantity = matched.quantity + value;
    }
    if (!value) {
      matched.quantity = matched.quantity + 1;
    }
    const result = cartItems.products.filter(
      (single) => single.productId !== id || matched
    );
    cartItems.products = result;
    setToLocal(cartItems);
  };

  /* Load Cart from server or localstorage */
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("cart"));
    const result2 = JSON.parse(localStorage.getItem(`${user?._id}`));
    if (result2) {
      return setCartItems(result2);
    }
    if (user?._id) {
      axios.get(`http://localhost:5000/getcart/${user._id}`).then((res) => {
        if (res.data) {
          return setCartItems(res.data);
        }
        if (!res.data && result) {
          result._id = user._id;
          setToLocal(result);
          return localStorage.removeItem("cart");
        }
        if (!res.data && !result) {
          return setToLocal({ _id: user._id, products: [] });
        }
      });
    }
    if (!user?._id && !result) {
      return setToLocal({ _id: false, products: [] });
    }
    if (!user?.id && result) {
      setCartItems(result);
    }
  }, [user]);

  return {
    loading,
    allProducts,
    searchValue,
    setSearchValue,
    cartItems,
    addSingleQuantity,
    setToLocal,
  };
};

export default Store;
