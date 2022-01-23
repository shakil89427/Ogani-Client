import axios from "axios";
import useDecodeUser from "./useDecodeUser";
import useAuth from "../AuthProvider/useAuth";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useSignup = () => {
  const { decodeUser } = useDecodeUser();
  const { setUserLoading, setUser } = useAuth();
  const signup = (data) => {
    setUserLoading(true);
    axios
      .post("https://oganishop247.herokuapp.com/signup", data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.data);
          decodeUser(res.data, setUser, setUserLoading);
        }
      })
      .catch((error) => {
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
        setUserLoading(false);
      });
  };
  return { signup, signuptoast: <ToastContainer /> };
};

export default useSignup;
