import axios from "axios";
import useAuth from "../AuthProvider/useAuth";

const useSetToLocal = () => {
  const { user, setCartItems } = useAuth();
  const setToLocal = (value) => {
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
