import axios from "axios";
import { useEffect, useState } from "react";

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState({});
  const [cartItems, setCartItems] = useState({});

  const user = { name: "Shakil" };
  /* Load all Products */
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/allproducts").then((res) => {
      setAllProducts(res.data);
      setLoading(false);
    });
  }, []);

  /* Set CartItems to local Storage */
  const setToLocal = (value) => {
    localStorage.setItem("cart", JSON.stringify(value));
    setCartItems(value);
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

  /* Load Data from localstorage and set to cartItems*/
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("cart"));
    if (!result) {
      return setToLocal({ user: {}, products: [] });
    }
    setCartItems(result);
  }, []);

  // useEffect(() => {
  //   if (!user.name) return;
  //   if (user.name === cartItems?.user?.name) return;
  //   if (!cartItems?.user?.name) {
  //     console.log(cartItems);
  //     // cartItems.user = user;
  //     // setCartItems(cartItems);
  //   }
  // }, [user]);

  return {
    loading,
    allProducts,
    searchValue,
    setSearchValue,
    cartItems,
    addSingleQuantity,
  };
};

export default Store;
