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
          console.log(1);
          result._id = user._id;
          setToLocal(user, setCartItems, result);
          return localStorage.removeItem("cart");
        }
        if (!res.data && !result) {
          console.log(2);
          return setToLocal(user, setCartItems, {
            _id: user._id,
            products: [],
          });
        }
      });
    }
    if (!user?._id && !result) {
      return setToLocal(user, setCartItems, { _id: false, products: [] });
    }
    if (!user?.id && result) {
      setCartItems(result);
    }
  };
  return { loadCart };
};

export default useLoadCart;
