import axios from "axios";

const useLoadCartProducts = () => {
  const loadCartProducts = async (
    cartItems,
    setCartProducts,
    setCartPdLoading
  ) => {
    const final = [];
    try {
      const response = await axios.post(
        "http://localhost:5000/cartproducts",
        cartItems
      );
      if (response.data) {
        for (const item of cartItems) {
          const result = response.data.find(
            (single) => single._id === item._id
          );
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
    } catch (error) {
      setCartPdLoading(false);
    }
  };
  return { loadCartProducts };
};

export default useLoadCartProducts;
