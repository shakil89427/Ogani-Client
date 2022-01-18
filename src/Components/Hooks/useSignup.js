import axios from "axios";
import useDecodeUser from "./useDecodeUser";
import useAuth from "../AuthProvider/useAuth";

const useSignup = () => {
  const { decodeUser } = useDecodeUser();
  const { setUserLoading, setUser } = useAuth();
  const signup = (data) => {
    setUserLoading(true);
    axios
      .post("http://localhost:5000/signup", data)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("accessToken", res.data);
          decodeUser(res.data, setUser, setUserLoading);
        }
      })
      .catch((error) => {
        alert("Email Already Exist");
        setUserLoading(false);
      });
  };
  return { signup };
};

export default useSignup;
