import axios from "axios";

const useLoadCartProducts = () => {
  const loadCartProducts = (cartItems, setCartProducts, setCartLoading) => {
    setCartLoading(true);
    axios
      .post("http://localhost:5000/cartproducts", cartItems)
      .then((res) => console.log(res.data));
  };
  return { loadCartProducts };
};

export default useLoadCartProducts;
