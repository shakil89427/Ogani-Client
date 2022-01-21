import axios from "axios";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useSetToLocal = () => {
  const setToLocal = (user, setCartItems, value) => {
    if (!user?._id) {
      setCartItems(value);
      localStorage.setItem("cart", JSON.stringify(value));
      return toast.success("Cart Updated Successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "colored",
        transition: Slide,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    if (user?._id) {
      setCartItems(value);
      toast.success("Cart Updated Successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        theme: "colored",
        transition: Slide,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      axios.post("http://localhost:5000/savecart", value);
    }
  };
  return { setToLocal, toast: <ToastContainer /> };
};

export default useSetToLocal;
