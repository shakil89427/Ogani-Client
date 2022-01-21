import axios from "axios";
import useAuth from "../AuthProvider/useAuth";
import useDecodeUser from "./useDecodeUser";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useLogin = () => {
  const { setUser, setUserLoading } = useAuth();
  const { decodeUser } = useDecodeUser();
  const login = (data) => {
    setUserLoading(true);
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.data);
          decodeUser(res.data, setUser, setUserLoading);
        }
      })
      .catch((error) => {
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
        setUserLoading(false);
      });
  };
  return { login, logintoast: <ToastContainer /> };
};

export default useLogin;
