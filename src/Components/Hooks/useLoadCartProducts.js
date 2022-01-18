import axios from "axios";

const useLoadCartProducts = () => {
  const loadCartProducts = (cartItems, setCartProducts, setCartLoading) => {
    setCartLoading(true);
    const final = [];
    axios.post("http://localhost:5000/cartproducts", cartItems).then((res) => {
      for (const item of cartItems) {
        const result = res.data.find((single) => single._id === item._id);
        if (result.name) {
          result.quantity = item.quantity;
          final.push(result);
        }
      }
      setCartProducts(final);
      setCartLoading(false);
    });
  };
  return { loadCartProducts };
};

export default useLoadCartProducts;
