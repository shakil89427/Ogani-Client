import axios from "axios";
import useSetToLocal from "./useSetToLocal";

const useLoadCart = () => {
  const { setToLocal } = useSetToLocal();

  const loadCart = (user, setCartItems, result) => {
    if (user?._id) {
      axios.get(`http://localhost:5000/getcart/${user._id}`).then((res) => {
        if (res.data) {
          setCartItems(res.data);
          return localStorage.removeItem("cart");
        }
        if (!res.data && result) {
          result._id = user._id;
          setToLocal(user, setCartItems, result);
          return localStorage.removeItem("cart");
        }
        if (!res.data && !result) {
          setToLocal(user, setCartItems, {
            _id: user._id,
            products: [],
          });
        }
      });
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
