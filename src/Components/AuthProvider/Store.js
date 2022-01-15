import axios from "axios";
import { useEffect, useState } from "react";

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState({});
  const [cartItems, setCartItems] = useState({});
  const [user, setUser] = useState({ _id: "bvghjkgyuifuytgyuiohbyu" });

  /* Save cart info to Database */
  const saveCartToDb = (value) => {
    if (!value._id) return;
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
      // saveCartToDb(value);
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

  /* Load all Products*/
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/allproducts").then((res) => {
      setAllProducts(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("cart"));
    let result2 = {};
    if (user?._id) {
      result2 = JSON.parse(localStorage.getItem(`${user._id}`));
    }
    if (!user?._id && !result) {
      return setToLocal({ id: false, products: [] });
    }
    if (!user?.id && result) {
      setCartItems(result);
    }
    if (user?._id && !result2) {
      result.id = user._id;
      setToLocal(result);
      return localStorage.removeItem("cart");
    }
    setCartItems(result2);
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
