import { isExpired } from "react-jwt";
import useDecodeUser from "./useDecodeUser";

const useUserCheck = () => {
  const { decodeUser } = useDecodeUser();

  const userCheck = (accesstoken, setUser, setUserLoading) => {
    const expiredtoken = isExpired(accesstoken);
    if (!accesstoken) {
      setUser({});
      return setUserLoading(false);
    }
    if (expiredtoken) {
      setUser({});
      localStorage.removeItem("accessToken");
      return setUserLoading(false);
    }
    decodeUser(accesstoken, setUser, setUserLoading);
  };
  return { userCheck };
};

export default useUserCheck;
