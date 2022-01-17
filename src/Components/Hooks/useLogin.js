import axios from "axios";
import useAuth from "../AuthProvider/useAuth";
import useDecodeUser from "./useDecodeUser";

const useLogin = () => {
  const { setUser, setLoading } = useAuth();
  const { decodeUser } = useDecodeUser();
  const login = (data) => {
    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.data);
          decodeUser(res.data, setUser, setLoading);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Authentication Error");
        setLoading(false);
      });
  };
  return { login };
};

export default useLogin;
