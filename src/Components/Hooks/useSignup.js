import axios from "axios";
import useAuth from "../AuthProvider/useAuth";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useUserCheck from "./useUserCheck";

const useSignup = () => {
  const { setUserLoading, setUser } = useAuth();
  const { userCheck } = useUserCheck();

  const signup = async (data) => {
    setUserLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/signup", data);
      if (response.data) {
        localStorage.setItem("accessToken", response.data.token);
        console.log(response);
        userCheck(setUser, setUserLoading);
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
