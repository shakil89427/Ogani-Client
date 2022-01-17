import axios from "axios";

const useSetToLocal = () => {
  const setToLocal = (user, setCartItems, value) => {
    if (!user?._id) {
      setCartItems(value);
      localStorage.setItem("cart", JSON.stringify(value));
    }
    if (user?._id) {
      setCartItems(value);
      axios.post("http://localhost:5000/savecart", value);
    }
  };
  return { setToLocal };
};

export default useSetToLocal;
