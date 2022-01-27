import axios from "axios";
import useAuth from "../AuthProvider/useAuth";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useLogin = () => {
  const { setUser, setUserLoading } = useAuth();

  const login = async (data) => {
    setUserLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/login", data, {
        withCredentials: true,
      });
      if (response.data) {
        setUser(response.data.rests);
        setUserLoading(false);
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
