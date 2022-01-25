import axios from "axios";
import useAuth from "../AuthProvider/useAuth";
import useDecodeUser from "./useDecodeUser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useLogin = () => {
  const { setUser, setUserLoading } = useAuth();
  const { decodeUser } = useDecodeUser();
  const login = async (data) => {
    setUserLoading(true);
    try {
      const response = await axios.post(
        "https://oganishop247.herokuapp.com/login",
        data
      );
      if (response.data) {
        localStorage.setItem("accessToken", response.data);
        decodeUser(response.data, setUser, setUserLoading);
      } else {
        setUserLoading(false);
        toast.error("Authentication Error", {
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
      toast.error("Authentication Error", {
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
  return { login, logintoast: <ToastContainer /> };
};

export default useLogin;
