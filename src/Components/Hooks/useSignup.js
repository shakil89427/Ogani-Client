import axios from "axios";
import useDecodeUser from "./useDecodeUser";
import useAuth from "../AuthProvider/useAuth";

const useSignup = () => {
  const { decodeUser } = useDecodeUser();
  const { setLoading, setUser } = useAuth();
  const signup = (data) => {
    axios
      .post("http://localhost:5000/signup", data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.data);
          decodeUser(res.data, setUser, setLoading);
        }
      })
      .catch((error) => {
        alert("Email Already Exist");
        setLoading(false);
      });
  };
  return { signup };
};

export default useSignup;
