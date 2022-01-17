import axios from "axios";
import { useEffect, useState } from "react";
import { isExpired, decodeToken } from "react-jwt";

const Store = () => {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const [searchValue, setSearchValue] = useState({});
  const [cartItems, setCartItems] = useState({});
  const [user, setUser] = useState({});
  const accesstoken = localStorage.getItem("accessToken");

  /* Load All Products */
  useEffect(() => {
    axios
      .get("http://localhost:5000/allproducts")
      .then((res) => setAllProducts(res.data));
  }, []);

  /* Decode User Token */
  const decodeUser = (token) => {
    const decoded = decodeToken(token);
    setUser(decoded);
    setLoading(false);
  };

  /* Signup Method */
  const signup = (data) => {
    axios
      .post("http://localhost:5000/signup", data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.data);
          decodeUser(res.data);
        }
      })
      .catch((error) => {
        alert("Email Already Exist");
        setLoading(false);
      });
  };

  /* Login Method */
  const login = (data) => {
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.data);
          decodeUser(res.data);
        }
      })
      .catch((error) => {
        alert("Authentication Error");
        setLoading(false);
      });
  };

  /* Logout Method */
  const logout = () => {
    setUser({});
    localStorage.removeItem("accessToken");
  };

  /* Check Token Activity */
  useEffect(() => {
    const expiredtoken = isExpired(accesstoken);
    if (!accesstoken) {
      setUser({});
      return setLoading(false);
    }
    if (expiredtoken) {
      setUser({});
      localStorage.removeItem("accessToken");
      return setLoading(false);
    }
    decodeUser(accesstoken);
  }, [accesstoken]);

  /* Set CartItems to local Storage and Database */
  const setToLocal = (value) => {
    if (!user?._id) {
      localStorage.setItem("cart", JSON.stringify(value));
      setCartItems(value);
    }
    if (user?._id) {
      setCartItems(value);
      localStorage.setItem(`${user._id}`, JSON.stringify(value));
      axios.post("http://localhost:5000/savecart", value);
    }
  };

  /* Add single product quantity */
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
      const newData = [...cartItems.products];
      newData.push(product);
      return setToLocal({ _id: cartItems._id, products: newData });
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
  }, [user?._id]);

  return {
    user,
    allProducts,
    searchValue,
    setSearchValue,
    cartItems,
    addSingleQuantity,
    setToLocal,
    signup,
    login,
    logout,
    loading,
    setLoading,
  };
};

export default Store;
