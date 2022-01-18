import axios from "axios";

const useLoadCartProducts = () => {
  const loadCartProducts = (cartItems, setCartProducts, setCartLoading) => {
    setCartLoading(true);
    const ids = [];
    for (const items of cartItems) {
      ids.push(items.productId);
    }
    console.log(ids);
    // axios
    //   .post("http://localhost:5000/allproducts", ids)
    //   .then((res) => console.log(res.data));
  };
  return { loadCartProducts };
};

export default useLoadCartProducts;
