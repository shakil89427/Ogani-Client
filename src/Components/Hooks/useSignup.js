import axios from "axios";
import useDecodeUser from "./useDecodeUser";
import useAuth from "../AuthProvider/useAuth";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useSignup = () => {
  const { decodeUser } = useDecodeUser();
  const { setUserLoading, setUser } = useAuth();
  const signup = async (data) => {
    setUserLoading(true);
    try {
      const response = await axios.post(
        "https://oganishop247.herokuapp.com/signup",
        data
      );
      if (response.data) {
        localStorage.setItem("accessToken", response.data);
        decodeUser(response.data, setUser, setUserLoading);
        setUserLoading(false);
      } else {
        setUserLoading(false);
        toast.warning("Email Already Exist", {
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
    } catch (error) {
      setUserLoading(false);
      toast.warning("Email Already Exist", {
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
  };
  return { signup, signuptoast: <ToastContainer /> };
};

export default useSignup;
