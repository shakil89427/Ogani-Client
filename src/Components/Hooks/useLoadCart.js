import axios from "axios";
import useSetToLocal from "./useSetToLocal";

const useLoadCart = () => {
  const { setToLocal } = useSetToLocal();

  const loadCart = async (user, setCartItems, result) => {
    if (user?._id) {
      try {
        const response = await axios.get(
          `http://localhost:5000/getcart/${user._id}`
        );
        if (response?.data) {
          setCartItems(response.data);
          return localStorage.removeItem("cart");
        }
        if (!response?.data && result) {
          result._id = user._id;
          setToLocal(user, setCartItems, result);
          return localStorage.removeItem("cart");
        }
        if (!response?.data && !result) {
          setToLocal(user, setCartItems, {
            _id: user._id,
            products: [],
          });
        }
      } catch (error) {}
    }
    if (!user?._id && !result) {
      return setToLocal(user, setCartItems, { _id: "user", products: [] });
    }
    if (!user?.id && result) {
      setCartItems(result);
    }
  };
  return { loadCart };
};

export default useLoadCart;
