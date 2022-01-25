import axios from "axios";

const useLoadCartProducts = () => {
  const loadCartProducts = (cartItems, setCartProducts, setCartPdLoading) => {
    const final = [];
    axios.post("http://localhost:5000/cartproducts", cartItems).then((res) => {
      if (res.data) {
        for (const item of cartItems) {
          const result = res.data.find((single) => single._id === item._id);
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
    });
  };
  return { loadCartProducts };
};

export default useLoadCartProducts;
