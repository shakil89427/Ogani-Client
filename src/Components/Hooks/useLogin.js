import axios from "axios";
import useAuth from "../AuthProvider/useAuth";
import useDecodeUser from "./useDecodeUser";

const useLogin = () => {
  const { setUser, setUserLoading } = useAuth();
  const { decodeUser } = useDecodeUser();
  const login = (data) => {
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.data);
          decodeUser(res.data, setUser, setUserLoading);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Authentication Error");
        setUserLoading(false);
      });
  };
  return { login };
};

export default useLogin;
