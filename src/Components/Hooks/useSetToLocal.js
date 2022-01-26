import axios from "axios";

const useSetToLocal = () => {
  const setToLocal = (user, setCartItems, value) => {
    if (!user?._id) {
      setCartItems(value);
      return localStorage.setItem("cart", JSON.stringify(value));
    }
    if (user?._id) {
      setCartItems(value);
      axios.post("https://oganishop247.herokuapp.com/savecart", value);
    }
  };
  return { setToLocal };
};

export default useSetToLocal;
