import axios from "axios";
import useAuth from "../AuthProvider/useAuth";

const useLogout = () => {
  const { setUser } = useAuth();

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/logout", {
        withCredentials: true,
      });
      if (response.data) {
        setUser({});
      }
    } catch (error) {}
  };
  return { logout };
};

export default useLogout;
