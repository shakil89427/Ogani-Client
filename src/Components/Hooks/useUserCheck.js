import { isExpired } from "react-jwt";
import useDecodeUser from "./useDecodeUser";

const useUserCheck = () => {
  const { decodeUser } = useDecodeUser();

  const userCheck = (accesstoken, setUser, setLoading) => {
    const expiredtoken = isExpired(accesstoken);
    if (!accesstoken) {
      setUser({});
      return setLoading(false);
    }
    if (expiredtoken) {
      setUser({});
      localStorage.removeItem("accessToken");
      return setLoading(false);
    }
    decodeUser(accesstoken, setUser, setLoading);
  };
  return { userCheck };
};

export default useUserCheck;
