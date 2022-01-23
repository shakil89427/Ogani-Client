import axios from "axios";
import useSetToLocal from "./useSetToLocal";

const useLoadCart = () => {
  const { setToLocal } = useSetToLocal();

  const loadCart = (user, setCartItems, result, setCartLoading) => {
    setCartLoading(true);
    if (user?._id) {
      axios
        .get(`https://oganishop247.herokuapp.com/getcart/${user._id}`)
        .then((res) => {
          if (res.data) {
            setCartItems(res.data);
            setCartLoading(false);
            return localStorage.removeItem("cart");
          }
          if (!res.data && result) {
            result._id = user._id;
            setToLocal(user, setCartItems, result);
            setCartLoading(false);
            return localStorage.removeItem("cart");
          }
          if (!res.data && !result) {
            setToLocal(user, setCartItems, {
              _id: user._id,
              products: [],
            });
            return setCartLoading(false);
          }
        });
    }
    if (!user?._id && !result) {
      setToLocal(user, setCartItems, { _id: false, products: [] });
      return setCartLoading(false);
    }
    if (!user?.id && result) {
      setCartItems(result);
      setCartLoading(false);
    }
  };
  return { loadCart };
};

export default useLoadCart;
