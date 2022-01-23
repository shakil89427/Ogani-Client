import axios from "axios";

const useLoadCartProducts = () => {
  const loadCartProducts = async (
    cartItems,
    setCartProducts,
    setCartPdLoading
  ) => {
    const final = [];
    const result = await axios.post(
      "https://oganishop247.herokuapp.com/cartproducts",
      cartItems
    );
    const data = await result.data;
    if (data) {
      for (const item of cartItems) {
        const result = data.find((single) => single._id === item._id);
        if (result.name) {
          result.quantity = item.quantity;
          final.push(result);
        }
      }
      setCartProducts(final);
      setCartPdLoading(false);
    } else {
      setCartPdLoading(false);
    }
  };
  return { loadCartProducts };
};

export default useLoadCartProducts;
